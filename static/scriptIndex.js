let genre;
  


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
window.location.href = "main.html";
};
function mystery2(){
    genre = 'Mystery'
    console.log(genre)
    clearScreen();
    window.location.href = "main.html";
};
    function romance3(){
        genre = 'Romance'
        console.log(genre)
        clearScreen();
        window.location.href = "main.html";
        };
        function comedy4(){
            genre = 'Comedy'
            console.log(genre)
            clearScreen();
            window.location.href = "main.html";
            };
            function historical5(){
                genre = 'Historical'
                console.log(genre)
                clearScreen();
                window.location.href = "main.html";
                };
                function fairytale6(){
                    genre = 'Fairytale'
                    console.log(genre)
                    clearScreen();
                    window.location.href = "main.html";
                    };


function clearScreen() {
    if (document.getElementsByClassName("main") != null) {
      document.querySelectorAll(".main").forEach((e) => e.remove());
    }
}

