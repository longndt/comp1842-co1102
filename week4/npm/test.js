/* JavaScript in general or NodeJS in specific, we do not need to include semicolon (;) at the end of each statement */

/* console : terminal (such as command prompt)
   log : display
   console.log : display value to terminal */
console.log("Greenwich Vietnam")
console.log("Web Programming 2 - COMP1842")

/* console.error: display error to terminal */
console.error("This is an error")

/* declare an array */
const greenwich_vietnam = ["Ha Noi", "HCM City", "Da Nang", "Can Tho"]

/* display every elements in this array using foreach loop */
greenwich_vietnam.forEach(campus => {
   console.log(campus)
})