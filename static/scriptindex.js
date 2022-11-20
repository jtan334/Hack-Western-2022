let genre;
  


let fantasy = document.getElementById("fantasy");
fantasy.addEventListener("click",fantasy1)


let mystery = document.getElementById("mystery");
mystery.addEventListener("click",mystery2)


let romance = document.getElementById("romance");
romance.addEventListener("click",romance3)


let zombies = document.getElementById("zombies");
zombies.addEventListener("click",zombies4)


let historical = document.getElementById("historical");
historical.addEventListener("click",historical5);


let cyberpunk = document.getElementById("cyberpunk");
cyberpunk.addEventListener("click",cyberpunk6)


function fantasy1(){
let genre = "fantasy"
$.get('/main.html', {msg: genre});
console.log(genre)
clearScreen();
window.location.href = "main.html";
};
function mystery2(){
    genre = 'mystery'
    $.get('/main.html', {msg: genre});
    console.log(genre)
    clearScreen();
    window.location.href = "main.html";
};
    function romance3(){
        genre = 'romance'
        $.get('/main.html', {msg: genre});
        console.log(genre)
        clearScreen();
        window.location.href = "main.html";
        };
        function zombies4(){
            genre = 'zombies'
            $.get('/main.html', {msg: genre});
            console.log(genre)
            clearScreen();
            window.location.href = "main.html";
            };
            function historical5(){
                genre = 'historical'
                $.get('/main.html', {msg: genre});
                console.log(genre)
                clearScreen();
                window.location.href = "main.html";
                };
                function cyberpunk6(){
                    genre = 'cyberpunk'
                    $.get('/main.html', {msg: genre});
                    console.log(genre)
                    clearScreen();
                    window.location.href = "main.html";
                    };


function clearScreen() {
    if (document.getElementsByClassName("main") != null) {
      document.querySelectorAll(".main").forEach((e) => e.remove());
    }
}
