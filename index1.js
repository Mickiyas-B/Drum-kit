var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });

    }

    document.addEventListener("keypress", function(event) {

    makeSound(event.key);

    buttonAnimation(event.key);
    buttonAnimation(event.key)
    

    });



function makeSound(key){
switch (key) {
    case "w":
        var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;

        case "a":
            tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            tom5 = new Audio('sounds/snare.mp3');
            tom5.play();
            break;

        case "k" :
            tom6 = new Audio('sounds/kick-bass.mp3');
            tom6.play();
            break;

        case "l":
            tom7 = new Audio('sounds/crash.mp3');
            tom7.play();
            break;
            
    default: console.log(key);
}

}

function buttonAnimation(ket){
var activeButton = document.querySelector("." + ket).classList;
    activeButton.add("pressed");

    setTimeout(function(){
        activeButton.remove("pressed"); 
    }, 300);
}






