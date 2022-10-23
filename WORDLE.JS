
var height = 5 ; //number of guesses

var width = 5;  // length of the word 


var row = 0; // attpet number

var col = 0; // for that attmpet


var gameOver =false;

var Word= "SQUID";

window.onload = function(){

    intialize();
}

function intialize() {

//create the bored
 for (let r = 0; r < height; r++) {
     for (let c = 0; c < width; c++) {
         let tile = document.createElement("span");
         tile.id = r.toString() + "-"+ c.toString();
         tile.classList.add("tile");
         tile.innerText = "";
         document.getElementById("board").appendChild(tile);
     
     }  
    
 }
      //KEY PRESS
      document.addEventListener("keyup" , (e) => {
    if (gameOver) return;
   
      // alert(e.code);
       if("KeyA" <= e.code && e.code <= "KeyZ"){
           if(col< width){
               let currTile = document.getElementById(row.toString() + '-' + col.toString());
               if(currTile.innerText == ""){
                    currTile.innerText = e.code[3];
                    col += 1;
   
               }
           }
   
   
       }
       else if (e.code == "Backspace"){

        if(0 < col && col <= width) {

            col -=1;

        }
        let currTile = document.getElementById(row.toString() + '-' + col.toString());
        currTile.innerText= "";

       }
       else if (e.code == "Enter") {
        update();
        row += 1; //start
        col = 0;
       }

       if(!gameOver && row == height) {
        gameOver = true;
        document.getElementById("answer").innerText = Word;
       }
   })
   

}

function update() {
     let correct = 0;
     for(let c = 0; c < width ; c++){
        let currTile = document.getElementById(row.toString() + '-' + c.toString());

        let letter = currTile.innerText;


        if (Word[c] ==letter){
          currTile.classList.add("correct");
        correct=+ 1;
        }
        else if(Word.includes(letter)){

            currTile.classList.add("present");

        }
        else{

            currTile.classList.add("absent");
        }

        if(correct == width){

            gameOver = true;
        }





     }

}