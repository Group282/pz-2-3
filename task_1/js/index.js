let cont = [0, 0, 0];
let imges = document.querySelectorAll('.virsta-img');
let links1 = document.querySelectorAll('.virsta-link');
let labels = document.querySelectorAll('.virsta-label');
const firstName = document.getElementById('name');
const lastName = document.getElementById('last-name');
const age = document.getElementById('age');
const btn = document.querySelector('button');
const demo = document.getElementById('demo');
const links = document.querySelectorAll('a');
let regNum = /^\d+$/;
let regStr = /^[A-Za-z]+$/;
let list_flag = [false, false, false];

for (let i = 0; i < imges.length; i++) {
  imges[i].addEventListener("contextmenu", function (e) {
    e.preventDefault();
    let elem = e.target;
    if (cont[i] === 8) cont[i] = 0;
    cont[i]++;
    // elem.classList.toggle("rotated");
    elem.style.transform = `rotate(${cont[i] * 45}deg)`;
  });
  imges[i].addEventListener("click", function (e) {
    alert(links[i].href);
  })
}

for (let i = 0; i < links1.length; i++) {
  links1[i].addEventListener("mouseover", function (e) {
    labels[i].textContent = ` (${links[i].href})`;
  });
  links1[i].addEventListener('mouseout', function (e) {
    labels[i].textContent = "";
  });
}

for(const link of links) {
  let text = link.textContent;
  link.addEventListener('mouseover', () => {
    link.textContent += ' (' + link.getAttribute('href') + ')';
  });

  link.addEventListener('mouseout', () => {
    link.textContent = text;
  });
}

firstName.addEventListener('keyup', (event) => {
  isOnly(event, firstName, regStr, 0);
});

lastName.addEventListener('keyup', (event) => {
  isOnly(event, lastName, regStr, 1);
});

age.addEventListener('keyup', (event) => {
  isOnly(event, age, regNum, 2);
});

function isOnly(event, element, reg, count) {
  if (reg.test(event.target.value)) {
    element.classList.remove("virsta-invalid");
    element.classList.add("virsta-valid");
    list_flag[count] = true;
  } else {
    element.classList.remove("virsta-valid");
    element.classList.add("virsta-invalid");
    list_flag[count] = false;
  }
}

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
