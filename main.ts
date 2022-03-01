basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        # # # # #
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        # . . # .
        # # . # .
        # . # # .
        # . . # .
        `)
    basic.showLeds(`
        . . . . .
        # . . # .
        # # . # .
        # . # # .
        # . . # .
        `)
    basic.showLeds(`
        . . . . .
        # . . . #
        # # . # #
        # . # . #
        # . . . #
        `)
    basic.showLeds(`
        # # # . .
        # . . . .
        # # # . .
        # . . . .
        # # # . .
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # # # . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        `)
    basic.showString("nammis")
    basic.showIcon(IconNames.Heart)
    music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Forever)
})
