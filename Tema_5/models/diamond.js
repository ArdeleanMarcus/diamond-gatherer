const RIGHT_EDGE = 550;
const DOWN_EDGE = 620;

class Diamond {
  constructor() {
    // Exercise 1
    // Basically the diamonds won't be generated inside the player camps because I excluded the 
    //width and height of the camps (200 px) and the game is now even more fairplay, because 
    //the diamonds are generated more to the center of the map, so both players have equal
    //chances at winning the game
    this.x = Math.floor(Math.random() * RIGHT_EDGE + 200 ); 
    this.y = Math.floor(Math.random() * DOWN_EDGE );
    this.imageId = 'diamond';
    this.width = 26;
    this.height = 21;
  }

  forDraw() {
    return {
      imageId: this.imageId,
      drawImageParameters: [
        this.x,
        this.y
      ]
    }
  }
}

module.exports = Diamond;