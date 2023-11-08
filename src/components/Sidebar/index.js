import {NavLink} from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <NavLink to="/" activeclassname="active">
          <li>My Moves</li>
        </NavLink>
        <NavLink to="/my-profile" activeclassname="active">
          <li>My Profile</li>
        </NavLink>
        <NavLink to="/get-quotes" activeclassname="active">
          <li>Get QUotes</li>
        </NavLink>
        <NavLink to="/logout" activeclassname="active">
          <li>Logout</li>
        </NavLink>
      </ul>
    </div>
  )
}
