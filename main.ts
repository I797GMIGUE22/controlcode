basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
    if (GHBit.Button(GHBit.enButton.B1, GHBit.enButtonState.Press)) {
        radio.sendString("E")
        basic.showLeds(`
            . . . . .
            . . # . .
            # . # . #
            # # # # #
            # # # # #
            `)
    } else if (GHBit.Button(GHBit.enButton.B2, GHBit.enButtonState.Press)) {
        radio.sendString("F")
        basic.showLeds(`
            . # . # .
            # # . . #
            # # . # .
            # # . . #
            . # . # .
            `)
    } else if (GHBit.Button(GHBit.enButton.B3, GHBit.enButtonState.Press)) {
        radio.sendString("G")
        basic.showLeds(`
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            # . . . #
            `)
    } else if (GHBit.Button(GHBit.enButton.B4, GHBit.enButtonState.Press)) {
        radio.sendString("B")
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (GHBit.Rocker(GHBit.enRocker.Up)) {
        radio.sendString("A")
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (GHBit.Rocker(GHBit.enRocker.Down)) {
        radio.sendString("")
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else if (GHBit.Rocker(GHBit.enRocker.Left)) {
        radio.sendString("C")
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (GHBit.Rocker(GHBit.enRocker.Right)) {
        radio.sendString("D")
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (GHBit.Rocker(GHBit.enRocker.Press)) {
        radio.sendString("I")
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . # .
            . . . . .
            . . . . .
            `)
    } else if (GHBit.Rocker(GHBit.enRocker.Nostate)) {
        radio.sendString("")
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    }
})
