import Sidebar from '../Sidebar'

export default function MyProfile() {
  return (
    <div className="main-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="my-profile-container content-container">
        <h1>My Profile</h1>
      </div>
    </div>
  )
}
