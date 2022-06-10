import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamsCard} = props
  const {id, name, teamImageUrl} = teamsCard
  //   console.log(teamsCard)
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="listItemContainer">
        <div className="teamCardContainer">
          <img src={teamImageUrl} alt={name} className="teamImageUrl" />
          <p className="teamImageHead">{name}</p>
        </div>
      </li>
    </Link>
  )
}
export default TeamCard
