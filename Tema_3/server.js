const express = require('express');
const { type } = require('os');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http); 
const Game = require('./models/game.js'); // Importing the Game js file
const Player = require('./models/player.js'); // Importing the Player js file

let count = null;
let counter = 0;
let onlineChatUsers = 0;

// Open server at port 5000
http.listen(5000, function(){
    console.log('[SERVER STARTED AT PORT 5000]');
})

app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html');
})

app.use(express.static(__dirname + '/public'));

app.get('/about', function(request, response){ // Creating a new /about route
    response.sendFile(__dirname + '/about.html'); // Gave it to display the about.html file 
})

io.on('connection', function(socket){
    count++;
    console.log('Number of sockets conected : ' + count);
    io.sockets.emit('online', count);
    console.log('[SOCKET CONNECTED]' + socket.id); 
    socket.join('count-number'); 
     
    socket.on('join-chat', function(userName){
        onlineChatUsers++; // When user joins chat, I increment the number of users online in chat
        socket.join('online-chat-users');
        console.log('Online chat users: ' + onlineChatUsers);
        io.emit('display-online-chat-users', onlineChatUsers); //Sending the numbers of online chat users to all sockets
        console.log('[USER JOINED CHAT]', socket.id, userName)
        chatUsers[socket.id] = userName;
        socket.join('chat');
        socket.emit('joined-chat');
        io.to('chat').emit('new-message', `${userName} joined chat`); // When user joins chat, it displays X joined chat for every
    })

    socket.on('send-message', function(message){
        console.log('USER SENT MESSAGE', message);
        io.to('chat').emit('new-message', `${chatUsers[socket.id]}: ${message}`);
    })

    socket.on('leave-chat', function(userName){
        onlineChatUsers--; //When user leaves chat, I decrement the number of users online in chat
        console.log('Online chat users: ' + onlineChatUsers);
        socket.leave('online-chat-users');
        io.emit('display-online-chat-users', onlineChatUsers); //Sending the numbers of online chat users to all sockets
        console.log('[USER LEFT CHAT]', socket.id);
        delete chatUsers[socket.id];
        socket.leave('chat');
        socket.emit('menu');
        io.to('chat').emit('new-message', `${userName} left chat`); // When user leaves chat it displayes X leaves chat for every socket
    })

    socket.on('create-game', function(gameName){
        console.log('[NEW GAME CREATED]');
        const gameId = 'game-' + socket.id;
        const players = [new Player()];
        const game = new Game({
            id: gameId, 
            players: players
        });
        games[gameId] = game;
        socket.join(gameId);
    })

    //Count button 
    socket.on('count-button-pressed', function(){
        //socket.join('count-number');
        socket.emit('increment-number', counter);
    })

    socket.on('incremented-number', function(incrementedCounter){
        counter = incrementedCounter;
        io.emit('display-counter', counter);
    })

    io.emit('display-counter', counter); // I added a new emit to all sockets with the curent count number 

    socket.on('disconnect', function(){ // Checking when a user disconnects
        console.log('[SOCKET DISCONNECTED]' + socket.id); 
        count--;
        console.log()
        console.log('Number of sockets conected : ' + count);   
        socket.emit('online', count);
    })
    
})

function gameLoop(id){
    const objectsForDraw = [];
    games[id].players.forEach(function(player){
        objectsForDraw.push(player.forDraw());
    })
    io.to(id).emit('game-loop', objectsForDraw);
}

const chatUsers = {};
const games = {};

module.exports.gameLoop = gameLoop;
