function shout(string) {
    return string.toUpperCase();
    
}

function whisper(string) {
    return string.toLowerCase()
}

function logShout(string) {
    console.log(string.toUpperCase())
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
     const cantAnswer = "I can't hear you!";
     const notAnswer = "YES INDEED!"
     const yesPlease = "I would love to!"
     if (isLowerCase(string)) {
        return cantAnswer
     } else if (isUpperCase(string)) {
        return notAnswer
     } else if (string === "Let's have dinner together!") {
        return yesPlease
     }
        
     

     
}

function isLowerCase(string) {
    return string === string.toLowerCase()
}
function isUpperCase(string) {
    return string === string.toUpperCase()
}