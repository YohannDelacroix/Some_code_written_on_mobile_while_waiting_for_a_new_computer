let feedbackMsg = document.createElement('p');
feedbackMsg.classList.add("result");
let txt = document.createTextNode("Results will be here on next time") ;
feedbackMsg.appendChild(txt);

let feedbackNode = document.getElementById("feedbackMsg");
feedbackNode.appendChild(feedbackMsg);




