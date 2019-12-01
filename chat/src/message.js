import React from 'react';

import './App.css';

function App(props) {
  return (
    <div className="App">
     {props.user}:
     {props.data}
     {new Date(parseInt(props.date)).toDateString()} 

    </div>
  );
}

export default App;
