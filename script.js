const startButton = document.getElementById("startButton");
startButton.addEventListener("click", getWords);
const testButton = document.getElementById("testButton");
testButton.addEventListener("click", reset);
const adjButton = document.getElementById("adjButton");
adjButton.addEventListener("click", adjSet);
const advButton = document.getElementById("advButton");
advButton.addEventListener("click", advSet);
const nounButton = document.getElementById("nounButton");
nounButton.addEventListener("click", nounSet);
const verbButton = document.getElementById("verbButton");
verbButton.addEventListener("click", verbSet);
let wordList = [];
let adjList =[];
let advList =[];
let nounList =[];
let verbList =[];
let adjCounter = 0;
let advCounter = 0;
let nounCounter = 0;
let verbCounter = 0;
let currentWord = "";

function reset(){
    wordList = [];
    adjList =[];
    advList =[];
    nounList =[];
    verbList =[];
    startButton.addEventListener("click", getWords);
}

function getWords(){
    getVerb();
    getAdjective();
    getNoun();
    getAdjective();
    getAdjective();
    getAdverb();
    getNoun();
    getAdverb();
    getVerb();
    let adjListTemp = [].concat(adjList);
    let advListTemp = [].concat(advList);
    let nounListTemp = [].concat(nounList);
    let verbListTemp = [].concat(verbList);
    for(let index = 0; index < adjList.length; index++){
        wordList.push(adjListTemp[index]);
    };
    for(let index = 0; index < advList.length; index++){
        wordList.push(advListTemp[index]);
    };
    for(let index = 0; index < nounList.length; index++){
        wordList.push(nounListTemp[index]);
    };
    for(let index = 0; index < verbList.length; index++){
        wordList.push(verbListTemp[index]);
    };
    console.log(wordList);
    startButton.removeEventListener("click",getWords);
}

function getAdjective(){
    let adj = prompt("Write an Adjective");
    if((adj == null) || (adj == false)){
        getAdjective();
    } else {
        adjList.push(adj);
    }
    console.log(adjList);
}

function getAdverb(){
    let adv = prompt("Write an Adverb");
    if((adv == null) || (adv == false)){
        getAdverb();
    } else {
        advList.push(adv);
    }
    console.log(advList);
}

function getNoun(){
    let noun = prompt("Write a Noun");
    if((noun == null) || (noun == false)){
        getNoun();
    } else {
        nounList.push(noun);
    }
    console.log(nounList);
}

function getVerb(){
    let verb = prompt("Write a Verb");
    if((verb == null) || (verb == false)){
        getVerb();
    } else {
        verbList.push(verb);
    }
    console.log(verbList);
}

function adjSet(){
    while(adjCounter < adjList.length){
        currentWord = wordList[0 + adjCounter]; 
        adjCounter++;
        console.log(currentWord);
        break;
    }
}

function advSet(){
    while(advCounter < advList.length){
        currentWord = wordList[(adjList.length) + advCounter]; 
        advCounter++;
        console.log(currentWord);
        break;
    }
}

function nounSet(){
    while(nounCounter < nounList.length){
        currentWord = wordList[(adjList.length) + (advList.length) + nounCounter]; 
        nounCounter++;
        console.log(currentWord);
        break;
    }
}

function verbSet(){
    while(verbCounter < verbList.length){
        currentWord = wordList[(adjList.length) + (advList.length) + (nounList.length) + verbCounter]; 
        verbCounter++;
        console.log(currentWord);
        break;
    }
}