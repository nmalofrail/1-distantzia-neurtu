let distantzia = 0
DFRobotMaqueenPlus.I2CInit()
DFRobotMaqueenPlus.PID(PID.ON)
basic.forever(function () {
    distantzia = DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2)
})
basic.forever(function () {
    if (distantzia > 40) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 100)
    } else if (distantzia > 30) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 60)
    } else if (distantzia > 10) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 20)
    } else if (distantzia > 3) {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
})
