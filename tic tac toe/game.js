
let boxess = document.querySelectorAll(".boxes") ;
let trackO = true ;

const checkWinner = (box) => {
    if (
        (boxess[0].innerText !== "" && boxess[0].innerText === boxess[1].innerText && boxess[1].innerText === boxess[2].innerText) || // Row 1
        (boxess[3].innerText !== "" && boxess[3].innerText === boxess[4].innerText && boxess[4].innerText === boxess[5].innerText) || // Row 2
        (boxess[6].innerText !== "" && boxess[6].innerText === boxess[7].innerText && boxess[7].innerText === boxess[8].innerText) || // Row 3
        (boxess[0].innerText !== "" && boxess[0].innerText === boxess[3].innerText && boxess[3].innerText === boxess[6].innerText) || // Col 1
        (boxess[1].innerText !== "" && boxess[1].innerText === boxess[4].innerText && boxess[4].innerText === boxess[7].innerText) || // Col 2
        (boxess[2].innerText !== "" && boxess[2].innerText === boxess[5].innerText && boxess[5].innerText === boxess[8].innerText) || // Col 3
        (boxess[0].innerText !== "" && boxess[0].innerText === boxess[4].innerText && boxess[4].innerText === boxess[8].innerText) || // Diag 1
        (boxess[2].innerText !== "" && boxess[2].innerText === boxess[4].innerText && boxess[4].innerText === boxess[6].innerText)    // Diag 2
    ) {
        console.log("Winner MIL GAYA");
        alert("GAME OVER."); // Winner message
        window.location.href= "ttt.html" ;
    }
}













boxess.forEach(box => {
    box.addEventListener("click",()=>{       
  if(trackO==true) {
      box.innerText ="O" ;
      trackO = false;
      checkWinner(box) ;
      box.style.pointerEvents = "none";
  } else {
          box.innerText ="X" ;
          checkWinner(box) ;
          trackO = true ;
          box.style.pointerEvents = "none";
  }
  setTimeout(() => {
            checkWinner(box); 
        }, 100);
})

    
});

let res =document.querySelector("#res") ;
res.addEventListener("click",()=>{
  res =  window.location.href= "game.html" ;
})


