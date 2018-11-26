const team1scores = Array.from(document.querySelectorAll("#team1score"));
const team2scores = Array.from(document.querySelectorAll("#team2score"));
const team3scores = Array.from(document.querySelectorAll("#team3score"));

const button = document.querySelector("button");

function calculateWinner() {
    const average1 = team1calc();
    const average2 = team2calc();
    const average3 = team3calc();

    console.log(`T1 ${average1}, T2 ${average2}, T3 ${average3}`);
}

function team1calc() {
    const totalScoreTeam1 = team1scores
        .map(values => Number(values.value))
        .reduce((total, scores) => {
            return total + scores;
        }, 0);
    const averageTeam1 = totalScoreTeam1 / 3;
    return averageTeam1;
}

function team2calc() {
    const totalScoreTeam2 = team2scores
        .map(values => Number(values.value))
        .reduce((total, scores) => {
            return total + scores;
        }, 0);
    const averageTeam2 = totalScoreTeam2 / 3;
    return averageTeam2;
}

function team3calc() {
    const totalScoreTeam3 = team3scores
        .map(values => Number(values.value))
        .reduce((total, scores) => {
            return total + scores;
        }, 0);
    const averageTeam3 = totalScoreTeam3 / 3;
    return averageTeam3;
}

button.addEventListener("click", calculateWinner);
