// grab container
const container = document.getElementById("container");

function makeRows(rows, cols) {
    // set row and col amount in cssgrid
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  
  // loop div creation rows*divs amount
  for (i = 0; i < (rows * cols); i++) {
    //create a div
    let cell = document.createElement("div");
    // attach to container as child
    container.appendChild(cell).className = "grid-item";
    container.appendChild(cell).id = "grid-item";
  };
};

makeRows(16, 16);

//Create a node list of all boxes named grid item
let boxes = document.querySelectorAll(".grid-item");

// loop that listens for event listener as many times as there is boxes
for (let i=0; i<boxes.length; i++) {

    boxes[i].addEventListener('mouseover', () => {
        boxes[i].classList.add('gridBackground');
    });

}




