const str =  "Rwanda nziza gihugu cyacu"
// count the number of characters
const numberOfChars =  str.length
// chatAt()
const CharAt = str.charAt(0)
// console.log(CharAt)
// return character code with charCodeAt()
const charCoder =  str.charCodeAt(23)
console.log(charCoder)

let strsub = "Apple, Banana, Kiwi";
let part = strsub.substring(7,13);
console.log(part.toUpperCase())

const trimString = " Apple   "
console.log(trimString.length)
const result = trimString.trimStart()
console.log(result)
console.log("length of result: " + result.length)


const resultEnd = trimString.trimEnd()
console.log(resultEnd)
console.log("length of result: " + resultEnd.length)


let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
console.log(index)


let stringTemplate = `Hello world  ${text}`
console.log(stringTemplate)
