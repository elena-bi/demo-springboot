import './App.css';
import React, {useState, useEffect } from 'react';

const helloWorld = "Hello World from React initial state";
let shouldUpdate = true;

async function doFetchWithGet(url, callback) {
  const headersAndBody = {
    method: 'GET',
    mode: 'cors',
    headers: {
      accept: 'text/plain',
    }
  };
  const response = await fetch(url, headersAndBody);

}


function App() {
  const [message, setMessage] = useState(helloWorld);

  useEffect(() => {
    if (shouldUpdate) {
      // setMessage("New value");
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
