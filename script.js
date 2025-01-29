const startButton = document.getElementById("startButton");
startButton.addEventListener("click", getWords);
const testButton = document.getElementById("testButton");
testButton.addEventListener("click", reset);
let wordList = [];
let adjList =[];
let advList =[];
let nounList =[];
let verbList =[];


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
    getAdjective();
    for(let index = 0; index < adjList.length; index++){
        wordList.push(adjList[index]);


    };
    for(let index = 0; index < advList.length; index++){
        wordList.push(advList[index]);
    };
    for(let index = 0; index < nounList.length; index++){
        wordList.push(nounList[index]);
    };
    for(let index = 0; index < verbList.length; index++){
        wordList.push(verbList[index]);
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