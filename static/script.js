
let inputBtn =document.getElementById("inputBtn");
let input = document.getElementById("input");
inputBtn.addEventListener("click", readInput);
input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      inputBtn.click();
    }
  });
  getFirst();


function readInput(){
  let textInput = document.getElementById("input")

  displayGeneratedUser(textInput.value);
  getResponse(textInput.value);
  textInput.value=''
}

function displayGeneratedUser(e){

    let textArea = document.getElementById("chatbox")
    const item =document.createElement("div");
    item.className="userText"
    
    const h1 = document.createElement("span");
    
    const textNode = document.createTextNode(`${e}`);
h1.appendChild(textNode);
    item.appendChild(
           h1
                
            )
    ;
    textArea.appendChild(item)
    let scroll=document.getElementsByClassName("outer-container")
    scroll.scrollTop = scroll.scrollHeight; 
}
function getFirst(){
  $.get('/intialGet').done(function(data){
    displayGeneratedAI(data)
  });
}
function getResponse(){
    let textInput = document.getElementById("input").value;
    
  $.get('/get', {msg: textInput}).done(function(data){
    displayGeneratedAI(data)
  });
    
 //displayGeneratedAI( );
 
}

function displayGeneratedAI(e){

    let textArea = document.getElementById("chatbox")
    const item =document.createElement("div");
    item.className="botText"
    
    const h1 = document.createElement("span");
    
    const textNode = document.createTextNode(`${e}`);
h1.appendChild(textNode);
    item.appendChild(
           h1
                
            )
    ;
    textArea.appendChild(item)
    let scroll=document.getElementsByClassName("outer-container")
    scroll.scrollTop = scroll.scrollHeight; 
 
}






