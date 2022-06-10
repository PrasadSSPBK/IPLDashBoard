import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  //   const {latestMatchDetails} = teamMatchesCard
  //   console.log(latestMatchDetails)
  const newLatestMatchDetails = {
    umpires: latestMatchDetails.umpires,
    result: latestMatchDetails.result,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    id: latestMatchDetails.id,
    date: latestMatchDetails.date,
    venue: latestMatchDetails.venue,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    firstInnings: latestMatchDetails.first_innings,
    secondInnings: latestMatchDetails.second_innings,
    matchStatus: latestMatchDetails.match_status,
  }
  return (
    <div className="LatestMatchMainContainer">
      <div className="first">
        <p className="head">{newLatestMatchDetails.competingTeam}</p>
        <p className="para">{newLatestMatchDetails.date}</p>
        <p className="para1">{newLatestMatchDetails.venue}</p>
        <p className="para1">{newLatestMatchDetails.result}</p>
      </div>
      <div className="second">
        <img
          src={newLatestMatchDetails.competingTeamLogo}
          alt={`latest match ${newLatestMatchDetails.competingTeam}`}
          className="img"
        />
      </div>
      <div className="third">
        <p className="para2">First Innings</p>
        <p className="para1">{newLatestMatchDetails.firstInnings}</p>
        <p className="para2">Second Innings</p>
        <p className="para1">{newLatestMatchDetails.secondInnings}</p>
        <p className="para2">MAN OF THE MATCH</p>
        <p className="para1">{newLatestMatchDetails.manOfTheMatch}</p>
        <p className="para2">Umpires</p>
        <p className="para1">{newLatestMatchDetails.umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
