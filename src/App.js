import logo from "./logo.svg";
import "./components/Header";
import TodoList from "./components/TodoList";

import { Button, Col, Container, Row } from 'react-bootstrap';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>

      <div className="App ">
         <input id="inputan" className="form-control w-50 mt-3" type="text" />
        <Button id="add-button" variant="success mt-3">Tambah</Button>

 
        <TodoList />
  </div>
       
    </Container>
  );
}

export default App;
