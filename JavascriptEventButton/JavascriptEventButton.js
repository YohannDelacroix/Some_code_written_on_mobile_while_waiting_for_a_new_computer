let button = document.getElementById("btn");
let display = false;

button.addEventListener("click", () => {
  let imhere = document.getElementById("imhere");
  if(display) {
    imhere.style.display = "none";
    display = false;
  }
  else{
    imhere.style.display = "block";
    display = true;
  }
  
});
