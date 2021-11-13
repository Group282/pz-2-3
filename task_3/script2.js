function generate() {
  let rows = document.getElementsByClassName('row');


  let colBlack = rows[1].getElementsByClassName('col black');
  let colWhite = rows[1].getElementsByClassName('col white');

  let colWhite2 = rows[2].getElementsByClassName('col white');
  let colBlack2 = rows[2].getElementsByClassName('col black');

  let colWhite7 = rows[7].getElementsByClassName('col white');
  let colBlack7 = rows[7].getElementsByClassName('col black');

  let colWhite8 = rows[8].getElementsByClassName('col white');
  let colBlack8 = rows[8].getElementsByClassName('col black');

  let rook = new Image(100, 100);
  rook.src = './img/black/rook.gif';
  colBlack[0].style.textAlign = 'center';
  colBlack[0].append(rook);

  let elephant = new Image(100, 100);
  elephant.src = './img/black/elephant.gif';
  colBlack[1].style.textAlign = 'center';
  colBlack[1].append(elephant)

  let queen = new Image(100, 100);
  queen.src = './img/black/koroleva.gif';
  colBlack[2].style.textAlign = 'center';
  colBlack[2].append(queen);

  let horse = new Image(100, 100);
  horse.src = './img/black/horse.gif';
  colBlack[3].style.textAlign = 'center';
  colBlack[3].append(horse);

  let horse2 = new Image(100, 100);
  horse2.src = './img/black/horse.gif';
  colWhite[0].style.textAlign = 'center';
  colWhite[0].append(horse2);

  let king = new Image(100, 100);
  king.src = './img/black/korol.gif';
  colWhite[1].style.textAlign = 'center';
  colWhite[1].append(king);

  let elephant2 = new Image(100, 100);
  elephant2.src = './img/black/elephant.gif';
  colWhite[2].style.textAlign = 'center';
  colWhite[2].append(elephant2);

  let rook2 = new Image(100, 100);
  rook2.src = './img/black/rook.gif';
  colWhite[3].style.textAlign = 'center';
  colWhite[3].append(rook2);

  for (let i = 0; i < colWhite2.length && i < colBlack2.length; i++) {
    let pawn = new Image(100, 100);
    pawn.src = './img/black/pawn.gif';
    colWhite2[i].style.textAlign = 'center';
    colWhite2[i].append(pawn);

    let pawn2 = new Image(100, 100);
    pawn2.src = './img/black/pawn.gif';
    colBlack2[i].style.textAlign = 'center';
    colBlack2[i].append(pawn2);
  }


  for (let i = 0; i < colWhite7.length && i < colBlack7.length; i++) {
    let pawn = new Image(100, 100);
    pawn.src = 'img/white/pawn.gif';
    colWhite7[i].style.textAlign = 'center';
    colWhite7[i].append(pawn);

    let pawn2 = new Image(100, 100);
    pawn2.src = 'img/white/pawn.gif';
    colBlack7[i].style.textAlign = 'center';
    colBlack7[i].append(pawn2);
  }

  let rookWhite = new Image(100, 100);
  rookWhite.src = 'img/white/rook.gif';
  colWhite8[0].style.textAlign = 'center';
  colWhite8[0].append(rookWhite);

  let elephantWhite = new Image(100, 100);
  elephantWhite.src = 'img/white/elephant.gif';
  colWhite8[1].style.textAlign = 'center';
  colWhite8[1].append(elephantWhite)

  let queenWhite = new Image(100, 100);
  queenWhite.src = 'img/white/koroleva.gif';
  colWhite8[2].style.textAlign = 'center';
  colWhite8[2].append(queenWhite);

  let horseWhite = new Image(100, 100);
  horseWhite.src = 'img/white/horse.gif';
  colWhite8[3].style.textAlign = 'center';
  colWhite8[3].append(horseWhite);

  let horse2White = new Image(100, 100);
  horse2White.src = 'img/white/horse.gif';
  colBlack8[0].style.textAlign = 'center';
  colBlack8[0].append(horse2White);

  let kingWhite = new Image(100, 100);
  kingWhite.src = 'img/white/korol.gif';
  colBlack8[1].style.textAlign = 'center';
  colBlack8[1].append(kingWhite);

  addFigureToChessBoard(colBlack8[2], './img/white/elephant.gif')
  addFigureToChessBoard(colBlack8[3], './img/white/rook.gif')

}

function addFigureToChessBoard(element, src){
  let figure = new Image(100, 100);
  figure.src = src;
  element.style.textAlign = 'center';
  element.append(figure);
}

generate()
