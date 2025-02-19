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
const paragraphs = [`A vacation is when you take a trip to some ${adjSet()} place with your ${adjSet()} family. Usually you go to some place that is near a/an ${nounSet()} or up on a/an ${nounSet()}. A good vacation place is one where you can ride ${nounSet()} or play ${nounSet()} or go hunting for ${nounSet()} . I like to spend my time ${verbSet()} or ${verbSet()}. When parents go on a vacation, they spend their time eating three ${nounSet()} a day, and fathers play golf, and mothers sit around ${verbSet()}. Last summer, my little brother fell in a/an ${nounSet()} and got poison ${nounSet()} all over his ${nounSet()}. My family is going to go to (the) ${nounSet()}, and I will practice ${verbSet()}. Parents need vacations more than kids because parents are always very ${adjSet()} and because they have to work ${adjSet()} hours every day all year making enough ${nounSet()} to pay for the vacation.`,
    `1`,
    `2`
]
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
const output = document.getElementById(`finalText`);


function reset(){
    // wordList = [];
    // adjList =[];
    // advList =[];
    // nounList =[];
    // verbList =[];
    // startButton.addEventListener("click", getWords);
    output.textContent = getPara();
}

function getWords(){
    getAdjective();
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
        return(currentWord);
    }
}

function advSet(){
    while(advCounter < advList.length){
        currentWord = wordList[(adjList.length) + advCounter]; 
        advCounter++;
        console.log(currentWord);
        return(currentWord);
    }
}

function nounSet(){
    while(nounCounter < nounList.length){
        currentWord = wordList[(adjList.length) + (advList.length) + nounCounter]; 
        nounCounter++;
        console.log(currentWord);
        return(currentWord);
    }
}

function verbSet(){
    while(verbCounter < verbList.length){
        currentWord = wordList[(adjList.length) + (advList.length) + (nounList.length) + verbCounter]; 
        verbCounter++;
        console.log(currentWord);
        return(currentWord);
    }
}

function getPara(){
    let currentPara = Math.floor(Math.random() * paragraphs.length)
    console.log(paragraphs[currentPara]);
    return paragraphs[currentPara];
}