const holes = $('.hole');
const scoreBoard = $('.score');
const moles = $('.mole');
let lastHole;
var score;
var duration;
var points;

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

	$('.mole').click(function() {
		score++;
		points = score;
		scoreBoard.text(score);
	});

	setTimeout(function() {
		hole.classList.remove('up');
	},time);
}

function boink() {

}

function startGame() {
	score = 0;
	duration = 0;
	scoreBoard.text('0');
	var lol = setInterval(function(){ 
		if(duration < 12)
		{
			peep();
			duration += 1;
		}
		else
		{
			clearInterval(lol);
			alert("You got " + points + " points!");
		}
	}, 1000);
}

