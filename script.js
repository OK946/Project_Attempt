let wordList = [];
let adjInputs = ``;
let adjIDs = 0; 
let advInputs = ``;
let advIDs = 0; 
let nounInputs = ``;
let nounIDs = 0; 
let verbInputs = ``;
let verbIDs = 0; 
let adjCounter = 0;
let advCounter = 0;
let nounCounter = 0;
let verbCounter = 0;
let currentWord = "";
let adj = adjSet();
let adv = advSet();
let noun = nounSet();
let verb = verbSet();
    // Paragraph Objects Below this Line
const a = {
    paragraphText: `A vacation is when you take a trip to some ${adjSet()} place with your ${adjSet()} family. Usually you go to some place that is near a/an ${nounSet()} or up on a/an ${nounSet()}. A good vacation place is one where you can ride ${nounSet()} or play ${nounSet()} or go hunting for ${nounSet()} . I like to spend my time ${verbSet()} or ${verbSet()}. When parents go on a vacation, they spend their time eating three ${nounSet()} a day, and fathers play golf, and mothers sit around ${verbSet()}. Last summer, my little brother fell in a/an ${nounSet()} and got poison ${nounSet()} all over his ${nounSet()}. My family is going to go to (the) ${nounSet()}, and I will practice ${verbSet()}. Parents need vacations more than kids because parents are always very ${adjSet()} and because they have to work ${adjSet()} hours every day all year making enough ${nounSet()} to pay for the vacation.`,
    order: 0,
    adjNumber: 4,
    advNumber: 0,
    nounNumber: 11,
    verbNumber: 4,
};
const b = {
    paragraphText: `PlaceHolder1`,
    order: 1,
};
const c = {
    paragraphText: `PlaceHolder2`,
    order: 2,
};
    
// Paragraph Objects Above this Line
let currentPara = {};
// Update when adding new paragraphs!
const paragraphs = [a];
let currentParaNumber = Math.floor(Math.random() * paragraphs.length);
for (let i = 0; i < paragraphs.length; i++ ){
    if(currentParaNumber === paragraphs[i].order){
        currentPara = paragraphs[i];
        
    }
}    

const startButton = document.getElementById("startButton");
startButton.addEventListener("click", run);
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


function run(){
    output.textContent = getPara();
}

function getWords1(adjectiveAmount,adverbAmount,nounAmount,verbAmount){
    adjIDs = 0
    for (let i = 0; i < adjectiveAmount; i++){
        getAdjective();
    }
    for (let i = 0; i < adverbAmount; i++){
        getAdverb();
    }
    for (let i = 0; i < nounAmount; i++){
        getNoun();
    }
    for (let i = 0; i < verbAmount; i++){
        getVerb();
    }
}
function getWords2(){
    let adjListTemp = []
    for(let i = 0; i <= adjIDs; i++){
        adjListTemp.push(document.getElementById(`adjID${i}`));
    }
    let advListTemp = [];
    for(let i = 0; i <= adjIDs; i++){
        advListTemp.push(document.getElementById(`advID${i}`));
    }
    let nounListTemp = [];
    for(let i = 0; i <= adjIDs; i++){
        nounListTemp.push(document.getElementById(`nounID${i}`));
    }
    let verbListTemp = [];
    for(let i = 0; i <= verbIDs; i++){
        verbListTemp.push(document.getElementById(`verbID${i}`));
    }
    for(let index = 0; index < adjListTemp.length; index++){
        wordList.push(adjListTemp[index]);
    };
    for(let index = 0; index < advListTemp.length; index++){
        wordList.push(advListTemp[index]);
    };
    for(let index = 0; index < nounListTemp.length; index++){
        wordList.push(nounListTemp[index]);[]
    };
    for(let index = 0; index < verbListTemp.length; index++){
        wordList.push(verbListTemp[index]);
    };
    console.log(wordList);
}

function getAdjective(){
    adjInputs += `<input id="adjID${adjIDs}" class="wordinput adjInput" placeholder="Write an Adjective">`;
    adjIDs += 1;
}

function getAdverb(){
    advInputs += `<input id="adjID${advIDs}" class="wordinput adjInput" placeholder="Write an Adjective">`;
    advIDs += 1;
}

function getNoun(){
    nounInputs += `<input id="adjID${nounIDs}" class="wordinput adjInput" placeholder="Write an Adjective">`;
    nounIDs += 1;
}

function getVerb(){
    verbInputs += `<input id="adjID${verbIDs}" class="wordinput adjInput" placeholder="Write an Adjective">`;
    verbIDs += 1;
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
    getWords1(currentPara.adjNumber, currentPara.advNumber, currentPara.nounNumber, currentPara.verbNumber)
    // Paragraph Objects Below this Line
    const acopy = {
        paragraphText: `A vacation is when you take a trip to some ${adjSet()} place with your ${adjSet()} family. Usually you go to some place that is near a/an ${nounSet()} or up on a/an ${nounSet()}. A good vacation place is one where you can ride ${nounSet()} or play ${nounSet()} or go hunting for ${nounSet()} . I like to spend my time ${verbSet()} or ${verbSet()}. When parents go on a vacation, they spend their time eating three ${nounSet()} a day, and fathers play golf, and mothers sit around ${verbSet()}. Last summer, my little brother fell in a/an ${nounSet()} and got poison ${nounSet()} all over his ${nounSet()}. My family is going to go to (the) ${nounSet()}, and I will practice ${verbSet()}. Parents need vacations more than kids because parents are always very ${adjSet()} and because they have to work ${adjSet()} hours every day all year making enough ${nounSet()} to pay for the vacation.`,
        order: 0,
        adjNumber: 4,
        advNumber: 0,
        nounNumber: 11,
        verbNumber: 4,
    };
    const bcopy = {
        paragraphText: `PlaceHolder1`,
        order: 1,
    };
    const ccopy = {
        paragraphText: `PlaceHolder2`,
        order: 2,
    };
    
    // Paragraph Objects Above this Line
    let copyParas = [acopy,bcopy,ccopy];

    return copyParas[currentParaNumber].paragraphText;
}