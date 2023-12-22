let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#rst-btn");
let newgamebtn=document.querySelector("#new-game");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turn0=true;
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetbtn=()=>{
    turn0=true;
    enabledbtn();
    msgcontainer.classList.add("hide");

};
const enabledbtn=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    };
}
const disabledbtn=()=>{
    for(box of boxes){
        box.disabled=true;
    };
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="O";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        cheakwinner();
    });
});
const showwinner=(winner)=>{
    msg.innerText=`congratullations, winner is ${winner}  `;
    msgcontainer.classList.remove("hide");
    disabledbtn();

}
let cheakwinner=()=>{
    for(pattern of winPattern){
        let position1=boxes[pattern[0]].innerText;
        let position2=boxes[pattern[1]].innerText;
        let position3=boxes[pattern[2]].innerText;
        if(position1 !="" && position2 !="" &&position3 !="" ){
            if(position1===position2&&position2===position3){
                console.log("winner",position1)
                showwinner(position1);
            }
        }
        

    }

}
reset.addEventListener("click",resetbtn);
newgamebtn.addEventListener("click",resetbtn);