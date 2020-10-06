console.log('Here are all the available people:', people);

// ## Display Profile Pictures
// On document load, append divs for each person in the `data.js` file to the DOM 
// with jQuery (not hardcoded), each containing an image from each GitHub profile 
// (see the provided data.js file). As an example, the below HTML 
// would produce Chris's GitHub profile picture where `christopher-black` is Chris's 
// GitHub username and `250` is the size of the picture requested.

// ```HTML
// <img src="https://github.com/christopher-black.png?size=250" alt="Profile image of Chris">
// ```

$(document).ready(onReady);

function onReady(){
    console.log('hello from jquery!');
    //append divs for all in people
    appendPeople();
    pickRandomPerson();
}


function appendPeople(){
    for ( let i = 0; i< people.length; i++){
        $('#githubPeople').append(`
            <li>
                <img src="https://github.com/${people[i].githubUsername}.png?size=250" alt="Profile image of ${people[i].name}">
            </li>
        `);
    }
}

function pickRandomPerson(){
    let randomNum = randomNumber(0, people.length - 1);
    console.log('random number', randomNum);

    $('#person').append(people[randomNum].name);
}


function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}