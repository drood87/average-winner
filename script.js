const team1scores = Array.from(document.querySelectorAll("#team1score"));
const team2scores = Array.from(document.querySelectorAll("#team2score"));
const team3scores = Array.from(document.querySelectorAll("#team3score"));

const button = document.querySelector("button");

function calculateWinner() {
    const totalScoreTeam1 = team1scores
        .map(values => Number(values.value))
        .reduce((total, scores) => {
            return total + scores;
        }, 0);

    const totalScoreTeam2 = team2scores
        .map(values => Number(values.value))
        .reduce((total, scores) => {
            return total + scores;
        }, 0);

    const totalScoreTeam3 = team3scores
        .map(values => Number(values.value))
        .reduce((total, scores) => {
            return total + scores;
        }, 0);

    const averageTeam1 = totalScoreTeam1 / 3;
    const averageTeam2 = totalScoreTeam2 / 3;
    const averageTeam3 = totalScoreTeam3 / 3;
}

button.addEventListener("click", calculateWinner);
