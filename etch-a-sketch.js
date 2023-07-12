


function resetSketch(gridNumber = 6){
    for (let x=0;x<gridNumber;x++){
        const gridX = document.createElement('div');
        gridX.classList.add('row');
        gridContainer.appendChild(gridX);
        for (let y=0;y<gridNumber;y++){
            const gridY = document.createElement('div');
            gridY.classList.add('column');
            gridX.appendChild(gridY);
        }
        
    }
}

resetSketch();