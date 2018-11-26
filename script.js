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

// Calculate average for team1

function team1calc() {
    checkNotEmpty();
    const totalScoreTeam1 = team1scores
        .map(values => Number(values.value))
        .reduce((total, scores) => {
            return total + scores;
        }, 0);
    const averageTeam1 = totalScoreTeam1 / 3;
    return averageTeam1;
}

// Calculate average for team2

function team2calc() {
    checkNotEmpty();
    const totalScoreTeam2 = team2scores
        .map(values => Number(values.value))
        .reduce((total, scores) => {
            return total + scores;
        }, 0);
    const averageTeam2 = totalScoreTeam2 / 3;
    return averageTeam2;
}

// Calculate average for team3

function team3calc() {
    checkNotEmpty();
    const totalScoreTeam3 = team3scores
        .map(values => Number(values.value))
        .reduce((total, scores) => {
            return total + scores;
        }, 0);
    const averageTeam3 = totalScoreTeam3 / 3;
    return averageTeam3;
}

// Check that field is not empty

function checkNotEmpty() {
    let empty = false;
    const regEx = /[^0-9]/;
    const validation = team1scores.map(items => {
        if (regEx.test(items.value)) {
            empty = true;
            alert(`Enter a number`);
            return;
        } else {
            console.log(`My items else ${items.value}, ${empty}`);
        }
    });
    if (empty) {
    }
}

button.addEventListener("click", calculateWinner);
