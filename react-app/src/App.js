import './App.css';
import React, {useState, useEffect } from 'react';

const helloWorld = "Hello World";
let shouldUpdate = true;

function App() {
  const [message, setMessage] = useState(helloWorld);

  useEffect(() => {
    if (shouldUpdate) {
      setMessage("New value");
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
