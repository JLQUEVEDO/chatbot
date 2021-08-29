import './App.css';
import { useEffect, useState } from 'react';

//importing the component Frame
import { Frame } from "./components/Frame"
import { getConversation } from './data/getConversation';

function App() {
  const [conversation, setConversation] = useState([])
  useEffect(() => {
    getConversation().then(c => setConversation(c)) 
  }, []);
  
  return (
    <div className="App">
      <Frame conversation={conversation} />
    </div>
  );
}

export default App;
