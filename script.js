/* failed code ignore but also reference
1. turn charlist into object array
2. adjust guessSubmit() + write code to store every value to compare against
3. rewrite guessComp()
4. rewrite guessDisplay()

const charlist = [
["Iridia Forrest", "Nonbinary", "Asian", "21 - 30", "Angel", "Government/Law Enforcement"],
["Lilah Haynes", "Female", "White", "50+", "Angel", "Government/Law Enforcement"],
["Neo Forrest", "Male", "Mixed", "11 - 20", "Demon", "Student"],
["Eclipse Valberg", "Male", "Mixed", "21 - 30", "Demon", "Customer Service"],
["Sabine Forrest", "Female", "White", "21 - 30", "Demon", "Government/Law Enforcement"]
];

let guesslist = [];
let guesscount = -1;
let typeGuess;

function guessSubmit() {
// stores submission to a string var
    typeGuess = document.getElementById('tb').value;
    //console.log(typeGuess);
// clears textbox input
    document.getElementById('tb').value = "";
    guesscount ++;
    guessComp(guesscount);
}

function guessComp(x) {
    let templist = [];
// iterating through rows
    for (let f = 0; f < charlist.length; f++) {
        //console.log(charlist[f][0]);

// trying to find the associated array entry
    if (charlist[f][0].includes(typeGuess)) {
// going through columns to add each thing to the new list
        for (let l = 0; l < charlist[0].length; l++) {
            templist.push(charlist[f][l]);
            console.log(l, templist);
        }
    }

    }
    guesslist.push(templist);
    guessDisplay();
    //console.log(x);
    //console.log("New List: ", guesslist);
}

function guessDisplay() {
    const guesses = document.getElementById('content');
    //let column;
    for (let f = 0; f < guesslist.length; f++) {
        //let fakerow = document.createElement('div');
        let row = document.createElement('div');
            row.style.display = 'flex';
            //row.style.border = 'solid';
        //row.innerHTML = guesslist[f];
        //console.log(guesslist[f]);
        for (let l = 0; l < charlist.length + 1; l++) {
            let column = document.createElement('div');
                column.style.border = 'solid';
            if (guesscount > 0) {
                column.innerHTML = '';
            }
            column.innerHTML = guesslist[f][l];
            //console.log(guesslist[f][l]);
            row.appendChild(column);

            
        }
        guesses.appendChild(row);
    }
}
*/
import {GuessWork} from "./guess.js";

let guesser = new GuessWork ("Attempt");
guesser.randomIndex();
guesser.answerPick();

window['onload'] = function() {
    let button = document.getElementById('guessub');
    button['onclick'] = function() { guesser.guessSubmit() };

    let text = document.getElementById('tb');
    text.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
            guesser.guessSubmit();
        }
    });
}