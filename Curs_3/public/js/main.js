// // ########################## OOP 
// import { Animal } from '/js/animal.js';

const canvas = document.getElementById("game-canvas");
/** @type {CanvasRenderingContext2D} */
const  context = canvas.getContext('2d');

// const myPet = new Animal("Rocky");
// myPet.canEat();

// // ########################## Draw a shape in canvas
// //context.fillStyle = 'red';
// //context.fillrect(20, 20, 40, 20);



// // ########################## Draw a shape in canvas
// // context.fillStyle = 'red';
// // context.fillRect(200, 20, 40, 20);

// const george = new Image();
// george.src = 'assets/george.png'
// const GEORGE_WIDTH = 40;
// const GEORGE_HEIGHT = 45;
// let georgeX = 100;
// let georgeY = 100;
// george.onload = () => {
//     context.drawImage(george, 0*GEORGE_WIDTH, 0*GEORGE_HEIGHT, GEORGE_WIDTH, GEORGE_HEIGHT, 100, 100, GEORGE_WIDTH, GEORGE_HEIGHT)
// }

// const mario = new Image();
// mario.src = 'assets/mario.png'
// const MARIO_WIDTH = 32;
// const MARIO_HEIGHT = 39;
// mario.onload = () => {
//     context.drawImage(mario, 0*MARIO_WIDTH, 0*MARIO_HEIGHT, MARIO_WIDTH, MARIO_HEIGHT, 0, 0, MARIO_WIDTH, MARIO_HEIGHT)
// }

// const button = document.getElementById("myButton");
// button.addEventListener("click", function() {
//     console.log(this);
//     context.fillStyle = 'green';
//     context.fillRect(480, 20, 40, 20);
// });

// document.addEventListener('keydown', function(event){
//     context.clearRect(0, 0, 600, 400);
//     switch(event.key){
//         case 'ArrowUp': {
//             if(georgeX >= 0 && georgeX <= 600 && georgeY-10 >=0 && georgeY <= 400){
//             georgeY -= 10;
//             }
//             break;
//         }

//         case 'ArrowDown': {
//             if(georgeX >= 0 && georgeX <= 600 && georgeY >=0 && georgeY+40 <= 400){
//             georgeY += 10;
//             }
//             break;
//         }

//         case 'ArrowLeft': {
//             if(georgeX-10 >= 0 && georgeX <= 600 && georgeY >=0 && georgeY <= 400){
//             georgeX -= 10;
//             }
//             break;
//         }

//         case 'ArrowRight': {
//             if(georgeX >= 0 && georgeX+30 <= 600 && georgeY >=0 && georgeY <= 400){
//             georgeX += 10;
//             }
//             break;
//         }
//     }
//     context.drawImage(mario, 0*MARIO_WIDTH, 0*MARIO_HEIGHT, MARIO_WIDTH, MARIO_HEIGHT, 0, 0, MARIO_WIDTH, MARIO_HEIGHT)
//     context.drawImage(george, 0*GEORGE_WIDTH, 0*GEORGE_HEIGHT, GEORGE_WIDTH, GEORGE_HEIGHT, georgeX, georgeY, GEORGE_WIDTH, GEORGE_HEIGHT)
// });

const socket = io(); //Constanta care face conexiunea dintre backend si frontend

document.getElementById('join-chat-button').addEventListener('click', function(){
    const input = document.getElementById('user-name-input');
    const userName = input.value;
    console.log(userName);
    if(userName.length > 0){
        document.getElementById('user-name-missing').classList.add('display-none');
        socket.emit('join-chat', userName);
    }else{
        document.getElementById('user-name-missing').classList.remove('display-none');
    }
})

socket.on('joined-chat', function(){
    console.log("You joined chat");
    document.getElementById('join-chat').classList.add('display-none');
    document.getElementById('chat-container').classList.remove('display-none');
})

document.getElementById('send-message-button').addEventListener('click', function(){
    const input = document.getElementById('message');
    const message = input.value;
    socket.emit('send-message', message);
})

socket.on('new-message', function(message){
    const messagesContainer = document.getElementById('chat-messages');
    const messageElement = document.createElement('p');
    messageElement.innerHTML = message;
    messagesContainer.appendChild(messageElement);
})

document.getElementById('leave-chat-button').addEventListener('click', function(){
    socket.emit('leave-chat');
})

socket.on('menu', function(){
    console.log("You left chat");
    document.getElementById('join-chat').classList.remove('display-none');
    document.getElementById('chat-container').classList.add('display-none');
})

document.getElementById('create-game-button').addEventListener('click', function(){
    const input = document.getElementById('game-name-input');
    const gameName = input.value;
    console.log(gameName);
    if(gameName.length > 0){
        document.getElementById('game-name-missing').classList.add('display-none');
        socket.emit('create-game', gameName);
    }else{
        document.getElementById('game-name-missing').classList.remove('display-none');
    }
})

socket.on('game-loop', function(objectsForDraw){
    //console.log('game-loop');
    document.getElementById('join-chat').classList.add('display-none');
    document.getElementById('create-game-container').classList.add('display-none');
    document.getElementById('game-container').classList.remove('display-none');
    context.drawImage(document.getElementById('map-image'), 0, 0);

    objectsForDraw.forEach(function(objectForDraw){
        console.log(objectForDraw);
        context.drawImage(
            document.getElementById(objectForDraw.imageId),
            ...objectForDraw.drawImageParameters
        )
    })
})

