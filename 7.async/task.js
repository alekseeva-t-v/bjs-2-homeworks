class AlarmClock {
  /**
   * Конструктор объекта будильник (Создает свойство для хранения коллекции звонков `alarmCollection` и свойство `intervalId` для хранения `id` таймера).
   *
   */
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  /**
   * Добавляет новый звонок в коллекцию существующих.
   *
   * @param {string} time Время, когда действие должно запуститься.
   * @param {object} callback Функция-колбека — действие, которое должно запуститься.
   */
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

  /**
   * Удаляет звонки по определённому времени.
   *
   * @param {string} time Время, звонка, который следует удалить.
   *
   */
  removeClock(time) {
    const updateAlarmCollection = this.alarmCollection.filter((alarmElem) => {
      return alarmElem.time !== time;
    });

    this.alarmCollection = updateAlarmCollection;
  }

  /**
   * Возвращает текущее время в строковом формате.
   *
   * @return {string} текущее время в строковом формате.
   */
  getCurrentFormattedTime() {
    return new Date().toTimeString().slice(0, 5);
  }

  /**
   * Запускает будильник.
   *
   */
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

  /**
   * Останавливает выполнение интервала будильника.
   *
   */
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  /**
   * Сбрасывает возможность запуска всех звонков.
   *
   */
  resetAllCalls() {
    this.alarmCollection.forEach((alarmElem) => {
      alarmElem.canCall = true;
    });
  }

  /**
   * Удаляет все звонки.
   *
   */
  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
