
import './App.css';
import NonTechnicalEvent from './Components/Events/NonTechnicalEvent';
import TechnicalEvents from './Components/Events/TechnicalEvents';
import Footer from './Components/Footer/Footer';
import IndustryTalk from './Components/IndustryTalk/IndustryTalk';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
      <div className="bg-violet-900">
        
        <Navbar/>
        <Footer/>
        <IndustryTalk/>
        <TechnicalEvents/>
       <NonTechnicalEvent/>
        
      </div>
  );
}

export default App;
