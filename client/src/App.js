import './App.css';
import React, { useEffect, useState } from 'react'

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>
      {(typeof backendData.objectss === 'undefined') ? (
        <p>Loading...</p>
      ): (
        backendData.objectss.map((objs, i) => (
          <p key={i}>{objs}</p>
        ))
      )}
    </div>
  );
}

export default App;
