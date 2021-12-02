const btn = document.querySelector('button');

const params = [
  {
    color: '#18D158',
    text: 'Update',
  },
  {
    color: '#CD1D1D',
    text: 'Delete'
  },
  {
    color: '#E18523',
    text: 'Pending',
  }
];

let current = 0;
change();
function change(){
  btn.textContent = params[current].text;
  btn.style.background = params[current].color;
}

btn.addEventListener('click', () =>{
  if(current==3) current = 0;
  change();
  current++;
});
