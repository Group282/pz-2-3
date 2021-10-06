function task1Click() {
  alert('Task 1')
}


let angle = [0, 90, 180, 270];
let current = 0;

function task2Click(id, event) {
  current++;
  if (current === 4)
    current = 0;
  $('#' + id).css('transform', 'rotate(' + angle[current] + 'deg)');
}

function task3_1Click(id) {
  let href = $('#' + id).attr('href')
  let text = $('#' + id).text()
  $('#' + id).text(text + ' (' + href + ')')
}

function task3_2Click(id) {
  let text = $('#' + id).text().split(' ')
  $('#' + id).text(text[0])
}

function task4Click() {
  $('#demo').text('')
  let firstName = $('#last').val()
  let last = $('#last').val()
  let age = Number.parseInt($('#age').val())

  if (isValid(firstName) && firstName.length <= 50
    && isValid(last) && last.length <= 50
    && Number.isInteger(age) && age > 0) {
    $('#demo').text(`first name: ${firstName} \n
          last: ${last}\n
        age: ${age}`);
  }
}

function isValid(str) {
  return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
}
