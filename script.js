let textEl = document.getElementById('text')
let speedEl = document.getElementById('speed')
let text = 'Volimo da programiramo!'
let textPosition = 1
let speed = 500 / speedEl.value

WriteText()

// imena promenljivih - malim slovom
// imena funkcija - velikim

function WriteText(){
    textEl.innerText = text.slice(0, textPosition)
    textPosition++
    if (textPosition > text.length) {
        textPosition = 1
    }
    setTimeout(WriteText, speed)
}

speedEl.addEventListener('input', (e) => {
    speed = 500 / e.target.value
})