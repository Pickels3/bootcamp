import React from 'react';
import './App.css';
import Message from './message.js';
import Chatinput from './chatinput.js';



function createMessages (data){
  let results = []

  data.forEach(element => {
    results.push(<Message user={element.user} date={element.date} data={element.message}></Message>)
  });

  return results
}

class App extends React.Component {
 
  constructor() {
    super(...arguments);

    this.state = {
      data: []
    };

    setInterval(() => {
       this.setState({
         data: 
           [
             {
               message: "test",
               user:"Denise",
               date: Date.now(),
               color: "#3333"
             },
             {
              message: "test",
              user:"Miguel",
              date: Date.now(),
              color: "#3333"
            }
           ]
       })
      /*fetch ("http://192.168.1.112:3000/getMessages")
        .then(d => d.json())
        .then((newData) => {
          this.setState({
            data: newData.data
          })
        });*/      
    }, 200);
  }


 render() {
  return (
    <div className="App">
      <header className="App-header">
        {createMessages(this.state.data)}
      
        <Chatinput></Chatinput>
      </header>
    </div>
  );
 }
  
}

export default App;  
