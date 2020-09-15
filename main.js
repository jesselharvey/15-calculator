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
function subtract(e) {
  e.preventDefault()
  const num1 = document.querySelector("#num1").value
  const num2 = document.querySelector("#num2").value
  let answer = document.querySelector("#answer")
  return (answer.innerHTML = Number(num1) - Number(num2))
}
function multiply(e) {
  e.preventDefault()
  const num1 = document.querySelector("#num1").value
  const num2 = document.querySelector("#num2").value
  let answer = document.querySelector("#answer")
  return (answer.innerHTML = Number(num1) * Number(num2))
}
function divide(e) {
  e.preventDefault()
  const num1 = document.querySelector("#num1").value
  const num2 = document.querySelector("#num2").value
  let answer = document.querySelector("#answer")
  return (answer.innerHTML = Number(num1) / Number(num2))
}
// // console.log(add)

document.querySelector("#add").addEventListener("click", add)
document.querySelector("#subtract").addEventListener("click", subtract)
document.querySelector("#multiply").addEventListener("click", multiply)
document.querySelector("#divide").addEventListener("click", divide)
// // const result =
// answer.innerHTML = result
// console.log(answer)
