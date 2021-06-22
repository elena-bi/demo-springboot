import './App.css';
import React, {useState, useEffect } from 'react';

const helloWorld = "Hello World from React initial state";
let shouldUpdate = true;
const helloApiEndpoint  = "http://localhost:8080/api/hello";

async function doFetchWithGet(url) {
    const headersAndBody = {
      method: 'GET',
      mode: 'cors',
      headers: {
      Accept: 'text/plain',
    }
  };
  const response = await fetch(url, headersAndBody);
  return response;
}


function App() {
  const [message, setMessage] = useState(helloWorld);

  useEffect(() => {
    if (shouldUpdate) {
      // setMessage("Hello with new value from useEffect");

      let responseStatus = 0;
      doFetchWithGet(helloApiEndpoint)
        .then(
          (response) => {
            responseStatus = response.status;     
            // console.log(responseStatus+">> Got response from API: ");
            return response.text();
          }        
        ).then(
          (responseText) => {
            setMessage(responseText);
          }
        ).catch(
          (error) => {
            if (responseStatus !== 0) { console.log(responseStatus); }
            console.log(error);
          }  
        );
      
    }
    return function () {
      shouldUpdate = false;
    }
  })

   
  class MessageContainer extends React.Component {
    render() {
      return (
        <div>
          {message}
        </div>
      )
    }
  }

  return (
    <div className="App">
      <MessageContainer/>
    </div>
  );
}






export default App;
