let sentence = "The movie is not that bad, I like it";
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");

let newSentence = ""
if (wordBad > wordNot && wordNot != -1 && wordBad != -1){
    newSentence = sentence.slice(0,wordNot) + "good" + sentence.slice(wordBad + "bad".length)
    console.log(newSentence)
}
else{
    newSentence = sentence
}

console.log("Your string is : ", sentence)
console.log("--> the result is : ", newSentence)