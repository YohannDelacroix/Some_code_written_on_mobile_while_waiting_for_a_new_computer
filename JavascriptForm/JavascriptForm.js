      
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
