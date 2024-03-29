
const fromServer = require('../server');

//import * as gameLoop from '../server';

class Game{
    constructor(options){
        this.id = options.id;
        this.players = options.players
        this.start();
    }
    start(){
        const that = this;
        setInterval(function () { fromServer.gameLoop(that.id) }, 1000/60);
    }
}

module.exports = Game;