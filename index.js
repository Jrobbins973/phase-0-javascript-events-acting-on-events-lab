// Your code here

const dodger = document.getElementById("dodger")

dodger.style.backgroundColor = "olive"

dodger.style.bottom = '0px'
// dodger.style.left = '0px'

const moveDodgerLeft = () => {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 10}px`
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === 'ArrowLeft') {
        moveDodgerLeft()
    }
})


const moveDodgerRight = () => {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10)
    if (left < 360) {
        dodger.style.left = `${left + 10}px`
    }
    
}

document.addEventListener("keydown", function (e) {
    if (e.key === 'ArrowRight') {
        moveDodgerRight()
    }
})