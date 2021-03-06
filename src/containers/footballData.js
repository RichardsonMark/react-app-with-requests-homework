import { useState, useEffect } from "react";
import TeamSelector from '../components/teamSelector.js';
import TeamInfo from '../components/teamInfo.js';
import LeagueStandings from '../components/standings.js';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap, Map, Marker, Popup } from "react-leaflet";
import * as ELG from "esri-leaflet-geocoder";
import '../components/components.css';
import MyMap2 from '../components/MyMap';



const FootballContainer = () => {

    const [teamlist, setTeamList] = useState([]);
    const [SelectedTeam3LetterCode, setSelectedTeam3LetterCode] = useState('')


    const getTeamList = () => {
        console.log("getting country list info...")
        fetch(`http://api.football-data.org/v2/competitions/SA/teams`, {
            headers: {'X-Auth-Token': 'api_key'}
            })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setTeamList(data.teams);
                console.log(data.teams);
            })
    };

    useEffect(() => {
        getTeamList();
    }, [])
    // console.log(teamlist);
    ;



    const handleTeamSelected = tla => {
        setSelectedTeam3LetterCode(tla)
      }

     const selectedTeam = teamlist.find(teamlist => teamlist.tla === SelectedTeam3LetterCode)

     if (!teamlist) {
        return <h1>No teams!</h1>
    }
    return (
        <>
            <div className="teamchoice">
                <h1>Football API! - Serie A</h1>
                <h4>Choose a team from the list to find out more about them</h4>
                <TeamSelector teamlist={teamlist} onTeamSelected={handleTeamSelected} />
                <div>
                <TeamInfo teaminfo={selectedTeam}  />
                <h4>Stadium Map</h4>
                < MyMap />
                < MyMap2 />
                </div>
            </div>
            <div className="standing">
                <LeagueStandings teamlist={teamlist} />
            </div>
        </>
    )

    
    function MyMap() {
      function Geocoder({ address }) {
        const map = useMap();
    
        ELG.geocode()
          .text(address)
          .run((err, results, response) => {
            console.log(results.results[0].latlng);
            const { lat, lng } = results.results[0].latlng;
            map.setView([lat, lng], 16);
          });
    
        return null;
      }
    
      const position = [41.902782, 12.496366];
      return (
        <MapContainer
          className="map"
          center={position}
          zoom={16}
          style={{ height: 450, width: 450 }}
          
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
           <Geocoder address="piazzale lodovicio goisis, bergamo" />

        </MapContainer>
      );
    }


}

export default FootballContainer;
