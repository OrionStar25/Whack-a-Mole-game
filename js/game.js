const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const score = document.querySelector('.score');
let lastHole;

function randomTime(min, max)
{
	return Math.floor(Math.random() * (max - min) + min);
}

function randomHole(holes)
{
	const idx = Math.floor(Math.random() * holes.length);
	const hole = holes[idx];
	if(hole === lastHole)
	{
		return randomHole(holes);
	}
	lastHole = hole;
	return hole;
}

function peep()
{
	const time = randomTime(200,1000);
	const hole = randomHole(holes);
	// console.log(time,hole);
}