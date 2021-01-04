

const TeamSelector = ({teamlist, onTeamSelected}) => {

    const handleChange = event => {
        onTeamSelected(event.target.value)
      }

    return (
        <select defaultValue="" onChange={handleChange}>
          <option value="" disabled>Choose a team</option>
          {teamlist.map(teamlist => {
            return (
              <option key={teamlist.tla} value={teamlist.tla}>{teamlist.name}</option>
            )
          })}
        </select>
    )
}

export default TeamSelector;