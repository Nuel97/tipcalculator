let inputBill = document.querySelector('#input-box')
let tipInput = document.querySelector('.grid-items')
let censusInput = document.querySelector('#census')
let personTotal = document.querySelector('#total')
let tipPercentage = document.querySelectorAll('.grid-items')
let total = document.querySelector('#total')
let tipAmount = document.querySelector('#tipamount')
let reset = document.querySelector('#reset')
let custom = document.querySelector('#custom')
let error = document.querySelector('#error-message')
let error2 = document.querySelector('.error2')




function color() {
    reset.style.color = 'hsl(183, 100%, 15%)'
    reset.style.backgroundColor = 'hsl(172, 67%, 45%)'
 /*    reset.style.cursor =  'pointer'
    reset.style.backgroundColor: 'hsl(185, 41%, 84%)';
    reset.style.color =  var(--Verydarkcyan); */
}

function resetColor() {
    reset.style.color = 'hsl(183, 95%, 32%)'
    reset.style.backgroundColor = 'hsl(183, 96%, 21%)'
}

tipPercentage.forEach(item => item.addEventListener('click', function tip(e) {
    const totalTip = (Number((Number(e.target.id / 100)*
    (Number(inputBill.value))) + 
    Number(inputBill.value))) / Number(censusInput.value)

    const tipamount = ((Number(e.target.id / 100))*(Number(inputBill.value)))
    / Number(censusInput.value)

    if(censusInput.value == 0) {
        error.style.display = 'block'
        error2.style.outline = '2px solid rgb(255, 110, 110)'
    } else {
        total.innerHTML = "$" + totalTip.toFixed(2)
        tipAmount.innerHTML = "$" + tipamount.toFixed(2)
        error.style.display = 'none'
        error2.style.outline = 'none'
    }
}))


function calculateBill() {
    const totalTip = (Number((Number(custom.value / 100)*
    (Number(inputBill.value))) + 
    Number(inputBill.value))) / Number(censusInput.value)

    const tipamount = ((Number(custom.value / 100))*(Number(inputBill.value)))
    / Number(censusInput.value)

    if(censusInput.value == 0) {
        error.style.display = 'block'
        error2.style.outline = '2px solid rgb(255, 110, 110)'
    } else {
        total.innerHTML = "$" + totalTip.toFixed(2)
        tipAmount.innerHTML = "$" + tipamount.toFixed(2)
        error.style.display = 'none'
        error2.style.outline = 'none'
    }
}




reset.addEventListener('click', function() {
    tipAmount.innerHTML = '$0.00'
    total.innerHTML = '$0.00'
    inputBill.value = ''
    censusInput.value = ''
    custom.value = ''
    resetColor()
})

function tip() {
    error.style.display = 'none'
    error2.style.outline = 'none'
}