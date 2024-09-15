const wordList = [
    { word: "search", hint: "The act of finding something" },
    { word: "jpeg", hint: "a small format of an image" },
    { word: "svg", hint: "a vector image format" },
    { word: "server", hint: "related to computer or system" },
    { word: "idea", hint: "a thought or suggestion" },
    { word: "air", hint: "the invisible gaseous formation" },
    { word: "tesla", hint: "unit of magnetic flux intensity" },
    { word: "rocket", hint: "a space vehicle" },
    { word: "mars", hint: "the second smallest planet" },
    { word: "apple", hint: "mobile manufacture brand" },
    { word: "proxy", hint: "related to server application" },
    { word: "email", hint: "related to sending message" },
    { word: "html", hint: "markup language for web development" },
    { word: "brake", hint: "the act of stopping a moving vehicle" },
    { word: "cloud", hint: "condensed water vapour" },
    { word: "crypto", hint: "related to cryptocurrency" },
    { word: "flute", hint: "a musical instrument" },
    { word: "kenya", hint: "a developing country" },
    { word: "mysql", hint: "a relational database system" },
    { word: "venice", hint: "a famous city of waters" },
    { word: "act", hint: "the doing of a thing" },
    { word: "github", hint: "code hosting platform" },
    { word: "png", hint: "raster type image file" },
    { word: "silver", hint: "a precious greyish-white metal" },
    { word: "java", hint: "programming language" },
    { word: "google", hint: "famous search engine" },
    { word: "banana", hint: "a yellow curved fruit" },
    { word: "python", hint: "programming language" },
    { word: "guitar", hint: "a musical instrument" },
    { word: "aim", hint: "a purpose or intention" },
    { word: "venus", hint: "a planet of our solar system" },
    { word: "gold", hint: "a yellowish precious metal" },
    { word: "golang", hint: "a programming language" },
    { word: "chess", hint: "a game played by two players" },
    { word: "hockey", hint: "a famous outdoor game" },
    { word: "island", hint: "land surrounded by water" },
    { word: "map", hint: "a diagrammatic representation of an area" },
    { word: "tiktok", hint: "a social media platform" },
    { word: "gif", hint: "a file format of an image" },
    { word: "avatar", hint: "epic science fiction film" },
    { word: "matrix", hint: "related to mathematics" },
    { word: "bugs", hint: "related to programming" }
];

const inputs = document.querySelector(".inputs"),
    resetBtn = document.querySelector(".reset-btn"),
    wrongLetter = document.querySelector(".wrong-letters"),
    hint = document.querySelector(".hint span"),
    guessLeft = document.querySelector(".guess-left span"),
    typingInput = document.querySelector(".typing-input");

let word, maxGuesses, corrects = [], incorrects = [], currentIndex = 0;

function randomWord() {
    
    if (currentIndex >= wordList.length) {
        alert("Congratulations! You've completed all the words.");
        currentIndex = 0; 
        return;
    }

    let randomObj = wordList[currentIndex]; 
    word = randomObj.word;
    maxGuesses = 8;
    corrects = [];
    incorrects = [];

    hint.innerText = randomObj.hint;
    guessLeft.innerText = maxGuesses;
    wrongLetter.innerText = incorrects.join(", ");

    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`;
    }
    inputs.innerHTML = html;
}

function initGame(e) {
    let key = e.target.value;

    if (key.match(/^[A-Za-z]+$/) && !incorrects.includes(` ${key}`) && !corrects.includes(key)) {
        if (word.includes(key)) {
            for (let i = 0; i < word.length; i++) {
                if (word[i] === key) {
                    corrects.push(key);
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }
        } else {
            maxGuesses--;
            incorrects.push(` ${key}`);
        }

        guessLeft.innerText = maxGuesses;
        wrongLetter.innerText = incorrects.join(", ");
    }

    typingInput.value = "";

    setTimeout(() => {
        if (corrects.length === word.length) {
            alert(`Congrats! You found the word: ${word.toUpperCase()}`);
            currentIndex++;
            randomWord(); 
        } else if (maxGuesses < 1) {
            alert("Game over! You don't have remaining guesses.");
            for (let i = 0; i < word.length; i++) {
                inputs.querySelectorAll("input")[i].value = word[i];
            }
        }
    });
}

resetBtn.addEventListener("click", () => {
    currentIndex = 0; 
    randomWord();
});

typingInput.addEventListener("input", initGame);
inputs.addEventListener("click", () => typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());

randomWord(); 
