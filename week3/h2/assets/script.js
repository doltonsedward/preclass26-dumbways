const getId = (id) => document.getElementById(id)
let numberInput = getId('numberInput') 
let outputOdd = getId('outputOdd')
let outputEven = getId('outputEven')

const synchronousFunc = (input, odd, even) => {
    const oddStore = []
    const evenStore = []
    let oddString
    let evenString

    function printResult(store, target, string, n) {
        if (n < 1) return
        else {
            if (target === odd) {
                if (n % 2 === 1) {
                    store.unshift(n)
                    string = store.join(' ')
                    target.innerHTML = string
                }
            } else if (target === even) {
                if (n % 2 === 0) {
                    store.unshift(n)
                    string = store.join(' ')
                    target.innerHTML = string
                }
            }

            return printResult(store, target, string, n - 1)
        }
    }

    printResult(oddStore, odd, oddString, input.value)
    printResult(evenStore, even, evenString, input.value)
}

const asynchronousFunc = (input, odd, even) =>  {
    odd.innerHTML = ''
    even.innerHTML = ''

    let i = 1
    setInterval(() => {
        if (i <= input.value) {
            if (i % 2 === 1) odd.innerHTML += `${i} `

            i++
        }
    }, 500)

    let j = 1
    setInterval(() => {
        if (j <= input.value) {
            if (j % 2 === 0) even.innerHTML += ` ${j} `
 
            j++
        }
    }, 550)
}
    


function result(func) {
    if (!numberInput.value) {
        alert('Please fill the input')
        return
    } else if (numberInput.value < 1 || numberInput.value > 300) {
        alert('Cannot count number under 1 or above 300')
        return
    } else {
        return func(numberInput, outputOdd, outputEven)
    }
}

