let answer = document.getElementById("answer")
let digct = document.getElementById("dig")
let opct = document.getElementById("op")
let dig = ''
let op = ''
answer.textContent = ''
function num(n) {
    dig += String(n)
    answer.textContent = dig
}

let dig1 = 0
function add() {
    dig1 = dig
    dig = ''
    op = '+'
    digct.textContent = dig1
    opct.textContent = '+'
    answer.textContent = ''
}

function subtract() {
    dig1 = dig
    dig = ''
    op = '-'
    digct.textContent = dig1
    opct.textContent = '-'
    answer.textContent = ''

}

function clr() {
    dig1 = ''
    dig = ''
    op = ''
    digct.textContent = ''
    opct.textContent = ''
    answer.textContent = ''
}

function equals() {
    if (dig1 == 0) {
        digct.textContent = dig
        opct.textContent = '='
        answer.textContent = dig
    }
    else {
        digct.textContent = dig1 + op + dig
        opct.textContent = '='
        dig = op + dig
        total = Number.parseInt(dig1, 10) + Number.parseInt(dig, 10)
        answer.textContent = total
        dig1 = total
        op = ''
    }
}