let cont = [0, 0, 0];
let imges = document.querySelectorAll('.bdk-img1');
let angle = [0, 90, 180, 270];
let current = 0;


for (let i = 0; i < imges.length; i++) {
  imges[i].addEventListener("contextmenu", function (e) {
    e.preventDefault();
    let elem = e.target;
    if (cont[i] === 8) cont[i] = 0;
    cont[i]++;
    elem.style.transform = `rotate(${cont[i] * 90}deg)`;
  });

}


function task1Click() {
  alert('Task 1')
}




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




const firstName = document.getElementById('name');
const lastName = document.getElementById('last-name');
const age = document.getElementById('age');
const btn = document.querySelector('button');
const demo = document.getElementById('demo');




btn.addEventListener('click', (e) => {
  demo.textContent = '';
  firstName.classList.remove('red-border');
  lastName.classList.remove('red-border');
  age.classList.remove('red-border');


  e.preventDefault();

  if (  !(/^[a-zA-Zа-яА-Я]+$/).test(firstName.value) || !(/^[a-zA-Zа-яА-Я]+$/).test(lastName.value)) {
    firstName.classList.add('red-border');
    lastName.classList.add('red-border');
    alert('only letters!');
    return;
  }

  if (age.value < 0) {
    age.classList.add('red-border');
    return;
  }

  const name = document.createElement('p');
  name.textContent = 'first name: ' + firstName.value;

  const last = document.createElement('p');
  last.textContent = 'last name: ' + lastName.value;

  const ageInput = document.createElement('p');
  ageInput.textContent = 'age: ' + age.value;

  demo.appendChild(name);
  demo.appendChild(last);
  demo.appendChild(ageInput);
});
