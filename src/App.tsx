import React from 'react';
import {BrowserRouter as Router  ,Routes , Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import CreateTask from './pages/CreateTask';
import ListTask from './pages/ListTask';

function App() {
  return (

    //We can improve the folder structre and many things can be done in different and eligent way
    // but to be frank ,  I did nothing to do any of things neither in folder structre or in reuse logic 
    // using services concept and other things


   <React.Fragment>
      
      <Router>
        <Header></Header>
        <Routes>
          <Route path = "/" element = { <ListTask />}></Route>
          <Route path = "/create-task" element = { <CreateTask />}></Route>
        </Routes>
      </Router>
   </React.Fragment>
  );
}

export default App;
