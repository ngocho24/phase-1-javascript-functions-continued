// code your solution here
function saturdayFun (fun = "roller-skate"){
    return `This Saturday, I want to ${fun}!`;
}
// saturdayFun ();


function mondayWork (todo = "go to the office"){
    return`This Monday, I will ${todo}.`;
}
mondayWork ();


const adjectiveDeclared = function (style = "*",adj ="special"){

    console.log(`You are ${style}${adj}${style}!`);
    
     }
     adjectiveDeclared ();


// function wrapAdjective(word ="||"){
//     return function(adjective='a dedicated programmer'){
//         return `You are ${word}${adjective}${word}!`;}}

function wrapAdjective(visualFlair = "*",) {
    return `You are ${visualFlair} ${adj} ${visualFlair}`
}
const encouragingPromptFunction = wrapAdjective("!!!")
const wrappedMessage = encouragingPromptFunction ( "a dedicated programmer")

console.log (wrappedMessage);