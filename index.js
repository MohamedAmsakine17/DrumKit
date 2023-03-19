var buttons = document.querySelectorAll(".drum");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    playSound(this.innerHTML);
    currentButton(this.innerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  playSound(event.key);
  currentButton(event.key);
});

function playSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
  }
}

function currentButton(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);

  // for (var i = 0; i < buttons.length; i++) {
  //   if (buttons[i].innerHTML === activeButton.innerHTML) {
  //     buttons[i].classList.add("pressed");
  //   } else {
  //     buttons[i].classList.remove("pressed");
  //   }
  // }
}
