let start = 0
let punkt = 0
let vergangeneZeit = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
    basic.showIcon(IconNames.Chessboard)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(punkt)
})
input.onButtonPressed(Button.B, function () {
    vergangeneZeit = input.runningTime() - start
    punkt = Math.abs(vergangeneZeit - 7000)
    basic.showNumber(punkt)
})
