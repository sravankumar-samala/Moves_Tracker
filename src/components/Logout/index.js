import Sidebar from '../Sidebar'

export default function Logout() {
  return (
    <div className="main-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="my-profile-container content-container">
        <h1>Logout</h1>
      </div>
    </div>
  )
}
