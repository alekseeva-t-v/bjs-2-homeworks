//Задача № 1
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

//Задача № 2
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

  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}
