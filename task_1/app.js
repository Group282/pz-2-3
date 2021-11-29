const imgs = document.querySelectorAll('img');
const angle = [0, 90, 180, 270];
let current = 0;

for( const img of imgs) {
  //task 1.1
  img.addEventListener('click', () => {
    alert(img.getAttribute('src'));
  });

  //task 1.2
  img.addEventListener('contextmenu', (e) => {
    e.preventDefault();

    current++;
    if(current == 4) current = 0;
    img.style.transform = 'rotate(' + angle[current] + 'deg)';
    
  });
}

//task 1.3
const links = document.querySelectorAll('a');

for(const link of links) {
  let text = link.textContent;
  link.addEventListener('mouseover', () => {
    link.textContent += ' (' + link.getAttribute('href') + ')';
  });

  link.addEventListener('mouseout', () => {
    link.textContent = text; 
  });
}


//task 1.3
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