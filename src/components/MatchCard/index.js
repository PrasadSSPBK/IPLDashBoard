import './index.css'

const MatchCard = props => {
  const {recentMatches} = props
  const newRecentMatches = {
    competingTeamLogo: recentMatches.competing_team_logo,
    competingTeam: recentMatches.competing_team,
    matchStatus: recentMatches.match_status,
    result: recentMatches.result,
  }
  const {
    competingTeamLogo,
    competingTeam,
    matchStatus,
    result,
  } = newRecentMatches

  const statusClassName = matchStatus === 'Won' ? 'green' : 'red'
  return (
    <li className="matchContainer">
      <div className="firstContainer">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="compTeamIm"
        />
        <p className="para">{competingTeam}</p>

        <p className="para1">{result}</p>
        <p className={statusClassName}>{matchStatus}</p>
      </div>
    </li>
  )
}
export default MatchCard
