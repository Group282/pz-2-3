document.getElementById('fourth-task').addEventListener('click', function (){
  switch (this.innerText) {
    case "Update":
      this.innerText = "Delete";
      this.classList.remove("update");
      this.classList.add('delete');
      break;
    case "Delete":
      this.innerText = "Pending";
      this.classList.add('pending');
      this.classList.remove("delete");
      break;
    case "Pending":
      this.innerText = "Update";
      this.classList.add('update');
      this.classList.remove("pending");
      break;
  }
})
