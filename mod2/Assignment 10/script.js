let votes = [];
let caname = "";
let candidate = {};
const numberca = +prompt("Number of candidates ");
for (let i = 0; i < numberca; i++) {
    caname = prompt(`Give candidate's ${i+1}. name`);
    candidate = {name: caname, votes: 0};
    votes.push(candidate);
}
let voname = "";
const numbervo = +prompt("Number of voters");
for (let i = 0; i < numbervo; i++) {
    voname = prompt("Give name of the candidate");
    for (let votesName of votes) {
        if (votesName.name == voname) {votesName.votes += 1;}
    }
}

function sortVotes(a, b) {
    return b.votes - a.votes;
}
votes.sort(sortVotes)
const str = `The winner is ${votes[0].name} with ${votes[0].votes} votes.\nresulst:`;

console.log(str);
for (let candidate of votes) {
    console.log(`${candidate.name}: ${candidate.votes} votes`);
}
