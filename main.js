// var name = "Marcus"; //string
// var ammount = 23; //numeric
// var knowsJavascript = true; //boolean
// var fruits = ["apple", "lemon", "orange"]; //array


// function add(){
//     return 2 + 3;
// }


// //tipul obiect
// var person = {
//     height: 2,
//     canWalk: function(){
//         console.log("Yes, I can walk");
//     },
//     name: "Julia"
// }

// **************************** Curs 2 ******************** */
// const canvas = document.getElementById("canvasId");
// /** @type {CanvasRenderingContext2D} */
// const  context = canvas.getContext('2d');

// ################################ Functions
// function test(){
//     console.log("test");
// }

// var test = function()
//     console.log("test");
// }

// ################################ Callbacks 

// function log(number){
//     console.log("Sunt executata dupa ce adun numerele " + number);
// }
// function add(firstNumber, secondNumber){
//     let result = firstNumber + secondNumber;
//     console.log(result);
//     log(result);
// }

// function add(firstNumber, secondNumber, log){
//     let result = firstNumber + secondNumber;
//     console.log(result);
//     log(result);
// }

// add(2, 3, log);

// ################################Context
// console.log(this);

// function test(){
//     console.log("This from function " + this);

// }

// test();

// let object = {
//     name: 'Paul',
//     age: 25, 
//     canWalk: function(){
//         console.log("Age: :" + this.age);
//     },
//     canEat: function(){
//         setTimeout( () => {
//             console.log("This din arrow function " + this.name);
//         },200)
//     }
// }

// object.canWalk();

// function Person(name, age){ // functie constructor
//     this.name = name;
//     this.age = age;
//     this.canWalk = () => {
//         console.log(this.name + " can walk")
//     }
// }

// let me = new Person('Andrei', 27);
// let you = new Person('Alex', 28);
// me.canWalk();
// you.canWalk();
// object.canEat();

//################## Structuri repetitive

// let index = 0;

//  while(index < 10){
//      console.log(index);
//      index++;
//  }

//  do{
//      console.log(index);
//      index++;
//  }while(index<10)

//  for(let i=0; i < 10; i++){
//      console.log(i)
//  }

//  let cars = ["Dacia", "Skoda", "Wolkswagen"];

//  for(let i=0; i < cars.length; i++){
//     console.log("Pozitie : " + i + " valoare " + cars[i]);
// }

// cars.forEach(function(item, index){
//     console.log("Pozitie : " + index + " valoare " + item);
// })

// ########################## OOP 
const myPet = new Animal("Rocky");
myPet.canEat();

// ########################## Draw a shape in canvas
context.fillStyle = 'red';
context.fillrect(20, 20, 40, 20);

const canvas = document.getElementById("canvasId");
/** @type {CanvasRenderingContext2D} */
const  context = canvas.getContext('2d');

// ########################## Draw a shape in canvas
// context.fillStyle = 'red';
// context.fillRect(200, 20, 40, 20);

const george = new Image();
george.src = 'assets/george.png'
const GEORGE_WIDTH = 40;
const GEORGE_HEIGHT = 45;
let georgeX = 100;
let georgeY = 100;
george.onload = () => {
    context.drawImage(george, 0*GEORGE_WIDTH, 0*GEORGE_HEIGHT, GEORGE_WIDTH, GEORGE_HEIGHT, 100, 100, GEORGE_WIDTH, GEORGE_HEIGHT)
}

const mario = new Image();
mario.src = 'assets/mario.png'
const MARIO_WIDTH = 32;
const MARIO_HEIGHT = 39;
mario.onload = () => {
    context.drawImage(mario, 0*MARIO_WIDTH, 0*MARIO_HEIGHT, MARIO_WIDTH, MARIO_HEIGHT, 0, 0, MARIO_WIDTH, MARIO_HEIGHT)
}

const button = document.getElementById("myButton");
button.addEventListener("click", function() {
    console.log(this);
    context.fillStyle = 'green';
    context.fillRect(480, 20, 40, 20);
});

document.addEventListener('keydown', function(event){
    context.clearRect(0, 0, 600, 400);
    switch(event.key){
        case 'ArrowUp': {
            georgeY -= 10;
            break;
        }

        case 'ArrowDown': {
            georgeY += 10;
            break;
        }

        case 'ArrowLeft': {
            georgeX -= 10;
            break;
        }

        case 'ArrowRight': {
            georgeX += 10;
            break;
        }
    }
    context.drawImage(mario, 0*MARIO_WIDTH, 0*MARIO_HEIGHT, MARIO_WIDTH, MARIO_HEIGHT, 0, 0, MARIO_WIDTH, MARIO_HEIGHT)
    context.drawImage(george, 0*GEORGE_WIDTH, 0*GEORGE_HEIGHT, GEORGE_WIDTH, GEORGE_HEIGHT, georgeX, georgeY, GEORGE_WIDTH, GEORGE_HEIGHT)
});