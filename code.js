var board = [
-1,-1,-1,
-1,-1,-1,
-1,-1,-1
];

console.log(board);

function drawBoard(list){
  drawnBoard = "";
  for(var i = 0; i < 9; i++){
    drawnBoard += list[i];
    if((i + 1) % 3 == 0){
      drawnBoard += "\n";
    }
  }
  return drawnBoard;
}

var gameOver = false;

function userInput(num){
  if((board[num] != "o") && (board[num] != "x") && (gameOver != true)){
  board[num]="x";
  updateBoard();
  document.getElementById("" + num).innerHTML = "x";
  enemyInput(getEnemyNum());
  }else{
    return;
  }
}

function getEnemyNum(){
  var num = Math.floor(Math.random() * Math.floor(9));

  for(var i = 0; i < 9; i++){
    if((board[num] != "o") && (board[num] != "x")){
      return num;
    }else{
      num = Math.floor(Math.random() * Math.floor(9));
    }
  }
  return num;
}

function enemyInput(num){
  board[num]="o";
  updateBoard();
  document.getElementById("" + num).innerHTML = "o";
}

function userWin(){
  document.getElementById("test").innerHTML = "User Wins!";
}

function enemyWin(){
  document.getElementById("test").innerHTML = "Enemy Wins!";
}

function userWinConditions() {
  //horizontal win conditions
  if((board[0] == "x") && (board[1] == "x") && (board[2] == "x")){
    console.log("user wins");
    userWin()
    gameOver = true;
  }else if((board[3] == "x") && (board[4] == "x") && (board[5] == "x")){
    console.log("user wins");
    userWin()
    gameOver = true;
  }else if((board[6] == "x") && (board[7] == "x") && (board[8] == "x")){
    console.log("user wins");
    userWin()
    gameOver = true;
  }else if((board[0] == "x") && (board[3] == "x") && (board[6] == "x")){
    //vertical win conditions
    console.log("user wins");
    userWin()
    gameOver = true;
  }else if((board[1] == "x") && (board[4] == "x") && (board[7] == "x")){
    console.log("user wins");
    userWin()
    gameOver = true;
  }else if((board[2] == "x") && (board[5] == "x") && (board[8] == "x")){
    console.log("user wins");
    userWin()
    gameOver = true;
  }else if((board[0] == "x") && (board[4] == "x") && (board[8] == "x")){
    //diagonal win conditions
    console.log("user wins");
    userWin()
    gameOver = true;
  }else if((board[2] == "x") && (board[4] == "x") && (board[6] == "x")){
    console.log("user wins");
    userWin()
    gameOver = true;
  }
}

function enemyWinConditions() {
  //horizontal win conditions
  if((board[0] == "o") && (board[1] == "o") && (board[2] == "o")){
    console.log("enemy wins");
    enemyWin()
    gameOver = true;
  }else if((board[3] == "o") && (board[4] == "o") && (board[5] == "o")){
    console.log("enemy wins");
    enemyWin()
    gameOver = true;
  }else if((board[6] == "o") && (board[7] == "o") && (board[8] == "o")){
    console.log("enemy wins");
    enemyWin()
    gameOver = true;
  }else if((board[0] == "o") && (board[3] == "o") && (board[6] == "o")){
      //vertical win conditions
    console.log("enemy wins");
    enemyWin()
    gameOver = true;
  }else if((board[1] == "o") && (board[4] == "o") && (board[7] == "o")){
    console.log("enemy wins");
    enemyWin()
    gameOver = true;
  }else if((board[2] == "o") && (board[5] == "o") && (board[8] == "o")){
    console.log("enemy wins");
    enemyWin()
    gameOver = true;
  }else if((board[0] == "o") && (board[4] == "o") && (board[8] == "o")){
    console.log("enemy wins");
    enemyWin()
    gameOver = true;
  }else if((board[2] == "o") && (board[4] == "o") && (board[6] == "o")){
    console.log("enemy wins");
    enemyWin()
    gameOver = true;
  }
}
function updateBoard(){
  userWinConditions();
  enemyWinConditions();
}

// userInput(0);
// userInput(1);
// userInput(8);

// enemyInput(2);
// enemyInput(4);
// enemyInput(6);
// enemyInput(4);
// console.log(drawBoard(board));

// var input;
// var i = 0;
// while(i < 9){
//   input = prompt();
//   userInput(input);
//   console.log(drawBoard(board));
//   i++;
// }

// document.getElementById("0").innerHTML = "asdfasdf";



