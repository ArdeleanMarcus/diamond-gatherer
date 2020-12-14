const canvas = document.getElementById('game-canvas');
/** @type {CanvasRenderingContext2D} */
const context = canvas.getContext('2d');

const socket = io(); 


//Join Chat
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

//Sending messages
document.getElementById('send-message-button').addEventListener('click', function(){
    const input = document.getElementById('message');
    const message = input.value;

    
    var option= document.getElementById('choose-color').value;
    console.log(option);
    if(document.getElementById('black').selected){
        socket.emit('send-message', message.fontcolor('black')); // Changing font color to black
    }
    if(document.getElementById('red').selected){
        socket.emit('send-message', message.fontcolor('red')); // Changing font color to red
    };
    if(document.getElementById('blue').selected){
        socket.emit('send-message', message.fontcolor('blue')); // Changing font color to blue
    };
    input.value = ''; // Deleting message after user clicked on Send
})


socket.on('new-message', function(message){
    const messagesContainer = document.getElementById('chat-messages');
    const messageElement = document.createElement('p');
    messageElement.innerHTML = message;
    messagesContainer.appendChild(messageElement);
})

document.getElementById('leave-chat-button').addEventListener('click', function(){
    const input = document.getElementById('user-name-input');
    const userName = input.value;
    socket.emit('leave-chat', userName);
})

socket.on('menu', function(){
    console.log("You left chat");
    document.getElementById('join-chat').classList.remove('display-none');
    document.getElementById('chat-container').classList.add('display-none');
})


//Game
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

//Counter Button
document.getElementById('counter-button').addEventListener('click', function(){  
    socket.emit("count-button-pressed");
})

socket.on('increment-number', function(counter){
    counter +=1;
    var incrementedCounter = counter;
    socket.emit('incremented-number', incrementedCounter);
})

socket.on('display-counter', function(counter){
    const deleteCounter = document.getElementById('showCounter').innerHTML = '';
    const displayCounter = document.getElementById('showCounter');
    const counterNumber = document.createElement('p');
    counterNumber.innerHTML = counter;
    displayCounter.appendChild(counterNumber);
})

socket.on('display-online-chat-users', function(onlineChatUsers){
    const onChatUsers = document.getElementById('number-of-online-chat-users').innerHTML = '';
    console.log('ONLINE CHAT USERS : ' + onlineChatUsers);
    const message = document.getElementById('online-chat-users');
    const newMessage = document.getElementById('number-of-online-chat-users');
    newMessage.innerHTML = onlineChatUsers;
    message.appendChild(newMessage);
})

socket.on('join-chat-message', function(userName){
    //const onChatUsers = document.getElementById('number-of-online-chat-users').innerHTML = '';
    console.log('ONLINE CHAT USERS : ' + onlineChatUsers);
    const message = document.getElementById('online-chat-users');
    const newMessage = document.getElementById('number-of-online-chat-users');
    newMessage.innerHTML = onlineChatUsers;
    message.appendChild(newMessage);
})