import { React, useState, useEffect } from "react";
import './components.css';
import { Image, Segment, Table } from "semantic-ui-react";

const LeagueStandings = () => {
  const [standings, setStandings] = useState([]);


  const getStandings = () => {
    fetch(`https://api.football-data.org/v2/competitions/SA/standings`, {
      headers: { "X-Auth-Token": "0c37514e7081466d8daac3d5661dffc7" },
    })
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        setStandings(data.standings[0].table);
        // console.log(data.standings[0]);
    })
};

  useEffect(() => {
    getStandings();
  }, []);
  return (
    <Segment >
        <img src="https://crests.football-data.org/SA.svg" alt="league logo" />
       <h1>Serie A league table</h1>
      <Table celled selectable basic>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>#</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>            
            <Table.HeaderCell>P</Table.HeaderCell>
            <Table.HeaderCell>W</Table.HeaderCell>
            <Table.HeaderCell>D</Table.HeaderCell>
            <Table.HeaderCell>L</Table.HeaderCell>
            <Table.HeaderCell>F</Table.HeaderCell>
            <Table.HeaderCell>A</Table.HeaderCell>
            <Table.HeaderCell>D</Table.HeaderCell>
            <Table.HeaderCell>Pts</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {standings.map((teamStanding) => {
            return (
              <Table.Row key={teamStanding.id}>
                <Table.Cell>{teamStanding.position}</Table.Cell>
                <Table.Cell className="clubName">
                  <Image src={teamStanding.team.crestUrl} inline size="mini" alt="{teamStanding.team.name} crest" />
                 {/* <span>{teamStanding.team.name}</span> */}
                </Table.Cell>
                <Table.Cell>{teamStanding.team.name}</Table.Cell>
                <Table.Cell>{teamStanding.playedGames}</Table.Cell>
                <Table.Cell>{teamStanding.won}</Table.Cell>
                <Table.Cell>{teamStanding.draw}</Table.Cell>
                <Table.Cell>{teamStanding.lost}</Table.Cell>
                <Table.Cell>{teamStanding.goalsFor}</Table.Cell>
                <Table.Cell>{teamStanding.goalsAgainst}</Table.Cell>
                <Table.Cell>{teamStanding.goalDifference}</Table.Cell>
                <Table.Cell>{teamStanding.points}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </Segment>
  );
};

export default LeagueStandings;