function task1Click() {
  alert('Task 1')
}


let angle = [0, 90, 180, 270];
let current = 0;

function task2Click(id, event) {
  event.preventDefault();
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

// function task4Click() {
//   $('#demo').text('')
//   let firstName = $('#last').val()
//   let last = $('#last').val()
//   let age = Number.parseInt($('#age').val())
//
//   if (isValid(firstName) && firstName.length <= 50
//     && isValid(last) && last.length <= 50
//     && Number.isInteger(age) && age > 0) {
//     $('#demo').text(`first name: ${firstName} \n
//           last: ${last}\n
//         age: ${age}`);
//   }
// }


function onSubmit() {

  let demo = document.getElementById('demo');
  demo.innerHTML = getValidationMessage();

}

function getValidationMessage() {
  let name = document.getElementById('name').value;
  let lastName = document.getElementById('lastName').value;
  let age = document.getElementById('age').value;
  let text;

  if (name === '' || lastName === '' || age === '') {
    text = 'all fields must be filled';
    demo.style.color = 'red';
  }

  if (age < 0 || typeof age !== 'number') {
    text += '<br>age must be > 0';
  }

  if (name.length > 50 || lastName > 50) {
    text += '<br>name and surname must not be more than 50';
  }

  if (name !== '' && lastName !== '' && age !== '' && age > 0 && name.length < 50 && lastName.length < 50) {
    demo.style.color = 'black';
    text = 'validate';
  }

  return text;
}

function isValid(str) {
  return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
}
