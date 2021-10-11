import logo from "./logo.svg";
import "./App.css";
import "./components/Header";

import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
     <div className="App"> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input  className="form-control mt-3 w-50"  type="text" />
   <Button variant="success mt-3">Tambah</Button>
  
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
