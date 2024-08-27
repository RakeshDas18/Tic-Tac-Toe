let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".resetBtn");
let msg=document.querySelector(".msg");
let msgContainer=document.querySelector(".msgContainer");
let newGame=document.querySelector(".newGame")

let turnX = true;
let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = () => {
    turnX = true
    enableBoxes();
    msgContainer.classList.add("hide");
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText = "";
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnX){
            box.innerText="X";
            turnX=false;
        } else {
            box.innerText="O";
            turnX=true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const showWinner = (winner) =>{
    msg.innerText=`Congrats. The winner is ${winner}`
    msgContainer.classList.remove("hide");
    boxes.disabled = true;

}

const checkWinner= ()=>{
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                showWinner(pos1Val);
            }
        }
    }
}

newGame.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame)
