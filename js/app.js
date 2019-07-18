/////////////////
//Variables
/////////////////

const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGameButton = document.getElementsByClassName('btn__reset');
const overlay = document.getElementById("overlay");
let matchingLetters = []
let chosenKeys = []
let missed = 0;


//Phrase options for the player to guess
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

/////////////////
//Functions
/////////////////

//chooses item from phrases array and converst to character array
const getRandomPhraseAsArray = (array) => {
    const randomPhraseIndex = Math.floor(Math.random() * (array.length));
    const randomPhrase = array[randomPhraseIndex];
    const phraseCharacterArray = randomPhrase.split("");
    return phraseCharacterArray;
    
}

//displays chosesn character array
const addPhraseToDisplay = (characterArray) => {
    let ul = document.getElementById("phrase").firstElementChild;
    for (i = 0; i < characterArray.length; i++) {
        let li = document.createElement("LI");
        li.innerText = characterArray[i];
        if (li.innerText != 0) {
            li.classList.add('letter')
        } else {
            li.classList.add('space')
        }
        ul.appendChild(li);
    }
}

//checks if button pressed is included in object of elements with class "letter"
const checkLetter = (button) => {
    const buttonText = button.innerText;
    const letters = document.getElementsByClassName("letter");
    for (i = 0; i < letters.length; i++) {
        if (buttonText === letters[i].innerText.toLowerCase()) {
            letters[i].classList.add('show')
            matchingLetters.push(buttonText)
        }
    }
    if (matchingLetters[matchingLetters.length - 1] === buttonText) {
        return buttonText
    } else {
        return null
    }
}

//checks if player has won the game
const checkWin = () => {
    const letters = document.getElementsByClassName("letter");
    const lettersShown = document.getElementsByClassName("show");
    const title = overlay.firstElementChild;
    if (letters.length === lettersShown.length) {
        overlay.classList.remove("start")
        overlay.classList.add("win")
        overlay.style.visibility = "visible";
        title.innerText= "You Win!"
        startGameButton.innerText = "Play Again?"
    } else if (missed >= 5) {
        overlay.classList.remove("start")
        overlay.classList.add("lose")
        overlay.style.visibility = "visible";
        title.innerText = "Sorry, you lost =("
        startGameButton.innerText = "Play Again?"
    }
}

/////////////////
//Events
/////////////////

//removes overlay when start game butten clicked
startGameButton[0].addEventListener("click", function (e) {
    //hides overlay
    e.target.parentNode.style.visibility = "hidden";
    //chooses and displays new phrase
    phraseArray = getRandomPhraseAsArray(phrases)
    addPhraseToDisplay(phraseArray);

    if (startGameButton.innerText === "Play Again?") {
        console.log("if statement running")
        //resets lives
        missed = 0
        const tries = document.getElementsByClassName("tries")
        for (i = 0; i < tries.length; i++)
            if (tries[i].firstElementChild.getAttribute("src") === "images/lostHeart.png") {
                tries[i].firstElementChild.setAttribute("src", "images/liveHeart.png")
            }
        //removes chosen class from keyboard letters
        keys = document.getElementsByTagName("button")
        for (i = 0; i < keys.length; i++) {
            keys[i].classList.remove("chosen")
            keys[i].removeAttribute("disabled")
        }
        //Remove old phrase
        let ul = phrase.firstElementChild
        let child = ul.lastElementChild;
        while (child) {
            ul.removeChild(child);
            child = ul.lastElementChild;
        } 

        //chooses and displays new phrase
        phraseArray = getRandomPhraseAsArray(phrases)
        console.log(phraseArray)
        addPhraseToDisplay(phraseArray);

        //remove los and win class from overlay
        overlay.classList.remove("lose")
        overlay.classList.remove("win")
    }
})

//runs checkLetter function when keyboard button is clicked and adds classes to button
keyboard.addEventListener("click", (e) => {
    if (e.target.tagName === 'BUTTON') {
        const button = e.target;
        button.classList.add("chosen");
        button.setAttribute("disabled", "");

        let letterFound = checkLetter(button)

        //changes Heart picture on next scorebaoard li to lost Heart pic 
        if (letterFound === null) {
            const tries = document.getElementsByClassName("tries")
            for (i = 0; i < tries.length; i++)
                if (tries[i].firstElementChild.getAttribute("src") === "images/liveHeart.png") {
                    tries[i].firstElementChild.setAttribute("src", "images/lostHeart.png")
                    break
                }
            missed = missed + 1
        }
    }
    //checks if player won or lost after letter selection
    checkWin();
})
















