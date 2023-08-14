
let JsAr = {
    MODE_INPUT: 0x01,
    MODE_OUTPUT: 0x02,
    MODE_PULLUP: 0x04,
    MODE_INPUT_PULLUP: 0x05,
    MODE_PULLDOWN: 0x08,
    MODE_INPUT_PULLDOWN: 0x09,
    MODE_OPEN_DRAIN: 0x10,
    MODE_OUTPUT_OPEN_DRAIN: 0x12,
    MODE_SPECIAL: 0xF0,
    MODE_FUNCTION_1: 0x00,
    MODE_FUNCTION_2: 0x20,
    MODE_FUNCTION_3: 0x40,
    MODE_FUNCTION_4: 0x60,
    MODE_FUNCTION_5: 0x80,
    MODE_FUNCTION_6: 0xA0,
    MODE_ANALOG: 0xC0,


    begin: ffi('int mgos_jsar_begin(void)'),

    enableEthernet: ffi('void mgos_jsar_enableEthernet(void)'),
    disableEthernet: ffi('void mgos_jsar_disableEthernet(void)'),

    enableI2CPins: ffi('void mgos_jsar_enableI2CPins(void)'),
    disableI2CPins: ffi('void mgos_jsar_disableI2CPins(void)'),

    enableCanModule: ffi('void mgos_jsar_enableCanModule(void)'),
    disableCanModule: ffi('void mgos_jsar_disableCanModule(void)'),

    disableSpiPins: ffi('void mgos_jsar_disableSpiPins(void)'),
    enableSpiPins3V3Mode: ffi('void mgos_jsar_enableSpiPins3V3Mode(void)'),
    enableSpiPinsFast3V3Mode: ffi('void mgos_jsar_enableSpiPinsFast3V3Mode(void)'),
    enableSpiPins5VMode: ffi('void mgos_jsar_enableSpiPins5VMode(void)'),
    enableSpiPinsFast5VMode: ffi('void mgos_jsar_enableSpiPinsFast5VMode(void)'),

    disableSDPort: ffi('void mgos_jsar_disableSDPort(void)'),
    enableSDPort1BitMode: ffi('void mgos_jsar_enableSDPort1BitMode(void)'),
    enableSDPort4BitMode: ffi('void mgos_jsar_enableSDPort4BitMode(void)'),
    enableSDPortSpiMode: ffi('void mgos_jsar_enableSDPortSpiMode(void)'),

    enableMisoPin: ffi('void mgos_jsar_enableMisoPin(void)'),
    disableMisoPin: ffi('void mgos_jsar_disableMisoPin(void)'),

    enableIrTx: ffi('void mgos_jsar_enableIrTx(void)'),
    disableIrTx: ffi('void mgos_jsar_disableIrTx(void)'),

    enableIrRx: ffi('void mgos_jsar_enableIrRx(void)'),
    disableIrRx: ffi('void mgos_jsar_disableIrRx(void)'),

    writeMinVoltageToStart: ffi('void mgos_jsar_writeMinVoltageToStart(double)'),
    writeMinVoltageToWork: ffi('void mgos_jsar_writeMinVoltageToWork(double)'),
    readVoltage:   ffi('double mgos_jsar_readVoltage(void)'),

    replacePin36By25AsOUTPUT: ffi('void mgos_jsar_replacePin36By25AsOUTPUT(void)'),
    replacePin36By25AsDAC: ffi('void mgos_jsar_replacePin36By25AsDAC(void)'),
    replacePin35By26AsOUTPUT: ffi('void mgos_jsar_replacePin35By26AsOUTPUT(void)'),
    replacePin35By26AsDAC: ffi('void mgos_jsar_replacePin35By26AsDAC(void)'),
    replacePin34By27AsOUTPUT: ffi('void mgos_jsar_replacePin34By27AsOUTPUT(void)'),
    replacePinByExpander: ffi('void mgos_jsar_replacePinByExpander(int)'),
    
    expanderPinMode: ffi('void mgos_jsar_expanderPinMode(int, int)'),
    expanderDigitalWrite: ffi('void mgos_jsar_expanderDigitalWrite(int, int)'),
    expanderDigitalRead: ffi('int mgos_jsar_expanderDigitalRead(int)'),
    expanderAnalogWrite: ffi('void mgos_jsar_expanderAnalogWrite(int, int)'),
    expanderAnalogRead: ffi('int mgos_jsar_expanderAnalogRead(int)'),
    expanderWriteLed: ffi('void mgos_jsar_expanderWriteLed(int)'),
    timMode: ffi('void mgos_jsar_timMode(int, int, int)'),

    updateFirmware: ffi('int mgos_jsar_updateFirmware(void)'),
    lockExpander: ffi('void mgos_jsar_lockExpander(int)'),
    unlockExpander: ffi('int mgos_jsar_unlockExpander(void)')

};


let JsArKeys = {
    begin: ffi('void mgos_jsar_KeysBegin(void)'),
    pidWrite: ffi('void mgos_jsar_KeysPidWrite(int, int, int)'),
    loopPeriodWrite: ffi('void mgos_jsar_KeysLoopPeriodWrite(int)'),
    encodersEnable: ffi('void mgos_jsar_KeysEncodersEnable(void)'),
    maxPowerWrite: ffi('void mgos_jsar_KeysMaxPowerWrite(int)'),

    digitalWrite: ffi('void mgos_jsar_KeysDigitalWrite(int, int)'),
    powerWrite: ffi('void mgos_jsar_KeysPowerWrite(int, int)'),
    speedWrite: ffi('void mgos_jsar_KeysSpeedWrite(int, int)'),
    
    powerRead: ffi('int mgos_jsar_KeysPowerRead(int)'),
    positionRead: ffi('int mgos_jsar_KeysPositionRead(int)'),
    speedRead: ffi('int mgos_jsar_KeysSpeedRead(int)'),

    digitalWriteAll: ffi('void mgos_jsar_KeysDigitalWriteAll(int, int, int, int)'),
    powerWriteAll: ffi('void mgos_jsar_KeysPowerWriteAll(int, int, int, int)'),
    speedWriteAll: ffi('void mgos_jsar_KeysSpeedWriteAll(int, int, int, int)'),
    positionReadAll: ffi('void mgos_jsar_KeysPositionReadAll(void *, void *, void *, void *)'),
    speedReadAll: ffi('void mgos_jsar_KeysSpeedReadAll(void *, void *, void *, void *)')
};

let JsArMotors = {
    begin: ffi('void mgos_jsar_MotorsBegin(void)'),
    pidWrite: ffi('void mgos_jsar_MotorsPidWrite(int, int, int)'),
    loopPeriodWrite: ffi('void mgos_jsar_MotorsLoopPeriodWrite(int)'),

    encoderModeAB: ffi('void mgos_jsar_MotorsEncoderModeAB(void)'),
    encoderModeA: ffi('void mgos_jsar_MotorsEncoderModeA(void)'),
    encoderModeARising: ffi('void mgos_jsar_MotorsEncoderModeARising(void)'),

    maxPowerWrite: ffi('void mgos_jsar_MotorsMaxPowerWrite(int)'),

    powerWrite: ffi('void mgos_jsar_MotorsPowerWrite(int, int)'),
    speedWrite: ffi('void mgos_jsar_MotorsSpeedWrite(int, int)'),
    powerWriteAll: ffi('void mgos_jsar_MotorsPowerWriteAll(int, int)'),
    speedWriteAll: ffi('void mgos_jsar_MotorsSpeedWriteAll(int, int)'),

    powerRead: ffi('int mgos_jsar_MotorsPowerRead(int)'),
    positionRead: ffi('int mgos_jsar_MotorsPositionRead(int)'),
    speedRead: ffi('int mgos_jsar_MotorsSpeedRead(int)'),

    positionReadAll: ffi('void mgos_jsar_MotorsPositionReadAll(void *, void *)'),
    speedReadAll: ffi('void mgos_jsar_MotorsSpeedReadAll(void *, void *)'),
    powerReadAll: ffi('void mgos_jsar_MotorsPowerReadAll(void *, void *)'),
    readAll: ffi('void mgos_jsar_MotorsReadAll(void *, void *, void *, void *)')

};