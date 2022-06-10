import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsCard: [], isLoading: true}

  componentDidMount() {
    this.getTeamsCard()
  }

  getTeamsCard = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    // console.log(data)
    const updatedData = data.teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamsCard: updatedData, isLoading: false})
  }

  render() {
    const {teamsCard, isLoading} = this.state
    // console.log(teamsCard)
    // const {id, name, teamImageUrl} = teamsCard

    return (
      <div className="mainHomeContainer">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="mainContainer">
            <div className="iplImgContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="iplLogo"
              />
              <h1 className="iplLogoHead">IPL Dashboard</h1>
            </div>
            <ul className="uoListContainer">
              {teamsCard.map(eachTeamCard => (
                <TeamCard teamsCard={eachTeamCard} key={eachTeamCard.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default Home
