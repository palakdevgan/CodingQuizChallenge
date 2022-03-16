var highscoresEl=document.querySelector("#highscores");
var scoresEl=document.querySelector("#scores");
var cardcontentsEl=document.querySelector(".card-contents");

highscoresEl.addEventListener("click",function(){
 localStorage.clear();
 window.location.reload();
});


function getResults() {
    var myResults = localStorage.getItem("results");

    if(!myResults){
        return false;
    }
   
    myResults=JSON.parse(myResults);

    for (var i = 0; i < myResults.length; i++) {
        var listItemEl = document.createElement("li");
        var resultInfoEl=document.createElement("div");
        
        resultInfoEl.textContent=(myResults[i].initials+" - " +myResults[i].score);
        scoresEl.appendChild(listItemEl);
        listItemEl.appendChild(resultInfoEl);
        resultInfoEl.setAttribute("style", "text-align: left;font-size: 34px;font-weight: 700;margin: 20px 70px;");
        listItemEl.setAttribute("style", "text-align: left;font-size: 34px;font-weight: 700;margin: 20px 70px;");
      }

};


getResults();
