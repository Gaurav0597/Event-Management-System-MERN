import { Route, Routes } from 'react-router-dom'
import './App.css'
import Courses from './Components/Courses/Courses'
import AddEvent from './Components/Events/AddEvent'
import EventDetailsComponet from './Components/Events/EventDetailsComponet'
import NonTechnicalEvent from './Components/Events/NonTechnicalEvent'
import TechnicalEvents from './Components/Events/TechnicalEvents'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import IndustryTalk from './Components/IndustryTalk/IndustryTalk'
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <div className="bg-violet-900">
      <Navbar />
      {/* <AddEvent/> */}
      {/* <Courses/> */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/event" element={<TechnicalEvents/>}></Route>
        <Route path="/event/:id" element={<EventDetailsComponet/>}></Route>
        <Route path="/nonTechnicalEvent" element={<NonTechnicalEvent/>}></Route>
        <Route path="/nonTechnicalEvent/:id" element={<EventDetailsComponet/>}></Route>
        <Route path="/industryTalk" element={<IndustryTalk/>}></Route>
     
        <Route></Route>
      </Routes>
      <Footer />
      {/* <IndustryTalk />
      <TechnicalEvents />
      <NonTechnicalEvent /> */}
    </div>
  )
}

export default App
