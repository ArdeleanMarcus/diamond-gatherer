//importing data for problem 3
import {Employee} from './employee.js';
import {Person} from './person.js';

const socket = io();

document.getElementById('join-chat-button').addEventListener('click', function() {
    const input = document.getElementById('user-name-input');
    const userName = input.value;
    if (userName.length > 0) {
        document.getElementById('user-name-missing').classList.add('display-none');
        socket.emit('join-chat', userName);
    } else {
        document.getElementById('user-name-missing').classList.remove('display-none');
    }
})

socket.on('joined-chat', function() {
    console.log('You joined chat!');
    document.getElementById('chat-container').classList.remove('display-none');
})

document.getElementById('send-message-button').addEventListener('click', function() {
    const input = document.getElementById('message');
    const message = input.value;
    socket.emit('send-message', message);
})

socket.on('new-message', function(message) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageElement = document.createElement('p');
    messageElement.innerHTML = message;
    messagesContainer.appendChild(messageElement);
})

document.getElementById('leave-chat-button').addEventListener('click', function () {
    socket.emit('leave-chat');
})

socket.on('menu', function() {
    console.log('You left chat!');
    document.getElementById('chat-container').classList.add('display-none');
})

//Problem 3
const employee = new Employee('Ardelean', 'Marcus', 1000, 8, 109);
employee.salary_per_month();
employee.work_hours();
employee.worker_ID();

const person = new Person('John','McBride', 2);
person.drink();

//Problem 4
const arr = [1 ,-2, 6, -7,10, 9, 14, true, false, null, undefined];

const result = 
    arr
        .filter((nr) => typeof nr === 'number') // Searching only for numbers
        .map((nr) => nr * 10) // Each number that was found is multiplied with 10
        .reduce((multiplied, nr) => multiplied + nr); // Summing all the multiplied numbers together
console.log(result);