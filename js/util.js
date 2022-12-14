const ESCAPE_KEY = 'Escape';

export function randomNum(start, end) {
  if (start > end) {
    return -1;
  } else if (start === end) {
    return start;
  }
  return Math.floor(Math.random() * (end - start + 1)) + start;
}

export const isKeyEsc = (keyCode) => keyCode === ESCAPE_KEY;
