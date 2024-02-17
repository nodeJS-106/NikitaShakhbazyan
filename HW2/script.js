//Longest word
const LongestWord = (words) => {
    const splited = words.split(',')
    let longest = ''
    for(let word of splited) {
        if(word.length > longest.length ){
            longest = word
        }
    }
    return longest
}


// Array from sting
const stringToArray = (str) => {
    const splited = str.split(',')
    return splited
}

// console.log(stringToArray(words))



//mail security

const mailSecurity = (data) => {
    let name = '';
    let lastNameHidden = '';
    const dotIndex = data.indexOf('.');
    const mIndex = data.indexOf('@')
    const lastName = data.substring(dotIndex , mIndex);
    for (let i = 0; i < lastName.length; i++) {
      lastNameHidden += '.';
    }
    
    name = data.substring(0, dotIndex) + lastNameHidden + data.substring(mIndex);
    
    return name
  }
  


module.exports = {
    LongestWord,
    mailSecurity,
    stringToArray
}