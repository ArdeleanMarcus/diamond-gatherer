// *****************************  Problem 1  *****************************
// Method 1
var coding = ["Love", "I", "Javascript"];
coding.shift(); // Deleting the first element of the array * 2
coding.shift();
coding.unshift("love"); // Adding the new elements at the beggining of the array
coding.unshift("I");
console.log(coding); // Display the results

// Method 2
coding.splice(0, 2, "I", "love"); // replacing 2 elements starting from index 0. 
//The index 0 element will be replaced with "I", and the index 1 element will be replaced with "love"
console.log(coding); // Display the results

// *****************************  Problem 2  *****************************

var list = ["Paul", 1, false, { name: "Jon Snow"}, [1, 2, 3], null, undefined, function() { console.log('Test')} ];
var i = 0;
while(i < list.length){
    console.log("index : " + list.indexOf(list[i]));
    console.log("value : " + list[i]);
    console.log("type : " + typeof(list[i]));
    i++;
}

// *****************************  Problem 3 and 4  *****************************
const canvas = document.getElementById("canvasId");
/**@type {CanvasRenderingContext2D} */
const context = canvas.getContext("2d");

const mario = new Image();
mario.src = 'assets/mario.png'
const MARIO_WIDTH = 32;
const MARIO_HEIGHT = 39;
let marioX = 100;
let marioY = 100;
mario.onload = () => {
    context.drawImage(mario, 0*MARIO_WIDTH, 0*MARIO_HEIGHT, MARIO_WIDTH, MARIO_HEIGHT, 100, 100, MARIO_WIDTH, MARIO_HEIGHT)
}

document.addEventListener('keydown', function(event){
    context.clearRect(0, 0, 600, 400);
    switch(event.key){
        case 'w': {
            if(marioX >= 0 && marioX <= 600 && marioY-10 >=0 && marioY <= 400){
            marioY -= 10;
            break;
            }
        }

        case 's': {
            if(marioX >= 0 && marioX <= 600 && marioY >=0 && marioY+40 <= 400){
            marioY += 10;
            break;
            }
        }

        case 'a': {
            if(marioX-10 >= 0 && marioX <= 600 && marioY >=0 && marioY <= 400){
            marioX -= 10;
            break;
            }
        }

        case 'd': {
            if(marioX >= 0 && marioX+30 <= 600 && marioY >=0 && marioY <= 400){
            marioX += 10;
            break;
            }
        }
    }
    context.drawImage(mario, 0*MARIO_WIDTH, 0*MARIO_HEIGHT, MARIO_WIDTH, MARIO_HEIGHT, marioX, marioY, MARIO_WIDTH, MARIO_HEIGHT)
});

