import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
// import 'react-loader-spinner/dis'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamCard: {},
    recentMatches: [],
    latestMatchDetails: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchesDetails()
  }

  getTeamMatchesDetails = async () => {
    const {match} = this.props
    // console.log({match})
    // console.log(`match: ${match}`)
    const {params} = match
    const {id} = params
    // console.log(id)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    this.setState({
      teamCard: updatedData,
      recentMatches: updatedData.recentMatches,
      latestMatchDetails: updatedData.latestMatchDetails,
      isLoading: false,
    })
  }

  render() {
    const {teamCard, recentMatches, latestMatchDetails, isLoading} = this.state

    console.log(teamCard)
    console.log(recentMatches)
    console.log(latestMatchDetails)
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    return (
      <div className="teamMatch">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className={`teamMatchesContainer ${id}`}>
            <div className="teamBannerContainer">
              <img
                src={teamCard.teamBannerUrl}
                alt="team banner"
                className="teamBannerImg"
              />
              <p>LatestMatches</p>
            </div>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="unordered">
              {recentMatches.map(eachMatch => (
                <MatchCard recentMatches={eachMatch} key={eachMatch.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
