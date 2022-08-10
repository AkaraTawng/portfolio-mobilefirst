import {BrowserRouter, Route, Routes} from 'react-router-dom'; 
import Nav from './components/Nav';
import Home from './components/Home';
import Project from './components/Projects';
import Contact from './components/Contact';

import '../src/main.css';

function App() {
  return <>
    <Nav/>
    <BrowserRouter>
      <Routes>
        
            <route path="/home">
              <Home/>
            </route>
        
      </Routes>
    </BrowserRouter>
    </>
}

export default App;
