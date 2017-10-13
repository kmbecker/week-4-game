// Create a function that contains the entirety of the game

$( document ).ready(function(){ 

  // Setup game variables to manipulate later
  var totalPoints= 0; 
  var wins= 0;
  var losses = 0; 

  // Randomly generate a number between 19 and 120

  var Random=Math.floor(Math.random()*101+19) 

  // Attach the random number to the div in the HTML

  $("#randomNumber").text(Random);  

  // Assign a random number to each gem
  
  var redNumber = Math.floor(Math.random()*11+1) 
  var blueNumber = Math.floor(Math.random()*11+1)
  var yellowNumber = Math.floor(Math.random()*11+1)
  var greenNumber = Math.floor(Math.random()*11+1)
  
  $("#numberWins").text("Wins: " + wins); 
  $("#numberLosses").text("Losses: " + losses); 
  $("#runningTotal").text(totalPoints); 

// Reset the game without refreshing 

function reset(){
      Random=Math.floor(Math.random()*101+19); 
      $("#randomNumber").text(Random); 
      redNumber = Math.floor(Math.random()*11+1);
      blueNumber = Math.floor(Math.random()*11+1);
      yellowNumber = Math.floor(Math.random()*11+1);
      greenNumber = Math.floor(Math.random()*11+1);
      totalPoints = 0;
      $("#runningTotal").text(totalPoints); 
    };

  // Win Paramaters

  function winner(){ 
      wins++; 
      $("#outcome").text("You win!"); 
      $("#numberWins").text("Wins: " + wins);
      reset();
    }; 

  // Loss Parameters

  function loser(){ 
      losses++; 
      $("#outcome").text("You lost!");
      $("#numberLosses").text("Losses: " + losses); 
      reset();
  }; 

//Add on click events for the gems

  // Red Gem
  
  $("#red").on("click", function(){ 
    totalPoints = totalPoints + redNumber; 
    $("#runningTotal").text(totalPoints); 

        if (totalPoints == Random){ 
          winner();
        }
        else if ( totalPoints > Random){ 
          loser();
        }   
  }); 

  // Blue Gem

  $("#blue").on("click", function(){
    totalPoints = totalPoints + blueNumber;
    $("#runningTotal").text(totalPoints); 

        if (totalPoints == Random){
          winner();
        }
        else if ( totalPoints > Random){
          loser();
        } 
  });

  // Yellow Gem

  $("#yellow").on ("click", function(){
    totalPoints = totalPoints + yellowNumber;
    $("#runningTotal").text(totalPoints);

          if (totalPoints == Random){
          winner();
        }
        else if ( totalPoints > Random){
          loser();
        } 
  });

  // Green Gem

  $("#green").on ("click", function(){
    totalPoints = totalPoints + greenNumber;
    $("#runningTotal").text(totalPoints); 
      
          if (totalPoints == Random){
          winner();
        }
        else if ( totalPoints > Random){
          loser();
        }
  }); 

}); 

// Finito!