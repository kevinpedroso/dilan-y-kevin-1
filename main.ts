input.onButtonPressed(Button.B, function () {
    basic.showString("" + (!(true)))
    basic.showString("" + (Math.randomBoolean()))
    if (true) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
input.onGesture(Gesture.LogoDown, function () {
	
})
