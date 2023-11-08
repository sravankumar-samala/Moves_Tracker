import {Routes, Route} from 'react-router-dom'
import MovesTracker from './components/MovesTracker'
import Logout from './components/Logout'
import GetQuotes from './components/GetQuotes/index'
import MyProfile from './components/MyProfile'
import './App.css'

const App = () => (
  <Routes>
    <Route index path="/" element={<MovesTracker />} />
    <Route path="/my-profile" element={<MyProfile />} />
    <Route path="/get-quotes" element={<GetQuotes />} />
    <Route path="/logout" element={<Logout />} />
  </Routes>
)

export default App
