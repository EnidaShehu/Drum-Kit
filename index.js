var numberOfDrumButtons = document.querySelectorAll(".drum").length;
/*This line of code uses the document.querySelectorAll() 
method to find all elements on the page with the class name "drum", and assigns the number of buttons found to the variable 
numberOfDrumButtons. */

for (var i = 0; i < numberOfDrumButtons; i++) {

  //This line of code starts a for loop that iterates over all the buttons with the class name "drum".

  document.querySelectorAll("button")[i].addEventListener("click", function () {

    //This line of code adds a click event listener to the current button being iterated over in the for loop.

    var buttonInnerHTML = this.innerHTML;

    /*This line of code gets the innerHTML of the button that was clicked and assigns it to the variable buttonInnerHTML. 
    When the button is clicked, the code gets the innerHTML of the button and passes it 
    to the makeSound() and buttonAnimation() functions.*/

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
}

document.addEventListener("keydown", function (event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});

/*This code above adds a keydown event listener to the entire document. When a key is pressed, 
the code gets the key property of the event object and passes it to the makeSound() and buttonAnimation() functions.*/

function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();

      //This code plays an audio file when a specific button is clicked, depending on which case was matched in the switch statement.

      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();

      break;
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();

      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();

      break;
    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();

      break;
    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();

      break;
    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();

      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);

}

/* This is the buttonAnimation() function. It takes in the currentKey parameter, 
which is the value of key that was passed in to the function. 
The function finds the button with a class name matching the value of currentKey, adds the class "pressed" to it, 
and then removes the class after 100 milliseconds using the setTimeout() function*/