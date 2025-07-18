let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let renewBtn = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");

// // 1st
let turnX = true; //ply-x or ply-0

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnX) {
            box.innerText = "X";
            box.style.color = "red";
            turnX = false;
        } else {
            box.innerText = "O";
            box.style.color = "blue";
            turnX = true;
        }
        box.disabled = true;

        checkWinner();   
    });
});

const enableBtn = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
        msgContainer.classList.add("hide");
    }
}

const resetGame = () =>{
    turnX = true;
    enableBtn();
}
const newGame = () =>{
    turnX = true;
    enableBtn();
}

const disableBtn = () => {
    for(box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtn();
}
    

const checkWinner = () => {
    for (let pattern of winPatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        //  console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val == pos2Val && pos2Val == pos3Val) {
                console.log("Winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}

resetBtn.addEventListener("click", resetGame);
renewBtn.addEventListener("click", newGame);