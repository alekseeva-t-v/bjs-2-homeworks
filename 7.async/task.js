class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }

    if (
      this.alarmCollection.some((alarmElem) => {
        return alarmElem[time];
      })
    ) {
      console.warn('Уже присутствует звонок на это же время');
    }

    this.alarmCollection.push({
      callback: callback,
      time: time,
      canCall: true,
    });
  }

  removeClock(time) {
    const updateAlarmCollection = this.alarmCollection.filter((alarmElem) => {
      return alarmElem.time !== time;
    });

    this.alarmCollection = updateAlarmCollection;
  }

  getCurrentFormattedTime() {
    return new Date().toTimeString().slice(0, 5);
  }

  start() {
    if (this.intervalId === null) {
      this.intervalId = setInterval(() => {
        this.alarmCollection.forEach((alarmElem) => {
          if (
            alarmElem.time === this.getCurrentFormattedTime() &&
            alarmElem.canCall === true
          ) {
            alarmElem.canCall = false;
            return alarmElem.callback();
          }
        });
      }, 1000);
    }
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((alarmElem) => {
      alarmElem.canCall = true;
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
