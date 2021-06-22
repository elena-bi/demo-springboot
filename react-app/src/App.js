import './App.css';
import React, {useState, useEffect } from 'react';
import MessageContainer from './components/MessageContainer';
import doFetchWithGetAndCallBack from './connection/fetches';

const helloWorld = "Hello World from React initial state";
let shouldUpdate = true;
const helloApiEndpoint  = "http://localhost:8080/api/hello";




function App() {
  const [message, setMessage] = useState(helloWorld);

  useEffect(() => {
    if (shouldUpdate) {
      // setMessage("Hello with new value from useEffect");

      doFetchWithGetAndCallBack(helloApiEndpoint, function(text) {
        setMessage(text);
      });
      
    }
    return function () {
      shouldUpdate = false;
    }
  })

   
  

  return (
    <div className="App">
      <MessageContainer messageProp={message}/>
    </div>
  );
}






export default App;
