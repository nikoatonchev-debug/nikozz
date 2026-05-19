input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    stunde += 1
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.showNumber(stunde)
    basic.pause(250)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . . . .
        . . # . .
        . . . . .
        `)
    basic.pause(250)
    basic.showNumber(minute)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    minute += 1
})
let minute = 0
let stunde = 0
stunde = 0
minute = -1
loops.everyInterval(60000, function () {
    minute += 1
    if (minute == 60) {
        minute = 0
        stunde += 1
    }
    if (stunde == 12) {
        stunde = 0
    }
})
basic.forever(function () {
	
})
