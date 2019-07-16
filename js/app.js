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
    "Strategic Homeland Intervention Enforcement and Logistics Division"
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

const addPhraseToDisplay = function(characterArray) {
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

/* const test = ["t","h","i","s","","i","s","","a","","c","h","a","r","a","c","t","e","r","","a","r","r","a","y"]; */

addPhraseToDisplay(phraseArray)