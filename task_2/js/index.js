let button = document.querySelector('#virsta-button');
let div = document.querySelector('#virsta-div');
let classes = ["virsta-button-update", "virsta-button-delete", "virsta-button-pending"];
let values = ["Update", "Delete", "Pending"];
let classes1 = ["virsta-div-update", "virsta-div-delete", "virsta-div-pending"];
let count = classes.length - 1;

button.addEventListener("click", (even) => {
  button.classList.remove(classes[count]);
  div.classList.remove(classes1[count]);
  if(count === classes.length - 1) count = 0;
  else count++;
  button.classList.add(classes[count]);
  div.classList.add(classes1[count]);
  button.value = values[count];
});
