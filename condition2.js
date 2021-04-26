let team12_name = document.querySelector("#team12_name");
let team12_score = document.querySelector("#team12_score");
let team22_name = document.querySelector("#team22_name");
let team22_score = document.querySelector("#team22_score");
let errormsg1 = document.getElementById("errormsg1");
let resultBtn1 = document.querySelector("#result2");


//to caculate the  result
function calculateResult2(){
    
    const team1NameValue = team12_name.value;
    const team1ScoreValue = team12_score.value;
    const team2NameValue = team22_name.value;
    const team2ScoreValue = team22_score.value;

    
    //var checkNumbers = /[0-9]/g;
    var checkNumbers = /\d/g;
    var checkStrings = /\w/g;
    var scorepattern = /^[0-9 ]{1,3}[\/][0-9]{1,2}$/g;

    var scores = /[0-9]{1,3}/g;
    
    var score1match = team1ScoreValue.match(scorepattern);
   var score2match = team2ScoreValue.match(scorepattern);
    //To check all mandatory fields
    if(team1NameValue.length == 0 || team1ScoreValue.length == 0 || team2NameValue.length == 0 || team2ScoreValue.length == 0){
        
        errormsg1.innerHTML="*All fields mandtory";
        errormsg1.className = "error";
        return false;
    }

    //To check team names are same
    if(team1NameValue === team2NameValue){
      
        errormsg1.innerHTML= "Invalid input! Please enter differnt team names";
        errormsg1.className = "error";
        return false;
    }

    //To check  numbers present in team name
   if(team1NameValue.match(checkNumbers) || team2NameValue.match(checkNumbers)){

        errormsg1.innerHTML= "Do not enter numbers for team names!! Invalid input";
        errormsg1.className = "error";
        return false;
    }
   
    //To check team score pattern
    if(score1match == null || score2match == null){
        
        errormsg1.innerHTML= "please enter score format (runs/wickets) eg: 150/3";
        errormsg1.className = "error";
        return false;
    }

    errormsg1.innerHTML = "";
    errormsg1.className="errorMsg"
    //calculate winner
    var team1score;
    var team1wickets;
    var team2score;
    var team2wickets;

   var score1 = team1ScoreValue.match(scores);
      score1.forEach( (score,index,scores) => {
          team1score = scores[0];
          team1wickets = scores[1];
          
                    });

    var score2 = team2ScoreValue.match(scores);
      score2.forEach( (score,index,scores) => {
          team2score = scores[0];
          team2wickets = scores[1];
          
                    });

                    if(  team1score > team2score){
                        errormsg1.className="errorMsg"
                    errormsg1.innerHTML = team1NameValue + ' won by ' + (11-team1wickets)+ ' wickets';
                    }
                    else if(team2score > team1score){
                      
                        errormsg1.innerHTML = team2NameValue + ' won by ' + (11-team2wickets)+ ' wickets';
                        errormsg1.className="errorMsg"
                    }
                    else{
                        errormsg1.className="errorMsg"
                        errormsg1.innerHTML = 'Match is drawn';
                    }
        
      
    
}
    

resultBtn1.addEventListener('click', calculateResult2);