var highscoresEl=document.querySelector("#highscores");
var scoresEl=document.querySelector("#scores");
var cardcontentsEl=document.querySelector(".card-contents");

highscoresEl.addEventListener("click",function(){
 localStorage.clear();
});

var createResultsEl = function(myResults){
    /*var infoEl = document.createElement("div");
    var listEl = document.createElement("ol");

var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");*/
scoresEl.textContent=myResults;

}

function getResults() {
    var myResults = localStorage.getItem("results");

    if(!myResults){
        return false;
    }
   
    myResults=JSON.parse(myResults);

    for (var i = 0; i < myResults.length; i++) {
        // pass each task object into the `createTaskEl()` function
        console.log(myResults[i]);
      }

};


getResults();
