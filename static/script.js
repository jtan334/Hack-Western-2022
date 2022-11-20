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
  

  let main = document.getElementById('main');

  


let fantasy = document.getElementById("fantasy");
fantasy.addEventListener("click",fantasy1)


let mystery = document.getElementById("mystery");
mystery.addEventListener("click",mystery2)


let romance = document.getElementById("romance");
romance.addEventListener("click",romance3)


let comedy = document.getElementById("comedy");
comedy.addEventListener("click",comedy4)


let historical = document.getElementById("historical");
historical.addEventListener("click",historical5);


let fairytale = document.getElementById("fairytale");
fairytale.addEventListener("click",fairytale6)


function fantasy1(){
let genre = 'Fantasy'
console.log(genre)
clearScreen();
enterName()
};
function mystery2(){
    let genre = 'Mystery'
    console.log(genre)
    clearScreen();
    enterName()
    };
    function romance3(){
        let genre = 'Romance'
        console.log(genre)
        clearScreen();
        enterName()
        };
        function comedy4(){
            let genre = 'Comedy'
            console.log(genre)
            clearScreen();
            enterName()
            };
            function historical5(){
                let genre = 'Historical'
                console.log(genre)
                clearScreen();
                enterName()
                };
                function fairytale6(){
                    let genre = 'Fairytale'
                    console.log(genre)
                    clearScreen();
                    enterName()
                    };


function clearScreen() {
    if (document.getElementsByClassName("main") != null) {
      document.querySelectorAll(".main").forEach((e) => e.remove());
    }
}
function enterName(){
    
}
function createGame(){

    data.forEach((e) => {
        const item = document.createElement("li");
        item.className = "results";
        item.appendChild(
          document.createTextNode(
            `${e.name} (Genre ID: ${e.genre_id}) (Parent ID: ${e.parent_id})`
          )
        );
        l.appendChild(item);
      });
}

function readInput(){
    let textInput = document.getElementById("input")

 displayGenerated(textInput.value);
 textInput.value=''
}

function displayGenerated(e){
    let textArea = document.getElementById("chatbox")
    const item =document.createElement("div");
    
    const h1 = document.createElement("span");
    
    const textNode = document.createTextNode(`${e}`);
h1.appendChild(textNode);
    item.appendChild(
           h1
                
            )
    ;
    textArea.appendChild(item)
   
}






