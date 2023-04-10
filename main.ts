input.onButtonPressed(Button.A, function () {
    basic.showString("" + (steps))
    basic.pause(100)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
})
let steps = 0
steps = 0
