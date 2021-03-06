let button = document.getElementById('button');
let text = document.getElementById('text');
let nameElement = document.getElementById('name');
let url = 'https://christmas-gifts-94eb6.firebaseio.com/People/-MMtcVDICAgsALXFOzwd.json';
let message = document.getElementById('message');
let label = document.getElementById('label');
let snow = document.getElementById('snow');

//Set the button
button.addEventListener('click', function () {
    let currentName = nameElement.value;

    if (currentName) {
        isNameAvaliable(currentName);
    } else {
        alert('You must type name');
    }
});

//Get random person from Firebase
async function giveRandomPerson() {
    return result = await fetch(url)
        .then(res => res.json())
        .then(names => {
            let keys = Object.keys(names);

            let keyNumber = getRandomInt(keys.length);
            let name = keys[keyNumber];
            let taken = names[name];

            return (`${name} ${taken}`);
        })
}

//Check if the person is avaliable
async function isNameAvaliable(currentName) {
    giveRandomPerson()
        .then(result => {
            let [name, taken] = result.split(' ');
            console.log(name);
            console.log(taken);

            if (taken == 'false' && currentName != name) {
                loadName(name);
                setAsTaken(name);
            } else {
                console.log(1);
                isNameAvaliable(currentName);
            }

            return;
        })
        .catch(err => alert(err));
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//Show the drawed name on the screen
function loadName(name) {
    nameElement.style.display = 'none';
    button.style.display = 'none';
    text.innerHTML = `You are buying a present for ${name}`;
    text.style.display = 'block';
    message.style.display = 'block';
    label.style.display = 'none'
}

//Set the person as taken in Firebase
function settAsTaken(name) {
    console.log(name);

    fetch('https://christmas-gifts-94eb6.firebaseio.com/People/-MMtcVDICAgsALXFOzwd/.json', {
        method: 'PATCH',
        body: JSON.stringify({
            [name]: true
        })
    })
        .catch(() => alert('Pishi na Deyan, ima greshka'));
}
