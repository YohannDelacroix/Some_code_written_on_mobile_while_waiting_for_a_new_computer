//Add a new custom line to the result section
const addLineToResult = (name, content) => {
   let feedbackNode =     document.getElementById("feedbackMsg");
  
   //Create the new block with datas
   let feedbackBlock = document.createElement('div');
  
  
   //Create the description block left
   let feedbackDesc = document.createElement('h5');
   let newDesc = document.createTextNode(`${name}`);
   feedbackDesc.appendChild(newDesc);
   
   feedbackNode.appendChild(feedbackDesc);
  
  
   //Create the content block right
   let feedbackMsg = document.createElement('p');
   feedbackMsg.classList.add("result");
   let newElem = document.createTextNode(`${content}`) 
   feedbackMsg.appendChild(newElem);
   feedbackNode.appendChild(feedbackMsg);
}

//Validate the form if all the fields are completed
const validationControl = (formData) => {
  let validation = true;
  
  for( [key, value] of formData) {
    console.log("key", key) 
    console.log("val", value) 
    
    let inputNode = document.getElementById(`${key}`);
    
    //delete the existing error message if exists
    let errorMsgNode = document.getElementById("errorMsg"+key);
    if(errorMsgNode) {
        errorMsgNode.remove();
    } 
      
    //when a param is missing
    if(!formData.get(key))
    {
       console.log("Parameter missing :", key);
       
       if(!inputNode) {
         console.log("input node null") 
         return;
       } 
      
       //Add error class
       inputNode.classList.add("errorInput");
      
       //Display an error message onto screen
       let errorMsg = document.createElement("p");
       errorMsg.setAttribute("id", "errorMsg"+key);
       let errorTxt = document.createTextNode(`You must fill this field`);
       errorMsg.classList.add("errorMsg");
       errorMsg.appendChild(errorTxt);
       inputNode.after(errorMsg);
      
       validation = false;
    } 
    else {
      inputNode.classList.remove("errorInput");
    } 
   } 
  
   return validation;
}

//When submit button is pressed
const handleSubmit = (e) => {
  e.preventDefault();
  
  document.getElementById("feedbackMsg").replaceChildren();
  
  const data = new FormData(e.target);
  
  if(validationControl(data)){
 
 	addLineToResult("Name", data.get("name"));
  addLineToResult("First name", data.get("firstname"));
  addLineToResult("Birth date", data.get("date"));
  } 
} 


let form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);



