let elmes = document.querySelectorAll('.image');
elmes.forEach((el)=>{{
  el.onclick = function (){
    alert ('Чудово!')
  };
  el.getAttribute('data-rotate')
  let rotate = 90
  el.addEventListener('contextmenu', event => {
    event.preventDefault()
    el.style.transform += 'rotate('+ rotate + 'deg)';
  });
}})
let submit = document.getElementById('submit');
let demo = document.getElementById('demo');

submit.addEventListener('click', testForm)

function add_img() {
  var img = document.createElement('img');
  img.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png';
  document.getElementById('body').appendChild(img);
}
function testForm(){
  let name = document.getElementById('inputName').value
  let surname = document.getElementById('inputLastName').value
  let age = document.getElementById('inputAge').value
  if(
    !name.match(/^([a-zA-Z]){1,50}$/) &&
    !surname.match(/^([a-zA-Z]){1,50}$/) &&
    !age.match(/^([0-9])+/)
  ){
    console.log('error')
    demo.style.display = 'none';
    document.querySelectorAll('.input').forEach((input)=>{
      input.style.border = 'solid 2px red'
    })
  }
  else if(
    name.match(/^([a-zA-Z]){1,50}$/) &&
    surname.match(/^([a-zA-Z]){1,50}$/) &&
    age.match(/^([0-9])+/)
  ){
    demo.style.display = 'block';
    document.getElementById('name').innerHTML = name;
    document.getElementById('surname').innerHTML = surname;
    document.getElementById('age').innerHTML = age;
    document.querySelectorAll('.input').forEach((input)=>{
      input.style.border = 'solid 2px grey'
    })
  }
}
