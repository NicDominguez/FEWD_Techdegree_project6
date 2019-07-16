const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
    if (missed === 5)  {console.log('You Lose!');}
const startGameButton = document.getElementsByClassName('btn__reset');

startGameButton[0].addEventListener("click", function(e) {
    e.target.parentNode.remove();
});

const phrases = [
    "Avengers Assemble",
    "Even Dead I am the Hero",
    "I am Iron Man",
    "I can do this all day",
    "We have a Hulk",
    "On your left",
    "I am Groot",
    "That is Americas Ass",
    "Whatever it takes",
    "Why is Gamora"
];

const getRandomPhraseAsArray = (array) => {
    const randomPhraseIndex = Math.floor(Math.random() * (array.length));
    const randomPhrase = array[randomPhraseIndex];
    const phraseCharacterArray = randomPhrase.split("");
    console.log(randomPhraseIndex);
    console.log(phraseCharacterArray);
    return phraseCharacterArray;
}

const phraseArray = getRandomPhraseAsArray(phrases);

const addPhraseToDisplay = (characterArray) => {
    let ul = document.getElementById("phrase").firstElementChild;
    for (i = 0; i < characterArray.length; i++) {
        let li = document.createElement("LI");
        li.innerText = (characterArray[i]);
        console.log(li.innerText);
        if (li.innerText != 0) {
            li.classList.add('letter')
        }
        ul.appendChild(li);
    }
    
}

addPhraseToDisplay(phraseArray)


const checkLetter =  (button) => {
    const letters = document.getElementsByClassName("letter");
    const buttonText = button.innnerText;
    for (i= 0; i < letters.length; i++) {
        if (buttonText === letters[i]) {
            let matchingLetters = []
            console.log("match");
            letters[i].classList.add('show')
            matchingLetters.push(buttonText)
            return buttonText
        } else {
            return null
        }
    }
}