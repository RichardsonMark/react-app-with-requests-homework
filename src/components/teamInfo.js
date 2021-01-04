

const TeamInfo = ({teaminfo}) => {
    if (!teaminfo) {
        return null
      }
    return (
        <div className="team-info">
        <h2>{teaminfo.name}</h2>
        <img src={teaminfo.crestUrl} alt={`${teaminfo.name} crest`}></img>
        <p>Founded: {teaminfo.founded}</p>
        <p>Club Colors: {teaminfo.clubColors}</p>
        <p>Stadium: {teaminfo.venue}</p>
        <p>Phone: {teaminfo.phone}</p>
        <p>Website: {teaminfo.website}</p>  
        <p>Email: {teaminfo.email}</p>      
        <p>Office Address: {teaminfo.address}</p>
        </div>
    )
}

export default TeamInfo;