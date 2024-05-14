let boxs = document.querySelectorAll(".box");

let turnX = true; // true = x ,, flase = y

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//{// for(let i = 0 ; i < box.length ; i++){ same thing
//     box[i].addEventListener("click" ,()=>{
//         console.log("Clicked on Box");
//     } )
// }

// for (dibba of box) {
//   dibba.addEventListener("click" , ()=>{
//     console.log("box was clicked");
//   });
// }}//

boxs.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turnX) {
      //if turen === true
      box.innerText = "X";
      turnX = false;
    } else {
      box.innerText = "0";
      turnX = true;
    }
    // after adding event listner to all button we have to
    // disable the button becz the value may be vari

    box.disabled = true;
    box.style.backgroundColor = "grey";

    checkWinner();
  });
});

// winner checking function

const checkWinner = () => {
  for (let pattern of winningPatterns) {
    // console.log(pattern[0] , pattern[1] , pattern[2]);
    // console.log(boxs[pattern[0]].innerText ,
    //             boxs[pattern[1]].innerText ,
    //             boxs[pattern[2]].innerText );

    let pos1Val = boxs[pattern[0]].innerText;
    let pos2Val = boxs[pattern[1]].innerText;
    let pos3Val = boxs[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("Here winner is", pos1Val);

        boxs[pattern[0]].style.backgroundColor = "red";
        boxs[pattern[1]].style.backgroundColor = "red";
        boxs[pattern[2]].style.backgroundColor = "red";
        showWinner(pos1Val);
      }
    }
  }
};

let winMsg = document.querySelector(".winner");

const showWinner = (winner) => {
  winMsg.innerText = `Winner is - Player ${winner}`;
  winMsg.classList.toggle("hide");
  // disable all the buttons after winner has been diclared
  for (let i = 0; i < boxs.length; i++) {
    boxs[i].disabled = true;
  }
};

let reset = document.querySelector(".reset");

// reset buttion
reset.addEventListener("click", () => {
  boxs.forEach((dibba) => {
    dibba.disabled = false;
    dibba.style.backgroundColor = "#6895D2";
    dibba.innerText = "";
    console.log("GAme has been reset");
    winMsg.classList.toggle("hide");
  });
});
