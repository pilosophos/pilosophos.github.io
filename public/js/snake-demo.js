const TEXT = "PROGRAMMING USED TO BE THIS NICE LITTLE HOBBY FOR ME WHERE I COULD MAKE THESE LITTLE THINGS THAT MADE ME HAPPY AND MOVE ON TO THE NEXT LITTLE THING STOP ONE DAY IT WOULD BE A LITTLE BOT AND THE NEXT DAY MAYBE A GAME STOP SO ID MAKE SO MANY OF THESE LITTLE THINGS BECAUSE IT WAS LIKE A SPIRAL OF HAPPINESS STOP BUT THEN EVERYONE STARTED SAYING ID MAKE A BUNCH OF MONEY PROGRAMMING SO I GOT A JOB AND NOW WHEN THE DAY IS OVER I JUST STARE AT MY COMPUTER AND FIND MY LOVE FOR CODE HAS DISAPPEARED STOP ITS A MATTER OF SELF EXPRESSION YOU KNOW? ONE OF THE JOYS OF MY LIFE HAS BEEN PERVERTED AND IT HURTS ME MORE THAN ANYTHING LIKE AN ARROW THROUGH MY HEART STOP I STILL HAVE MY DRAWING BUT LATELY A FRIEND OF MINE SAID HED BUY ONE OF MY PRINTS IF I SOLD THEM AND ON ONE HAND IM HAPPY SOMEONE LIKES WHAT I MAKE ENOUGH TO PAY FOR IT BUT ON THE OTHER IM AFRAID THAT THE MOMENT I EARN A SINGLE CENT FROM MY DRAWING MY LOVE FOR ART WOULD LEAVE ME JUST LIKE PROGRAMMING  ";

const COLORS = {
	"white": "white",
  "black": "black",
  "red": "red",
  "green": "limegreen",
}

let DIRECTION_KEYBINDS = {
	"ArrowLeft": "left",
  "ArrowUp": "up",
  "ArrowRight": "right",
  "ArrowDown": "down",
  "a": "left",
  "w": "up",
  "d": "right",
  "s": "down"
};

let OPPOSITES = {
	"left": "right",
  "right": "left",
  "up": "down",
  "down": "up"
}

let lastDirectionInput = "up";

let game = null;

function init() {
	let pixels = generateLetterMatrix();
  
  document.addEventListener("keydown", (e) => {
  	if (e.key in DIRECTION_KEYBINDS) {
    	let newDirection = DIRECTION_KEYBINDS[e.key];
    	if ((game && game.snake.length === 1) || newDirection !== OPPOSITES[lastDirectionInput]) { 
      	lastDirectionInput = newDirection;
      }
    	
  	}
	});
  
  document.addEventListener("keydown", (e) => {
  	if (!game && e.key in DIRECTION_KEYBINDS) {
    	game = new Game();
      resetMatrix(pixels);
	    window.requestAnimationFrame((timestamp) => animateGame(pixels, timestamp));
    }
	});
  
  showStartScreen(pixels);
}

function resetMatrix(pixels) {
	// reset all pixels
	for (let pixel of pixels) {
  	pixel.style.color = "";
  }
}

function lightRanges(pixels, litRanges) {  
  // start lighting them again
  for (let range of litRanges) {
  	let [start, end] = range;
    for (let i = start; i < end; i++) {
      pixels[i].style.color = COLORS.red;
    }
  }
}

function showStartScreen(pixels) {
	const litRanges = [
  	[285, 286], // S
    [317, 318], // N
  	[347, 350], // AKE
  	[522, 527], // PRESS
    [627, 629], // AN
    [630, 635], // ARROW
    [790, 792], // KE
    [897, 898], // Y
  ];
  lightRanges(pixels, litRanges);
}

function showGameOverScreen(pixels) {
  const litRanges = [
  	[211, 215], // GAME
    [419, 423], // OVER
		[522, 527], // PRESS
    [627, 629], // AN
    [630, 635], // ARROW
    [790, 792], // KE
    [897, 898], // Y
  ];
  lightRanges(pixels, litRanges);
}

function generateLetterMatrix() {
  const letterMatrix = document.getElementById("letter-matrix");
  const pixels = [];

  for (let i = 0; i < TEXT.length; i++) {
    if (i % 31 == 0 && i != 0) {
      letterMatrix.append(document.createElement("br"));
    }

    let letterSpan = document.createElement("span");
    letterSpan.textContent = TEXT[i] !== " " ? TEXT[i] : "*";
    letterSpan.id = i.toString();
    letterMatrix.append(letterSpan);
    pixels.push(letterSpan);
  }
  
  return pixels;
}

function animateGame(pixels, timestamp, updateTimestamp) {
	updateTimestamp ??= timestamp;
	let updateIntervalMs = 66;
  let nextUpdate = updateTimestamp;
	if (timestamp >= updateTimestamp + updateIntervalMs) {
  	nextUpdate = timestamp + updateIntervalMs;
    let [gameRunning, updates] = game.getUpdates();
  	for (let update of updates) {
    	let pixelNbr = update.pixel.y * game.matrixSizeX + update.pixel.x;
    	pixels[pixelNbr].style.color = update.color;
    }
    
    if (!gameRunning) {
    	game = null;
      showGameOverScreen(pixels);
    }
  }
  
	if (game) {
		requestAnimationFrame((timestamp) => animateGame(pixels, timestamp, nextUpdate));
  }
}

function mod(n, m) {
  return ((n % m) + m) % m;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

class Game {
	constructor() {
  	this.matrixSizeX = 31;
    this.matrixSizeY = 31;
    this.snake = [{x: Math.floor(this.matrixSizeX / 2), y: Math.floor(this.matrixSizeY / 2)}];
    this.food = this.generateNewFoodXY();
  }
  
  getUpdates() {
  	let matrixUpdates = [];
    let gameRunning = true; // game runs as long as it's not game over
        
  	// calc. new head pos
    const headDeltas = {
    	"up":    [ 0, -1],
      "down":  [ 0,  1],
      "left":  [-1,  0],
      "right": [ 1,  0]
    };
    const delta = headDeltas[lastDirectionInput];
    
    let head = this.snake[0];
    let newHead = {
    	x: mod( (head.x + delta[0]), this.matrixSizeX ),
      y: mod( (head.y + delta[1]), this.matrixSizeY )
    };
    
    for (let segment of this.snake) {
    	if (newHead.x === segment.x && newHead.y === segment.y) {
      	gameRunning = false;
      }
    }
    
    this.snake.unshift(newHead);
    head = newHead;
    
    let foodEaten = head.x === this.food.x && head.y === this.food.y;
    
    // light up new head
    matrixUpdates.push({
    	pixel: head,
      color: gameRunning ? COLORS.white : COLORS.red
    });
    
    if (gameRunning) {    
      if (!foodEaten) {
        // dim and remove old tail
        matrixUpdates.push({
          pixel: this.snake[this.snake.length - 1],
          color: COLORS.black
        });
        this.snake.pop();
      } else {
        // randomise position of food 
        this.food = this.generateNewFoodXY();
      }
    }
    
    // draw the food
    matrixUpdates.push({
      pixel: this.food,
      color: COLORS.green
    });
    
    return [gameRunning, matrixUpdates];
  }
  
  generateNewFoodXY() {
    return {x: getRandomInt(this.matrixSizeX), y: getRandomInt(this.matrixSizeY)};
  }
}

init();