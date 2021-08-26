import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

//importing the component Frame
import {Frame} from "./components/Frame"
import { getConversation } from './data/getConversation';

function App() {
  useEffect(()=>{
    getConversation()
  },[]);
  return (
    <div className="App">
     <Frame />
    </div>
  );
}

export default App;
