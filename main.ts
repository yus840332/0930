input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("B")
    basic.showArrow(ArrowNames.South)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("L")
    basic.showArrow(ArrowNames.West)
})
function 左轉燈 () {
    bitbot.ledClear()
    數字 = 0
    for (let index = 0; index <= 5; index++) {
        bitbot.setPixelColor(數字 + index, 0xFF0000)
    }
}
input.onButtonPressed(Button.A, function () {
    basic.showNumber(1)
    radio.sendString("number")
})
function 前進 () {
    while (bitbot.sonar(BBPingUnit.Centimeters) > 10) {
        bitbot.go(BBDirection.Forward, 80)
        basic.showNumber(1)
        if (bitbot.sonar(BBPingUnit.Centimeters) < 10) {
            bitbot.stop(BBStopMode.Coast)
            basic.showNumber(2)
            break;
        }
        bitbot.stop(BBStopMode.Brake)
        basic.showNumber(3)
    }
}
input.onGesture(Gesture.LogoDown, function () {
    radio.sendString("F")
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("D")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "F") {
        前進()
        bitbot.ledClear()
        bitbot.setLedColor(0xFF0000)
    } else if (receivedString == "B") {
        bitbot.go(BBDirection.Reverse, 80)
        bitbot.ledClear()
        bitbot.setLedColor(0x0000FF)
    } else if (receivedString == "R") {
        bitbot.rotatems(BBRobotDirection.Right, 30, 500)
        右轉燈()
    } else if (receivedString == "L") {
        bitbot.rotatems(BBRobotDirection.Left, 30, 500)
        左轉燈()
    } else if (receivedString == "number") {
        basic.showNumber(1)
    } else if (receivedString == "S") {
        bitbot.stop(BBStopMode.Coast)
        bitbot.ledClear()
    } else if (receivedString == "D") {
        for (let index = 0; index < 4; index++) {
            bitbot.buzz(true)
            basic.pause(100)
            bitbot.buzz(false)
            basic.pause(0.000000000000000000000001)
        }
        bitbot.buzz(false)
    } else {
        bitbot.stop(BBStopMode.Coast)
        bitbot.ledClear()
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("S")
    basic.showIcon(IconNames.No)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("R")
    basic.showArrow(ArrowNames.East)
})
function 右轉燈 () {
    bitbot.ledClear()
    數字 = 6
    for (let index = 0; index <= 5; index++) {
        bitbot.setPixelColor(數字 + index, 0x0000FF)
    }
}
let 數字 = 0
basic.showNumber(1)
radio.setGroup(1)
