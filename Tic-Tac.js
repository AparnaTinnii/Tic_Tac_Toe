let box = document.querySelectorAll(".btn");
let resetbtn = document.querySelector(".reset");
let newbtn = document.querySelector(".new-btn");
let winPopup = document.querySelector(".msg-popup");
let msg= document.querySelector("#msg");




let turnO = true; //player X, playerO




const winlines=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

box.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO){//player O
            box.innerText="O";
            turnO = false;
        }else{// player X
            box.innerText="X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disabledboxes =() =>{
     for(let b of box){
        b.disabled=true;
     }
};
const enabledboxes =() =>{
    for(let b of box){
       b.disabled=false;
       b.innerText="";
    }
};


const showWinner = (winner) =>{
    msg.innerText =`Congratulation, winner is ${winner}`;
    winPopup.classList.remove("hide")
};


const checkWinner= ()=> {
    for (lines of winlines) {
        let pos1val =box[lines[0]].innerText;
        let pos2val =box[lines[1]].innerText;
        let pos3val =box[lines[2]].innerText;
       

        if(pos1val != "" && pos2val!= "" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner",pos1val);
                disabledboxes();
                showWinner(pos1val);
            }
            }
    }
}


const resetGame = () =>{
    turnO = true;
    enabledboxes();
    winPopup.classList.add("hide");
    
};





newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click", resetGame);