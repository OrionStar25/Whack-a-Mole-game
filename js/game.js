const holes = $('.hole');
const scoreBoard = $('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
var score = 0;
var timeUp = false;

function randomTime(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function randomHoles(holes) {
	var idx = Math.floor(Math.random() * holes.length);
	var hole = holes[idx];

	if(hole === lastHole)
	{
		randomHoles(holes);
	}

	lastHole = hole;
	return hole;
}

function peep() {
	var hole = randomHoles(holes);
	var time = randomTime(200, 900);
	hole.classList.add('up');	

	var lol = setTimeout(() => {
      hole.classList.remove('up');
      if (!timeUp) 
      	peep();
      else
      {
      		clearInterval(lol);
      		alert("Your score is " + score);
      }	
    }, time);
}

function startGame() {
	score = 0;
	timeUp = false;
	scoreBoard.text('0');
	peep();
    setTimeout(() => timeUp = true, 10000)
}

function bonk(e) {
    if(!e.isTrusted) return; // cheater!
    score++;
    document.getElementById('sound1').play();
    this.parentNode.classList.remove('up');
    scoreBoard.text(score);
  }
  moles.forEach(mole => mole.addEventListener('click', bonk));


