import {useCallback,useState} from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Details from './components/Details';
import Problem from './components/Problem';
import UserContext from './components/UserContexct';
import NameContext from './components/NameContext';
function App() {
  return (
    <div >
  <UserContext>
    <NameContext>
  <Routes>
    
    <Route exact path="/" element={<Details/>} /> 
    <Route exact path='/problem' element={<Problem/>}/>
    
    </Routes>
    </NameContext>
    </UserContext>
   </div>
  );
}

export default App;
