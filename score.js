var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (119 + 94+ 123) / 3;
var scoreMary = (134 + 97 + 105) / 3;
console.log(scoreJohn, scoreMike,scoreMary);

if (scoreMary > (scoreJohn && scoreMike)){
  winner="Mary";
}

else if (scoreJohn > (scoreMary && scoreMike)){
  winner ="John";
}

else if (scoreJohn == scoreMary || scoreJohn == scoreMike || scoreMary == scoreMike) {
  winner = "undeclared - a tie";
}

else  {
  winner = "Mike";
}

switch (winner) {
  case "John":
      score = scoreJohn;
    break;
  case "Mike":
      score = scoreMike;
    break;

  case "Mary":
      score = scoreMary;
    break;

  case "undeclared - a tie":
      score = "the same number of";

}
console.log(winner);

console.log('The winner is ' + winner +' with an average score of ' + score +' points');
