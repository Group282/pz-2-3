function generate() {
  let abcArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  let doskaEl = document.getElementById('doshka')
  let finalContent = '';
  let start = 1, indexMax = abcArr.length;
  let arrRev = abcArr.slice()

  finalContent = genABC(finalContent, arrRev.reverse())

  for (let item2 = 0, len = abcArr.length; item2 < len; item2++) {
    let itemContent = '<div class="row">'
    itemContent += `<div class="col d-flex"><p class="h1 font-weight-bold my-auto mx-auto text-center">${indexMax--}</p></div>`
    for (let i = 0, len = abcArr.length; i < len; i++) {
      if (start % 2 === 0) {
        if (i % 2 === 0) {
          itemContent += '<div class="col white"></div>'
        } else {
          itemContent += '<div class="col black"></div>'
        }
      } else {
        if (i % 2 === 0) {
          itemContent += '<div class="col black"></div>'
        } else {
          itemContent += '<div class="col white"></div>'
        }
      }
    }
    start++;
    itemContent += `<div class="col d-flex"><p class="h1 font-weight-bold my-auto mx-auto text-center">${item2 + 1}</p></div>`
    itemContent += '<div class="w-100"></div>'
    itemContent += '</div>'
    finalContent += itemContent
  }

  finalContent = genABC(finalContent, abcArr)

  doskaEl.insertAdjacentHTML('beforeend', finalContent)
}

function genABC(finalContent, abcArr) {
  finalContent += '<div class="row">'
  finalContent += `<div class="col"></div>`
  for (let i = 0, len = abcArr.length; i < len; i++) {
    finalContent += `<div class="col d-flex"><p class="h1 font-weight-bold my-auto mx-auto text-center">${abcArr[i]}</p></div>`
  }
  finalContent += `<div class="col"></div>`
  finalContent += '<div class="w-100"></div>'
  finalContent += '</div>'
  return finalContent
}

generate()
