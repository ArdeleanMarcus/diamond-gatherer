// *****************************  Problem 5  *****************************

const canvas = document.getElementById("canvasId");
/**@type {CanvasRenderingContext2D} */
const context = canvas.getContext("2d");


const button = document.getElementById("myButton"); 
button.addEventListener('click', function(){
    context.fillStyle = 'blue';
    context.fillRect(Math.floor(Math.random()*561),Math.floor(Math.random()*381), 40, 20 ); 
    // I subtracted the length and width of the rectangle from each possible position in the 
    // canvas so that the rectangle will be displayed inside the canvas corectly, that's why 
    // the length of the canvas is 561 instead of 600 (subtracted the lenght of 40 of the rectangular)
})


// *****************************  Problem 6  *****************************
class Auto{
    constructor(make, breaking, electric, drift, autoDrive){
        this.make = make;
        this.breaking = breaking;
        this.electric = electric;
        this.drift = drift;
        this.autoDrive = autoDrive
    }
    canDrive(){
        console.log('Does ' + this.make + ' have autonomous drive ? ' + this.autoDrive);
    }

    canStop(){
        console.log('Can ' + this.make + ' stop quickly in case of an emergency ? ' + this.breaking);
    }

    canDrift(){
        console.log('Can ' + this.make + ' drift ? ' + this.drift);
    }


}

const Tesla = new Auto('Tesla', 'Yes', 'Yes', 'Depends', 'Yes');
const Wolkswagen = new Auto('Wolkswagen', 'Yes', 'No', 'Yes', 'No');
const BMW = new Auto('BMW', 'Yes', 'No', 'Yes', 'No')
Tesla.canDrive();
Tesla.canStop();
Tesla.canDrift();
Wolkswagen.canDrive();
Wolkswagen.canStop();
Wolkswagen.canDrift();
BMW.canDrive();
BMW.canStop();
BMW.canDrift();