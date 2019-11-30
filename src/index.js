
// document.body.addEventListener('keyup', getKey, true);
document.body.addEventListener('keyup', getKey);

let myinput = document.getElementById('myinput')

window.setInterval(fetchdata, 250);

function getKey(event) {
   fetch('http://192.168.0.124:3000/send?message=' + event.key ) 
   fetchdata()
   
}
function fetchdata() {
    fetch('http://192.168.0.124:3000/').then(d => d.json()).then(writeContent)  
}



function writeContent(data){

    console.log(data.data) 
    myinput.setAttribute('value', data.data)
}

