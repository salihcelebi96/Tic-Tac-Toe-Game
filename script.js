let blocks = document.querySelectorAll(".block");
let playerText = document.querySelector("#player");
let error = document.getElementById("error");
let player="X";
let gameOver=false;
let winner;
let teamX = document.querySelector(".TeamxScore");
let teamO = document.querySelector(".TeamOScore");
let again= document.querySelector("#again");
let options;
let sıfırla = document.getElementById("sıfırla");


startgame();
function startgame(){
    blocks.forEach(block =>block.addEventListener("click",() => chooseArea(block)))
}        
     function chooseArea(block){
         if(block.textContent==""){ 
             block.textContent=player;
            block.style.fontSize="4rem";
            block.style.paddingLeft="17px";
            if(block.textContent=="O"){
                block.style.color="red";
            }else{
                block.style.color="white";
            }
            turnplay();
            checkWin();
            
        }else{
            error.textContent="Dolu Kutu";
            block.style.border="2px solid red";
            setTimeout(dolu,2000);
            function dolu(){
                error.textContent="Error 1 ";
                block.style.border="2px solid rgb(63, 63, 63)";
            }
           
            


        }  
        checkWin();
        
        
        if(gameOver){
            playerText.textContent=`Game over,${winner} Won`;
            if(winner=="X"){
                teamX.textContent ++;
                
            }else if(winner=="O"){
                teamO.textContent ++;
                
            }

            blocks.forEach(block => block.style.pointerEvents ="none");
            
        }
          
            
    }    

     function checkWin(){
        checkRow();
        checkColumn();
        diagonals();

}


function turnplay(){
    if(player=="X"){
        player="O";
        playerText.textContent=` ${player}'s Turn`;
        
    }else if(player=="O"){
        player="X";
        playerText.textContent=` ${player}'s Turn`;
    }
}

function checkRow(){
    let row1 = blocks[0].textContent == blocks[1].textContent && blocks[0].textContent == blocks[2].textContent && blocks[0].textContent !=="";
    let row2 = blocks[3].textContent == blocks[4].textContent && blocks[3].textContent == blocks[5].textContent && blocks[3].textContent !=="";
    let row3 = blocks[6].textContent == blocks[7].textContent && blocks[6].textContent == blocks[8].textContent && blocks[6].textContent !=="";
    if(row1 || row2 || row3){
        gameOver=true;
        
    }
    if(row1) return winner=blocks[0].textContent;
    if(row2) return winner=blocks[3].textContent;
    if(row3) return winner=blocks[6].textContent;

}

function checkColumn(){
    let col1 = blocks[0].textContent == blocks[3].textContent && blocks[0].textContent == blocks[6].textContent && blocks[0].textContent !=="";
    let col2 = blocks[1].textContent == blocks[4].textContent && blocks[1].textContent == blocks[7].textContent && blocks[1].textContent !=="";
    let col3 = blocks[2].textContent == blocks[5].textContent && blocks[2].textContent == blocks[8].textContent && blocks[2].textContent !=="";
    if(col1 || col2 || col3){
        gameOver=true;
}
if(col1) return winner=blocks[0].textContent;
if(col2) return winner=blocks[1].textContent;
if(col3) return winner=blocks[2].textContent;
}

function diagonals(){
    let dia1 = blocks[0].textContent == blocks[4].textContent && blocks[0].textContent == blocks[8].textContent && blocks[0].textContent !=="";
    let dia2 = blocks[2].textContent == blocks[4].textContent && blocks[2].textContent == blocks[6].textContent && blocks[2].textContent !=="";
    if(dia1 || dia2){
        gameOver=true;
    }
    if(dia1) return winner=blocks[0].textContent;
    if(dia2) return winner=blocks[2].textContent;
    
}



again.addEventListener("click",restartgame);

function restartgame(){
  blocks.forEach(block => block.textContent="");
  gameOver=false;
  blocks.forEach(block => block.style.pointerEvents ="auto");
  
  

}

sıfırla.addEventListener("click",()=>{
  blocks.forEach(block => block.textContent="");
  gameOver=false;
  blocks.forEach(block => block.style.pointerEvents ="auto");
  teamX.textContent=0;
  teamO.textContent=0;
})











    




