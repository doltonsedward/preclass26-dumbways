const getId = (id) => document.getElementById(id)
const tes = () => alert('halo')

let numberInput = getId('numberInput')

function generateOdd(oddNum) {
    let txt = ''
    for (let i = 1; i < oddNum.value; i++) 
        if (i % 2 === 0) txt += i
    

    return txt
}

function generateEven(evenNum) {
    let txt = ''
    for (let i = 1; i < oddNum.value; i++) 
        if (i % 2 === 1) txt += i
    

    return txt
}

function showResult(func, input) {
    if (func == generateOdd) {
        return getId('outputOdd').innerHTML = func(input)
    } else {
        return getId('outputOdd').innerHTML = func(input)
    }
}

getId('oddBtn').addEventListener('click', () => {
    showResult(generateOdd, numberInput)
})


