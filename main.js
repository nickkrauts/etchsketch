const gridContainer = document.querySelector('.container')
let gridLength = 16;

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
makeGrid(16);
//to clear the grid we need to clear all the divs labeled column

function resetGrid(){
    while (gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild)
    }
    //turn this prompt into a button eventually
    let newGridLength = prompt('what size grid?')
    makeGrid(newGridLength)
}

//create an id of 'cell#n' on each cell
for(let i = 1; i <=gridLength; i++){
    const gridCell = document.querySelectorAll('.column') 
    gridCell[i-1].setAttribute("id", `cell${i}`)
  }

//on mouseover change cell id to 'hovered'
for(let i = 1; i <= 25; i++){ 
    const cell = document.querySelector(`#cell${i}`) 
  cell.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    event.target.setAttribute('id','hovered');
  
    // reset the color after a short delay (make this customizedUX)
    setTimeout(function() {
      //uncomment line to bring back timeout  
      //event.target.setAttribute('id',`cell${i}`);
    }, 5000);
  }, false);
  }