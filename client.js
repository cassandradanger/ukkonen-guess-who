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

let randomPerson = '';

$(document).ready(onReady);

function onReady(){
    console.log('hello from jquery!');
    //append divs for all in people
    appendPeople();
    pickRandomPerson();
    $('#githubPeople').on('click', '.clickPic', clickedPerson)
}

function clickedPerson(){
    let clickedPerson = $(this).data('name');
    console.log('clicked person and random', clickedPerson, randomPerson);

    // compare the two names
    // compare clickedPerson to the randomPerson

    if( clickedPerson == randomPerson){
        alert (`yes!! this is ${randomPerson}`);
        pickRandomPerson();
    } else {
        alert('nope, try again');
    }

}


function appendPeople(){
    for ( let i = 0; i< people.length; i++){
        $('#githubPeople').append(`
            <li data-name=${people[i].name} class="clickPic">
                <img src="https://github.com/${people[i].githubUsername}.png?size=250" 
                alt="Profile image of ${people[i].name}" 
                />
            </li>
        `);
    }
}

function pickRandomPerson(){
    let randomNum = randomNumber(0, people.length - 1);
    console.log('random number', randomNum);

    randomPerson = people[randomNum].name;
    // $('#person').empty();
    $('#person').text(randomPerson);
}


function randomNumber(min, max){
   console.log( (1 + max - min) + min);
    return Math.floor(Math.random() * (1 + max - min) + min);
}