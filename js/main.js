// Генерация случайного числа в заданном диапазоне
function randomNum(start, end) {
  if (start > end) {
    return -1;
  } else if (start === end) {
    return start;
  }
  return Math.floor(Math.random() * (end - start + 1)) + start;
}

// Проверка длины заданной строки
function checkString(str, maxLength) {
  if (str.length <= maxLength) {
    return true;
  }
  return false;
}

randomNum(1, 10);
checkString('abc', 10);
