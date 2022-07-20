import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {
  
  Routes,
  Route,
} from "react-router-dom";
import Menspage from './components/pages/Menspage';
import Women from './components/pages/Women';
import EveryThing from './components/pages/EveryThing';
import Sale from './components/pages/Sale';
import Serach from './components/pages/Serach';
import Home from './components/Home/Home';




function App() {
  return (
    <div className="App">
  <Navbar/>
  
 
  <Routes>
      {/* <Route path="/" element={<App />} /> */}
      <Route path="" element={<Menspage/>} />
      <Route path="womenwear" element={<Women/>} />
      <Route path="everythimg" element={<EveryThing/>} />
      <Route path="sale" element={<Sale/>} />
      <Route path="search" element={<Serach/>} /> 
    </Routes>

    <Home/>

    </div>
  );
}

export default App;
