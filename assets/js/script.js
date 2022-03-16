var timer=75;
var count=0;
var pageContentEl = document.querySelector("#page-content");
var timerEl= document.querySelector("#timer");
var cardcontentsEl=document.querySelector(".card-contents");
var questionEl=document.querySelector("#question");
var option1El=document.querySelector("#option1");
var option2El=document.querySelector("#option2");
var option3El=document.querySelector("#option3");
var option4El=document.querySelector("#option4");
var h1El=document.querySelector("#result");
var h3El = document.createElement("h3");
var divEl = document.createElement("div");
var div1El = document.createElement("div");
var labelEl = document.createElement("LABEL");
var inputEl = document.createElement("INPUT");
var buttonEl = document.createElement("INPUT");
var resultEl = document.createElement("h1");

var timeInterval = window.setInterval(function(){ 
    if (timer > 0){
        timer--; 
        setTimerText();
    }
    else if (timer === 0){
    questionEl.textContent="GAME OVER!";
    option1El.setAttribute("style","display:none");
    option2El.setAttribute("style","display:none");
    option3El.setAttribute("style","display:none");
    option4El.setAttribute("style","display:none");
    resultEl.setAttribute("style","display:none");
    h1El.setAttribute("style","display:none");
    }
}, 1000);

function setTimerText() {
    timerEl.textContent = timer;
  }

  var buttonHandler = function(event){
    var targetEl = event.target;
    var optionSelected = targetEl.textContent;
    
    if(targetEl.matches(".options") && count === 0){
    questionEl.textContent="String values must be enclosed within _____ when being assigned to variables.";
    option1El.textContent="1. commas";
    option2El.textContent="2. curly brackets";
    option3El.textContent="3. quotes";
    option4El.textContent="4. parenthesis";
    if(optionSelected === "3. alerts"){h1El.textContent="Correct!";}
    else if(optionSelected != "3. alerts"){h1El.textContent="Wrong!"; timer -= 10;};
    count++;
    }
   
    else if(targetEl.matches(".options") && count === 1){
    questionEl.textContent="The condition in an if/else statement is enclosed with _____.";
    option1El.textContent="1. quotes";
    option2El.textContent="2. curly brackets";
    option3El.textContent="3. parenthesis";
    option4El.textContent="4. square brackets";
    if(optionSelected === "3. quotes"){h1El.textContent="Correct!";}
    else if(optionSelected != "3. quotes"){h1El.textContent="Wrong!"; timer -= 10;};
    count++;
   }

   else if(targetEl.matches(".options") && count === 2){
    questionEl.textContent="Arrays in JavaScript can be used to store _____.";
    option1El.textContent="1. numbers and strings";
    option2El.textContent="2. other arrays";
    option3El.textContent="3. booleans";
    option4El.textContent="4. all of the above";
    if(optionSelected === "3. parenthesis"){h1El.textContent="Correct!";}
    else if(optionSelected != "3. parenthesis"){h1El.textContent="Wrong!"; timer -= 10;};
    count++;
    answer="4. all of the above";
   }

   else if(targetEl.matches(".options") && count === 3){
    h1El.textContent ="";
    questionEl.textContent="A very useful tool used during development and debugging for printing content to the debugger is:";
    option1El.textContent="1. JavaScript";
    option2El.textContent="2. terminal/bash";
    option3El.textContent="3. for loops";
    option4El.textContent="4. console.log";
    if(optionSelected === "4. all of the above"){h1El.textContent="Correct!";}
    else if(optionSelected != "4. all of the above"){h1El.textContent="Wrong!"; timer -= 10;};
    count++;
    answer="4. console.log";
   }
   else if(targetEl.matches(".options") && count === 4){
    h1El.textContent="";
    if(optionSelected === "4. console.log"){resultEl.textContent="Correct!";}
    else if(optionSelected != "4. console.log"){resultEl.textContent="Wrong!"; timer -= 10;};
    setTimerText();
    clearInterval(timeInterval);
    questionEl.textContent="All done!"; 
    h3El.textContent = "Your final score is "+timer;
    cardcontentsEl.appendChild(h3El);
    labelEl.textContent="Enter Initials:";
    cardcontentsEl.appendChild(divEl);
    cardcontentsEl.appendChild(div1El);
    divEl.appendChild(labelEl);
    divEl.appendChild(inputEl);
    divEl.appendChild(buttonEl);
    div1El.appendChild(resultEl);
    option1El.setAttribute("style","display:none");
    option2El.setAttribute("style","display:none");
    option3El.setAttribute("style","display:none");
    option4El.setAttribute("style","display:none");
    h3El.setAttribute("style", "text-align: left;font-size: 25px;margin: 20px 70px;");
    divEl.setAttribute("style", "text-align: left;font-size: 25px;margin: 20px 70px;");
    inputEl.setAttribute("style", "margin-left:10px;text-align: left;padding: 12px 20px;border: 1px solid #ccc;border-radius: 4px;box-sizing: border-box;");
    buttonEl.setAttribute("type", "submit");
    buttonEl.setAttribute("style","margin-left:10px;padding:5px;cursor: pointer;font-size: 24px;background-color: #a02462;color: white;border-radius: 12px;");
    resultEl.setAttribute("style", "text-align: left;font-size: 25px;margin: 20px 70px;");
   }
  
  };

  

function setResults(array){
    var getResults= JSON.parse(localStorage.getItem("results"));
    if(getResults === null) getResults = [];
    var allResults = getResults.concat(array);
     localStorage.setItem("results",JSON.stringify(allResults));
    
    
};




buttonEl.addEventListener("click", function () {

    var inputName=inputEl.value;

    if (inputName === "" || inputName === null) {
        alert("Invalid Input!");
      }
    else{
        var score =
        {
            initials: inputName,
            score: timer
        }
        setResults(score);
        inputEl.value="";
    }
    
});

 
  pageContentEl.addEventListener("click", buttonHandler);
  
