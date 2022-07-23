import {BrowserRouter, Route, Switch} from 'react-router-dom'; 
import Nav from './components/Nav';
import Home from './components/Home';
import Project from './components/Projects';
import Contact from './components/Contact';
import '../src/main.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
      </div>
    </BrowserRouter>
  );
}

export default App;
