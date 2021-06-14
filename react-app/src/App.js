import './App.css';
import React, {useState, useEffect } from 'react';

const helloWorld = "Hello World";


function App() {
  const [message, setMessage] = useState(helloWorld);

  return (
    <div className="App">
      {message}
    </div>
  );
}

export default App;
