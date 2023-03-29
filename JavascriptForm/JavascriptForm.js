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
