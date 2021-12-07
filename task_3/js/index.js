function start() {
  let div_main = document.querySelector('#chessboard');
  let class_list = ['white', 'black', 'text', 'text-rotate'];
  let ABC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 10; j++) {
      let div = document.createElement('div');

      if (j === 0) div.className = class_list[2];
      else if (j === 9) div.className = class_list[3];
      else {
        if ((i + j) % 2 === 0) div.className = class_list[0];
        else div.className = class_list[1];
      }

      if (i === 0) {
        let imag = new Image(100, 100);
        if (j === 1 || j === 8) imag.src = 'img/black/rook.gif';
        else if (j === 2 || j === 7) imag.src = 'img/black/horse.gif';
        else if (j === 3 || j === 6) imag.src = 'img/black/elephant.gif';
        else if (j === 4) imag.src = 'img/black/korol.gif';
        else if (j === 5) imag.src = 'img/black/koroleva.gif';

        div.append(imag);
      } else if (i === 1 && j !== 0 && j !== 9) {
        let imag = new Image(100, 100);
        imag.src = 'img/black/pawn.gif';

        div.append(imag);
      } else if (i === 7) {
        let imag = new Image(100, 100);
        if (j === 1 || j === 8) imag.src = 'img/white/rook.gif';
        else if (j === 2 || j === 7) imag.src = 'img/white/horse.gif';
        else if (j === 3 || j === 6) imag.src = 'img/white/elephant.gif';
        else if (j === 4) imag.src = 'img/white/korol.gif';
        else if (j === 5) imag.src = 'img/white/koroleva.gif';

        div.append(imag);
      } else if (i === 6 && j !== 0 && j !== 9) {
        let imag = new Image(100, 100);
        imag.src = 'img/white/pawn.gif';

        div.append(imag);
      }

      if(j === 0 || j === 9){
        div.textContent = (8 - i).toString();
      }

      div_main.append(div);
    }
  }

  for (let i = 0; i < 10; i++) {
    let div = document.createElement('div');

    div.className = class_list[2];
    if (i !== 0 && i !== 9) div.textContent = ABC[i - 1];
    div_main.append(div);

    div = document.createElement('div');

    div.className = class_list[3];
    if (i !== 0 && i !== 9) div.textContent = ABC[ABC.length - i];
    div_main.prepend(div);
  }
}

start();
