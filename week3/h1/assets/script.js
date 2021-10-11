const getId = (id) => document.getElementById(id)

let btnResetOdd = getId('wrapperBtnResetOdd')
let btnResetEven = getId('wrapperBtnResetEven')

const reset = (target) => { 
    target.textContent = ''

    !getId('outputOdd').textContent ? 
    btnResetOdd.innerHTML = '' : btnResetOdd.innerHTML = '<button class="reset-btn" onclick="reset(outputOdd)">Reset</button>'

    !getId('outputEven').textContent ? 
    btnResetEven.innerHTML = '' : btnResetEven.innerHTML = '<button class="reset-btn" onclick="reset(outputEven)">Reset</button>'
}

let emptyResult

let oddNumbers = []
function generateOdd(oddNum) {
    if (oddNum < 1) emptyResult = []
    else {
        if (oddNum % 2 === 0) oddNumbers.unshift(oddNum)
        
        return generateOdd(oddNum - 1)
    }

    return oddNumbers
}

let evenNumbers = []
function generateEven(evenNum) {
    if (evenNum < 1) emptyResult = []
    else {
        if (evenNum % 2 === 1) evenNumbers.unshift(evenNum)
        
        return generateEven(evenNum - 1)
    }

    return evenNumbers
}

function showResult(func, input) {
    func(input.value)
    
    let text = ''
    if (!getId('numberInput').value) {
        alert('Please fill the input')
        return
    } else if (getId('numberInput').value < 1 || getId('numberInput').value > 300) {
        alert('Cannot count number under 1 and above 300')
    } else {
        if (func === generateOdd) {
            btnResetOdd.innerHTML = '<button class="reset-btn" onclick="reset(outputOdd)">Reset</button>'
            oddNumbers.forEach((e) => { text += e + ' ' })
    
            getId('outputOdd').innerHTML = text
            
    
            // set the value back to empty
            oddNumbers = []
        } else if (func === generateEven) {
            btnResetEven.innerHTML = '<button class="reset-btn" onclick="reset(outputEven)">Reset</button>'
            evenNumbers.forEach((e) => { text += e + ' ' })
            getId('outputEven').innerHTML = text
    
            // set the value back to empty
            evenNumbers = []
    }
    }

    getId('numberInput').value = ''
}


