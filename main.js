// function calculator(e) {
//   e.preventDefault()
//   const num1 = document.querySelector("#num1").value
//   const num2 = document.querySelector("#num2").value
//   let answer = document.querySelector("#answer")

//   const add = () => {
//     // e.preventDefault()
//     return (answer.innerHTML = Number(num1) + Number(num2))
//   }
//   document.querySelector("#add").addEventListener("click", add)

//   document.querySelector("#form").addEventListener("click", calculator)
// }
// document.querySelector("#form").addEventListener("submit", calculator)

//..............................................................................................................................
//..............................................................................................................................
//....CCCCCCCC......AAAAA.....LLLL.........CCCCCCCC...UUUU...UUUU..LLLL..........AAAAA...TTTTTTTTTT...OOOOOOOOO...RRRRRRRRRRR...
//...CCCCCCCCCC.....AAAAA.....LLLL........CCCCCCCCCC..UUUU...UUUU..LLLL..........AAAAA...TTTTTTTTTT..OOOOOOOOOOO..RRRRRRRRRRR...
//..CCCCCCCCCCC....AAAAAAA....LLLL.......CCCCCCCCCCC..UUUU...UUUU..LLLL.........AAAAAAA..TTTTTTTTTT.0OOOOOOOOOOO..RRRRRRRRRRRR..
//..CCCC...CCCCC...AAAAAAA....LLLL.......CCCC...CCCCC.UUUU...UUUU..LLLL.........AAAAAAA.....TTTT....OOOOO...OOOOO.RRRR...RRRRR..
//.CCCCC....CCCC...AAAAAAA....LLLL......CCCCC....CCCC.UUUU...UUUU..LLLL.........AAAAAAA.....TTTT....OOOO.....OOOO.RRRR....RRRR..
//.CCCC...........AAAAAAAAA...LLLL......CCCC..........UUUU...UUUU..LLLL........AAAAAAAAA....TTTT....OOOO.....OOOO.RRRRRRRRRRRR..
//.CCCC...........AAAA.AAAA...LLLL......CCCC..........UUUU...UUUU..LLLL........AAAA.AAAA....TTTT....OOO......OOOO.RRRRRRRRRRR...
//.CCCC...........AAAAAAAAAA..LLLL......CCCC..........UUUU...UUUU..LLLL........AAAAAAAAAA...TTTT....OOOO.....OOOO.RRRRRRRRRRR...
//.CCCCC....CCCC.AAAAAAAAAAA..LLLL......CCCCC....CCCC.UUUU...UUUU..LLLL.......AAAAAAAAAAA...TTTT....OOOO.....OOOO.RRRR..RRRRR...
//..CCCC...CCCCC.AAAAAAAAAAA..LLLL.......CCCC...CCCCC.UUUU...UUUU..LLLL.......AAAAAAAAAAA...TTTT....OOOOO...OOOOO.RRRR....RRRR..
//..CCCCCCCCCCC..AAAAAAAAAAAA.LLLLLLLLLL.CCCCCCCCCCC..UUUUUUUUUUU..LLLLLLLLLL.AAAAAAAAAAAA..TTTT.....OOOOOOOOOOO..RRRR....RRRR..
//...CCCCCCCCCC.AAAAA....AAAA.LLLLLLLLLL..CCCCCCCCCC..UUUUUUUUUUU..LLLLLLLLLLAAAAA....AAAA..TTTT.....OOOOOOOOOOO..RRRR....RRRR..
//....CCCCCCCC..AAAA.....AAAA.LLLLLLLLLL...CCCCCCCC....UUUUUUUUU...LLLLLLLLLLAAAA.....AAAA..TTTT......OOOOOOOOO...RRRR....RRRR..
//..............................................................................................................................
//..............................................................................................................................

// ADDITION FUNCTION
//------------------
function add(e) {
  e.preventDefault()
  const num1 = document.querySelector("#num1").value
  const num2 = document.querySelector("#num2").value
  // const input1 = num1.value
  // const input2 = num2.value
  // console.log(input1)
  // console.log(input2)
  let answer = document.querySelector("#answer")
  return (answer.innerHTML = Number(num1) + Number(num2))
}
document.querySelector("#add").addEventListener("click", add)
//==============================================================

// SUBTRACTION FUNCTION
//------------------
function subtract(e) {
  e.preventDefault()
  const num1 = document.querySelector("#num1").value
  const num2 = document.querySelector("#num2").value
  let answer = document.querySelector("#answer")
  return (answer.innerHTML = Number(num1) - Number(num2))
}
document.querySelector("#subtract").addEventListener("click", subtract)
//==============================================================

// MULTIPLICATION FUNCTION
//------------------
function multiply(e) {
  e.preventDefault()
  const num1 = document.querySelector("#num1").value
  const num2 = document.querySelector("#num2").value
  let answer = document.querySelector("#answer")
  return (answer.innerHTML = Number(num1) * Number(num2))
}
document.querySelector("#multiply").addEventListener("click", multiply)
//==============================================================

// DIVISION FUNCTION
//------------------
function divide(e) {
  e.preventDefault()
  const num1 = document.querySelector("#num1").value
  const num2 = document.querySelector("#num2").value
  let answer = document.querySelector("#answer")
  return (answer.innerHTML = Number(num1) / Number(num2))
}
document.querySelector("#divide").addEventListener("click", divide)
//==============================================================

// document.querySelector("#add").addEventListener("click", add)
// document.querySelector("#subtract").addEventListener("click", subtract)
// document.querySelector("#multiply").addEventListener("click", multiply)
// document.querySelector("#divide").addEventListener("click", divide)

//  irrelevant test code
//
// // const result =
// answer.innerHTML = result
// console.log(answer)

//................................................................................................................
//................................................................................................................
//.HHHH...HHHH.....AAAAA.....RRRRRRRRRR...DDDDDDDDD.........MMMMM...MMMMM....OOOOOOOOO...DDDDDDDDD....EEEEEEEEEE..
//.HHHH...HHHH.....AAAAA.....RRRRRRRRRRR..DDDDDDDDDDD.......MMMMM...MMMMM...OOOOOOOOOO...DDDDDDDDDDD..EEEEEEEEEE..
//.HHHH...HHHH....AAAAAAA....RRRRRRRRRRR..DDDDDDDDDDD.......MMMMMM..MMMMM..OOOOOOOOOOOO..DDDDDDDDDDD..EEEEEEEEEE..
//.HHHH...HHHH....AAAAAAA....RRRR...RRRRR.DDDD...DDDDD......MMMMMM.MMMMMM..OOOO....OOOO..DDDD...DDDDD.EEEE........
//.HHHHHHHHHHH....AAAAAAA....RRRR...RRRRR.DDDD....DDDD......MMMMMM.MMMMMM..OOOO....OOOOO.DDDD....DDDD.EEEEEEEEEE..
//.HHHHHHHHHHH...AAAAAAAAA...RRRRRRRRRRR..DDDD....DDDD......MMMMMM.MMMMMM.MOOO......OOOO.DDDD....DDDD.EEEEEEEEEE..
//.HHHHHHHHHHH...AAAA.AAAA...RRRRRRRRRRR..DDDD....DDDD......MMMMMM.MMMMMM.MOOO......OOOO.DDDD....DDDD.EEEEEEEEEE..
//.HHHHHHHHHHH...AAAAAAAAAA..RRRRRRRRRRR..DDDD....DDDD......MMMMMMMMMMMMM.MOOO......OOOO.DDDD....DDDD.EEEEEEEEEE..
//.HHHH...HHHH..AAAAAAAAAAA..RRRR..RRRRR..DDDD...DDDDD......MMM.MMMMMMMMM..OOOO....OOOOO.DDDD...DDDDD.EEEE........
//.HHHH...HHHH..AAAAAAAAAAA..RRRR...RRRR..DDDD...DDDD.......MMM.MMMMM.MMM..OOOO....OOOO..DDDD...DDDD..EEEE........
//.HHHH...HHHH..AAAAAAAAAAAA.RRRR...RRRR..DDDDDDDDDDD.......MMM.MMMMM.MMM..OOOOOOOOOOOO..DDDDDDDDDDD..EEEEEEEEEE..
//.HHHH...HHHH.HAAAA....AAAA.RRRR...RRRR..DDDDDDDDDD........MMM.MMMMM.MMM...OOOOOOOOOO...DDDDDDDDDD...EEEEEEEEEE..
//.HHHH...HHHH.HAAA.....AAAA.RRRR...RRRRR.DDDDDDDDD.........MMM.MMMMM.MMM....OOOOOOOOO...DDDDDDDDD....EEEEEEEEEE..
//................................................................................................................
//................................................................................................................
