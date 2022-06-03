const gridContainer = document.querySelector('.container')

//generate a square grid with side lengths of gridLength
function makeGrid(gridLength) {

//this loop creates the skelton for the grip
for (let i = 0; i < gridLength; i++){
    const newDiv = document.createElement('div')
    gridContainer.appendChild(newDiv).classList.add('column')
    
    //this loop actually creates the boxes
    for (let j=0; j < gridLength; j++){
        const newRow = document.createElement('div')
        const columns = document.querySelector('.column')
        newDiv.appendChild(newRow).classList.add('row')
       
    }
}
}

//to clear the grid we need to clear all the divs labeled column

function resetGrid(){
    while (gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild)
    }
    //turn this prompt into a button eventually
    let newGridLength = prompt('what size grid?')
    makeGrid(newGridLength)
}