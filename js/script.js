const messageBody=document.querySelector(".message");
const send= document.getElementById("sendmsg");
var myAudio = new Audio('./assets/ring.wav');


function newMessage (){

    let message = document.querySelector("#msg").value;
    const newMsg=document.createElement("p");
    newMsg.className ="bg-success text-light p-2 m-2 rounded shadow w-75"
    console.log(message)
    newMsg.innerText = message;
    messageBody.appendChild(newMsg)
    ;
    setTimeout(messageBot,2000)
};
function messageBot (){
    
    let message = document.querySelector("#msg").value;
    const newMsg=document.createElement("p");
    newMsg.className ="bg-primary text-dark p-2 m-2  rounded shadow w-75 ms-auto p-2"
    console.log(message)
    newMsg.innerText = message;
    messageBody.appendChild(newMsg);
    myAudio.play()
};

$("#chat-circle").click(function() {    
    $("#chat-circle").toggle('scale');
    $(".bodychat").toggle('scale');
  })
  $(".chat-box-toggle").click(function() {
    $("#chat-circle").toggle('scale');
    $(".bodychat").toggle('scale');
  })