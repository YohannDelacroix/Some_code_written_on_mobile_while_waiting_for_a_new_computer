const addLineToResult = (name, content) => {

   let feedbackMsg = document.createElement('p');
   feedbackMsg.classList.add("result");
   let newElem = document.createTextNode(`${name} : ${content}`) 
   feedbackMsg.appendChild(newElem);
  
  let feedbackNode =     document.getElementById("feedbackMsg");
  feedbackNode.appendChild(feedbackMsg);
} 

const handleSubmit = (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  alert("okc");
  
  for( [key, value] of data) {
    console.log(key, ",", value) ;
  } 
  
  addLineToResult("Name", e.target.name.value);
  addLineToResult("First name", e.target.firstname.value);
  addLineToResult("Birth date", e.target.date.value);
