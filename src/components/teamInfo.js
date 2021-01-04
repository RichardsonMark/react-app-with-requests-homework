

const TeamInfo = ({teaminfo}) => {
    if (!teaminfo) {
        return null
      }
    return (
        <div className="team-info">
        <p>Name: {teaminfo.name}</p>
        <p>Founded: {teaminfo.founded}</p>
        <img src={teaminfo.crestUrl} alt={`${teaminfo.name} crest`}></img>
        <p>Stadium: {teaminfo.venue}</p>
        <p>Address: {teaminfo.address}</p>
        <p>Club Colors: {teaminfo.clubColors}</p>
        </div>
    )
}

export default TeamInfo;