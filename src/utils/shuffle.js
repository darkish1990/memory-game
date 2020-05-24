export function shuffle(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let randomIdx = Math.floor(Math.random() * len);
    let copyCurrent = { ...arr[i] };
    let copyRandom = { ...arr[randomIdx] };
    arr[i] = copyRandom;
    arr[randomIdx] = copyCurrent;
  }
  return arr;
}
