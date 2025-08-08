basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        mecanumRobot.Motor(LR.Upper_left, MD.Back, 45)
        mecanumRobot.Motor(LR.Lower_left, MD.Back, 45)
        mecanumRobot.Motor(LR.Upper_right, MD.Forward, 45)
        mecanumRobot.Motor(LR.Lower_right, MD.Forward, 45)
        basic.pause(250)
        mecanumRobot.state(MotorState.stop)
    }
})
