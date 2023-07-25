const gridContainer = document.getElementById("gridContainer");
let randomColorPen = false;

// define random color 
function randomRgbColor(){
    let r = Math.floor(Math.random() * 256); // Random between 0-255
    let g = Math.floor(Math.random() * 256); // Random between 0-255
    let b = Math.floor(Math.random() * 256); // Random between 0-255
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

const heading = "Etch A Sketch";



// Reset sketch with number of grid as input
function resetSketch(gridNumber = 15){
    for (let x=0;x<gridNumber;x++){
        const gridX = document.createElement('div');
        gridX.classList.add('row');
        gridContainer.appendChild(gridX);
        for (let y=0;y<gridNumber;y++){
            const gridY = document.createElement('div');
            gridY.classList.add('row-item');
            gridX.appendChild(gridY);
        }
    }

    const rowItems = document.querySelectorAll('.row-item');
    let game = false; 

    //listen to mouse click to enable to game
    rowItems.forEach(rowItem => rowItem.addEventListener('click',function (e) {
        game = !game;
    } ));


    //listen to mouse hover to color the canvas
    rowItems.forEach(rowItem => rowItem.addEventListener('mouseover',function (e) {
        if (game) {
            randomColorPen = document.getElementById("randomColorCheckbox").checked;
            if (randomColorPen)
            {
                e.target.style.background = randomRgbColor();
            }
            else e.target.style.background = '#696969';
        }
    } ));
}

//Initial reset sketch
resetSketch();

// Clear button
const clearBtn = document.querySelector('#clearBtn');

clearBtn.addEventListener('click',function (e) {
    const rowItems = document.querySelectorAll('.row-item');
    //rowItems.forEach(rowItem => rowItem.className = 'row-item');
    rowItems.forEach(rowItem => rowItem.style.background = 'beige');
});

// The slider
const slider = document.getElementById("myRange");
const output = document.getElementById("inputNum");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

// New button
const newBtn = document.querySelector('#newBtn');
newBtn.addEventListener('click',function (e) {
    gridContainer.innerHTML = "";
    resetSketch(slider.value);
});




