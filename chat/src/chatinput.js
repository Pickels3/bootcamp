import React from 'react';

import './App.css';

function sendmessage(event){
    let myinput=document.getElementById('myinput')
    console.log(myinput.value)

    let url="http://192.168.1.112:3000/addMessage?message=" + myinput.value + '&user=Raquel' + '&date='+ Date.now()
    fetch(url);

    myinput.value=""
    

}

function onKeyUp(event){
    if (event.key === "Enter")
    { 
        sendmessage()
    }
}

function chatinput() {
  return (
    
     <section className="littleBody">
         <input  className="chatInput" type="text" id="myinput" onKeyUp={onKeyUp}/>
         <input className="clickButton" value="Send" type="button" onClick={sendmessage} />  

         
         </section>

    
  );
}

export default chatinput;