import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Components/auth/Login'
import Register from './Components/auth/Register'
import Courses from './Components/Courses/Courses'
import AddNonTechEvent from './Components/Events/AddNonTechEvent'
import AddTechEvent from './Components/Events/AddTechEvent'
import EventDetailsComponet from './Components/Events/EventDetailsComponet'
import NonTechnicalEvent from './Components/Events/NonTechnicalEvent'
import TechnicalEvents from './Components/Events/TechnicalEvents'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import IndustryTalk from './Components/IndustryTalk/IndustryTalk'
import Navbar from './Components/Navbar/Navbar'
import UserProfile from './Components/Profile/UserProfile'
import AdminProfile from './Components/Profile/AdminProfile'
import Profile from './Components/Profile/Profile'

function App() {
  return (
    <div className="bg-violet-900">
      <Navbar />
      {/* <AddTechEvent/>
      <AddNonTechEvent/> */}
      {/* <NonTechnicalEvent/> */}
      {/* <AdminProfile/> */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/event" element={<TechnicalEvents/>}></Route>
        <Route path="/event/:id" element={<EventDetailsComponet/>}></Route>
        <Route path="/nonTechnicalEvent" element={<NonTechnicalEvent/>}></Route>
        <Route path="/nonTechnicalEvent/:id" element={<EventDetailsComponet/>}></Route>
        <Route path="/industryTalk" element={<IndustryTalk/>}></Route>
        <Route path="/courses" element={<Courses/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
