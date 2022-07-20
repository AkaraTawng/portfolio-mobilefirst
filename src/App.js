import {BrowserRouter, Route, Switch} from 'react-router-dom'; 
import Nav from './components/Nav';
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
