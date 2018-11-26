const team1scores = Array.from(document.querySelectorAll("#team1score"));
const team2scores = document.querySelectorAll("#team2scores");
const team3scores = document.querySelectorAll("#team3scores");

const button = document.querySelector("button");

function calculateWinner() {
  const totalScoreTeam1 = team1scores
    .map(values => values.value)
    .reduce((total, scores) => {
      return total + scores;
    }, 0);
  console.log(totalScoreTeam1);
}

button.addEventListener("click", calculateWinner);
