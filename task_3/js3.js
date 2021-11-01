var rook = [0,7,56,63];
var knight = [1,6,57,62];
var bishop = [2,5,58,61];
var king = [3,59];
var queen = [4,60]
var pawn = [8,9,10,11,12,13,14,15,48,49,50,51,52,53,54,55];

for (let i=0; i< 64; i++){
  var div = document.createElement("div");
  document.getElementById("ChessBoard").
  appendChild(div).
    style.backgroundColor = parseInt((i / 8) + i) % 2 == 0 ? 'green' : 'lightblue';
  if(rook.indexOf(i) !== -1){
    div.innerHTML = '&#9814;';
    //div.innerHTML += '<img src="'+'img/1.png'+'" />';
  }
  if(knight.indexOf(i) !== -1){
    div.innerHTML = '&#9816;';
  }
  if(bishop.indexOf(i) !== -1){
    div.innerHTML = '&#9815;';
  }
  if(king.indexOf(i) !== -1){
    div.innerHTML = '&#9812;';
  }
  if(queen.indexOf(i) !== -1){
    div.innerHTML = '&#9813;';
  }
  if(pawn.indexOf(i) !== -1){
    div.innerHTML = '&#9817;';
  }
  if(i < 32){
    div.className += 'white';
  }
}
