/**
 * Кеширующий декоратор. Отвечает за кеширование только последних пяти различных вызовов функции. Возвращает строку по определенному условию
 *
 * @param {function} func функция, которую необходимо декарировать.
 * @return {function} декорированная функция.
 */
function cachingDecoratorNew(func) {
  function wrapper(...args) {
    const hash = md5([...args]);
    let indexInCache = cache.findIndex((item) => item.hash === hash);
    if (indexInCache !== -1) {
      console.log('Из кэша: ' + cache[indexInCache].value);
      return 'Из кэша: ' + cache[indexInCache].value;
    }
    let result = func(...args);
    cache.push({ hash: hash, value: result });
    if (cache.length > 5) {
      cache.shift();
    }
    console.log('Вычисляем: ' + result);
    return 'Вычисляем: ' + result;
  }

  cache = [];
  return wrapper;
}

/**
 * Debounce декоратор
 *
 * @param {function} func функция, которую необходимо декарировать.
 * @param {number} delay интервал времени.
 * @return {function} декорированная функция.
 */
function debounceDecoratorNew(func, delay) {
  let timeoutID = null;
  let isTrottled = false;
  function wrapper(...args) {
    wrapper.allCount++;
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    timeoutID = setTimeout(() => {
      func(args);
      wrapper.count++;
    }, delay);

    if (!isTrottled) {
      func(...args);
      wrapper.count++;
      isTrottled = true;
    }
  }

  console.log(func);
  console.log(delay);
  console.log(wrapper)
  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}
