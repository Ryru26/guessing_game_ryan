


var Game = function(answer) {
  this.concerts = answer.length;
  this.counter = 0;
  this.guess + "";

  this.run = function() {
    this.guess = prompt("Can you guess how many concerts I have been to in 2015?");

    console.log("The user guessed " + this.guess);

    console.log("The correct answer is " + this.concerts);

  while (this.guess != this.concerts && this.counter <= this.concerts) {
      if (this.guess <= (this.concerts - 1)) {
      this.guess = prompt("I pity the fool that would guess that low!  Guess again!");

      } else if (this.guess >= (this.concerts + 1)) {
      this.guess = prompt("Ain't nobody got time for that many concerts!  Guess again!");
      }

      this.counter+=1;
  }

  if (this.counter > 10) {
  alert("You aren't my real friend.  You don't know me at all!");

  } else {
  var el = document.getElementById("win");
  el.innerHTML = "It only took you " + this.counter + " guesses! You must have gone to some shows with me. Here's who I saw: ";

  for  (var i = 0;i<answer.length;i++) {
    var el2 = document.getElementById ("bands");
    el2.innerHTML = answer + "<p> Maybe you can find one he went to at livenation.<a href= \"http://www.livenation.com/\"> Search for shows he might have been to</a></p>";

  }
  }
}
}

// var game3 = new Game(["dogs","cats","snakes"]);
// game3.run();

// var game4 = new Game ([1,2,3,4,5,6,7,8,9,10]);
// game4.run();

var game5 = new Game(["Metallica", "Red Hot Chili Peppers","311","Melvins"])

game5.run();




