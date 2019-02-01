console.log("connected");
let colors = [];
let rgbGoal;
const easyCount = 3;
const hardCount = 6;
let squareCount = hardCount;
const newColorButton = document.getElementById('newColor');
const easyButton = document.getElementById('easy');
const hardButton = document.getElementById('hard');
const goal = document.getElementById('goal');
const h1 = document.querySelector('h1');
const message = document.getElementById('message');
const buttons = document.getElementsByTagName('button');
let squares = document.querySelectorAll('.square');
colorGenerator();
colorSquares();

function colorSquares(){
	colorGenerator();
	for(i=0; i < squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].addEventListener('click', function(){
			if(this.style.background !== rgbGoal){
				this.style.background = '#1C211D';
				message.textContent = 'Incorrect!';
			} else {
				message.textContent = 'Correct!';
				newColorButton.textContent = 'Play Again?';
				newColorButton.style.background = rgbGoal;
			}
			if(message.textContent === 'Correct!'){
				for(i=0;i<squares.length;i++){
					squares[i].style.background = rgbGoal;
				}
				h1.style.background = rgbGoal;
				for(i=0;i<buttons.length;i++){
					buttons[i].style.transition = 'all .5s';
					buttons[i].style.color = rgbGoal;
				}
				newColorButton.style.color = 'white';
			}
		});
	};
	goal.textContent = rgbGoal;
};

newColorButton.addEventListener('click', function(){
	colorSquares();
	if(this.textContent === 'Play Again?'){
		this.textContent = "Get New Colors"
	}
	message.textContent = '';
});

easyButton.addEventListener('click', function(){
	colorSquares();
	squareCount = easyCount;
	for(i=3; i<6; i++){
		squares[i].style.display = 'none';
	}
	rgbGoal = colors[Math.floor(Math.random()*2)];
	message.textContent = '';
});

easyButton.addEventListener('mouseover', function(){
	this.style.background = '#2B2B2B';
	this.style.color = 'white';
	this.style.borderLeft = '5px solid black';
	this.style.borderRight = '5px solid black';
});

easyButton.addEventListener('mouseout', function(){
	this.style.background = 'white';
	if(message.textContent === 'Correct!'){
		this.style.color = rgbGoal;
	}
	if(message.textContent === "Incorrect!" || message.textContent === ''){
		this.style.color = newColorButton.style.background;
	}
	this.style.borderStyle = 'none';
})

hardButton.addEventListener('click', function(){
	colorSquares();
	squareCount = hardCount;
	for(i=3;i<6;i++){
		squares[i].style.display = 'block';
	}
	message.textContent = '';
})

hardButton.addEventListener('mouseover', function(){
	this.style.background = '#2B2B2B';
	this.style.color = 'white';
	this.style.borderLeft = '5px solid black';
	this.style.borderRight = '5px solid black';
});

hardButton.addEventListener('mouseout', function(){
	this.style.background = 'white';
	if(message.textContent === 'Correct!'){
		this.style.color = rgbGoal;
	}
	if(message.textContent === "Incorrect!" || message.textContent === ''){
		this.style.color = newColorButton.style.background;
	}
	this.style.borderStyle = 'none';
})

function colorGenerator(){
	colors = []
	for(i=0; i < squareCount; i++){
		colors.push(pickColor());
	}
	rgbGoal = colors[Math.floor(Math.random() * (colors.length))];
};

function pickColor(){
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"
}