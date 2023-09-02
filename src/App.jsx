import NavBar from './components/Common/NavBar';
import Footer from "./components/Common/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import ExecutiveCommittee from "./components/ExecutiveCommittee/ExecutiveCommittee";
import Events from "./components/Events/Events";
import Membership from "./components/Membership/Membership";
import Gallery from "./components/Gallery/Gallery";
import Chencon from "./components/Chencon/Chencon";
import Error from "./components/Error/Error";
import { Route,Routes} from 'react-router-dom';
import "./index.css";






function App() {
  
  return (
  <div className="App">
 
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="home" element={<Home/>}/>
      <Route path="about" element={<About/>} /> 
       <Route path='contact' element={<Contact/>} />
       <Route path='trainers' element={<ExecutiveCommittee/>} />
       <Route path='events' element={<Events/>} />
       <Route path='membership' element={<Membership/>} />
       <Route path='gallery' element={<Gallery/>} />
       <Route path='chencon' element={<Chencon/>} />      
       <Route path='*' element={<Error />}/>
    </Routes> 
    <Footer/>
    </div>
  );
}

export default App;
