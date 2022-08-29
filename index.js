
// colors
const colrsNames = ['red', 'green', 'blue', 'yellow', 'purple', '#ccc', '#000'];

// span color name
const color = document.querySelector('#color')

// button event 
const buttonClick = document.querySelector('#clrBtn')

buttonClick.addEventListener("click", () =>{


// function colorChange(){

    const randomClr = randomNumber()
        document.body.style.backgroundColor = colrsNames[randomClr]
        color.textContent = colrsNames[randomClr]
})

// random number generator 0-1
const randomNumber =() =>{
    return Math.floor(Math.random() * colrsNames.length)
}