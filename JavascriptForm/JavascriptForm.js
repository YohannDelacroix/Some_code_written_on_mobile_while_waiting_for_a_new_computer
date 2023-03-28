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
  
  document.getElementById("feedbackMsg").replaceChildren();
  
  const data = new FormData(e.target);
 
  addLineToResult("Name", data.get("name"));
  addLineToResult("First name", data.get("firstname"));
  addLineToResult("Birth date", data.get("date"));
} 
