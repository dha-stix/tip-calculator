//VARIABLE DECLARATION
const customPercent = document.querySelector(".customBtn")
let customField = document.querySelector(".custom__input")
const tippedAmount = document.querySelector(".tip")
const totalAmount = document.querySelector(".total")
let numberOfPeople = document.querySelector("#people") 
const calculateBtn = document.querySelector(".calculateBtn")
const resetBtn = document.querySelector(".resetBtn")
let bill = document.querySelector("#bill")
const percent5 = document.querySelector("#percent5")
const percent10 = document.querySelector("#percent10")
const percent15 = document.querySelector("#percent15")
const percent25 = document.querySelector("#percent25")
const percent50 = document.querySelector("#percent50")
localStorage.setItem("billing" , "")
localStorage.setItem("people" , "")
localStorage.setItem("tip", "")

//FUNCTIONS
const getBill = e => {
    let value = e.target.value
    localStorage.setItem("billing", value)
} 
const getNumberOfPeople = e => {
    let value = e.target.value
    localStorage.setItem("people", value) 
 } 
const getTip = e => {
    let value = e.target.value
    localStorage.setItem("tip", value)
} 
const computeTip = () => {
    const people = Number(localStorage.getItem("people"))
    if(people !== 0) {
    const billing = localStorage.getItem("billing")
    const tip = localStorage.getItem("tip")
    let amount = (Number(billing) * Number(tip) / 100) / Number(people)
    tippedAmount.textContent = "$" + amount.toFixed(2)
    let t_amount = Number(billing) + amount
    totalAmount.textContent = "$" + t_amount.toFixed(2)
    } else {
        numberOfPeople.style.border ="2px solid red"
    }
}


const resetFunction = () => {
    localStorage.removeItem("billing")
    localStorage.removeItem("tip")
    localStorage.removeItem("people")
    totalAmount.textContent = "$0.00"
    tippedAmount.textContent = "$0.00"
    bill.value = " "
    numberOfPeople.value = " "
}


//VARIABLES IMPLEMENTATION
bill.addEventListener('keyup', getBill) 
percent5.addEventListener('click', getTip)
percent10.addEventListener('click', getTip)
percent15.addEventListener('click', getTip)
percent25.addEventListener('click', getTip)
percent50.addEventListener('click', getTip)
calculateBtn.addEventListener('click', computeTip)
resetBtn.addEventListener('click', resetFunction)
customField.addEventListener('keyup', getTip)
numberOfPeople.addEventListener('keyup', getNumberOfPeople)
const toggleCustom = () => customField.classList.toggle("nodisplay")
customPercent.addEventListener('click', toggleCustom)






