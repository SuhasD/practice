process.stdin.resume();
process.stdin.setEncoding('utf-8');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function(data) {
    __input_stdin += data;
});

/*
 * Complete the function below.
 */
function differentTeams(skills) {
    // edge case for empty input
    if (skills.length < 1) return 0;

    let teams = Infinity;
    // Prepopulate array with 0 teammembers for 5 different subjects
    let individualSkills = [0, 0, 0, 0, 0];
    for (let i = 0; i < skills.length; i++) {
        // Just in case if input course is not a 'String', convert to string
        const course = skills[i].toString();
        // Increment counter of individual skills
        if (course == 'p') individualSkills[0]++;
        else if (course == 'c') individualSkills[1]++;
        else if (course == 'm') individualSkills[2]++;
        else if (course == 'b') individualSkills[3]++;
        else if (course == 'z') individualSkills[4]++;
        // If input not in 'pcmbz', break
        else break;
    }

    // Iterate and find number of teams
    for (let i = 0; i < 5; i++) {
        if (individualSkills[i] < teams) {
            teams = individualSkills[i];
        }
    }
    return teams;


    // Approach 2 (Using hash map: assign individual skill to map and increment counter)

    // let freq = {};
    // let minTeams = Infinity;
    // let courses = ['p', 'c', 'm', 'b', 'z'];

    // // Construct frequency table
    // for (let val of skills) {
    //     if (!courses.includes(val)) break; // Check for bad inputs (outside of pcmbz)
    //     else if (freq[val]) freq[val]++;
    //     else freq[val] = 1;
    // }
    // // Loop over freq table and return team number
    // for (let key in freq){
    //     if (freq[key] < minTeams) {
    //         minTeams = freq[key];
    //     }
    // }
    // return minTeams;
}
var fs = require('fs');