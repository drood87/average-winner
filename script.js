const team1scores = Array.from(document.querySelectorAll("#team1score"));
const team2scores = Array.from(document.querySelectorAll("#team2score"));
const team3scores = Array.from(document.querySelectorAll("#team3score"));
const p = document.querySelector("p");
const img = document.querySelector("img");
const button = document.querySelector("button");

function calculateWinner() {
    const average1 = team1calc();
    const average2 = team2calc();
    const average3 = team3calc();

    if (average1 > (average2 && average3)) {
        const points = average1;
        const winner = "Team 1";
        animateFadeInOut(points, winner);
    } else if (average2 > (average1 && average3)) {
        const points = average2;
        const winner = "Team 2";
        animateFadeInOut(points, winner);
    } else if (average3 > (average1 && average2)) {
        const points = average3;
        const winner = "Team 3";
        animateFadeInOut(points, winner);
    }
}

function animateFadeInOut(points, winner) {
    img.classList.add("bounceOut");
    img.classList.remove("infinite");
    setTimeout(function() {
        let p = document.createElement("p");
        p.setAttribute("class", "animated rollIn");
        const text = document.createTextNode(
            `And the Winner is: ${winner} with an average ${Math.round(
                points
            )} points in the last 3 games!!`
        );
        p.appendChild(text);
        img.replaceWith(p);
    }, 700);
}

// Calculate average for team1

function team1calc() {
    // checkNotEmpty();
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
    // checkNotEmpty();
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
    // checkNotEmpty();
    const totalScoreTeam3 = team3scores
        .map(values => Number(values.value))
        .reduce((total, scores) => {
            return total + scores;
        }, 0);
    const averageTeam3 = totalScoreTeam3 / 3;
    return averageTeam3;
}

// Check that field is not empty

// function checkNotEmpty() {
//     let empty = false;
//     const scoreValues = getValues();
//     const regEx = /\d/;
//     empty = scoreValues.some(score => regEx.test(score) === true);
//     console.log(empty);
//     if (!empty) {
//         alert(`Type a number`);
//     }
// }

// function getValues() {
//     const team1Values = team1scores.map(scores => scores.value);
//     return team1Values;
// }

button.addEventListener("click", calculateWinner);
// if (regEx.test(items.value)) {
//             empty = true;
//             alert("BOOOP");
//             if (empty) return;
//         } else {
//             console.log("BoopELSE");
//         }
