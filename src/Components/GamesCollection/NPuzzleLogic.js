import _ from "lodash";

export const moveCards = (num, newCards) => {
  const row = newCards.findIndex((row) => row.includes(num));
  const col = newCards[row].indexOf(num);
  const row_0 = newCards.findIndex((row) => row.includes(0));
  const col_0 = newCards[row_0].indexOf(0);
  if (row !== row_0 && col !== col_0) return false;
  if (row === row_0) {
    if (col < col_0) {
      for (let i = col_0 - 1; i >= col; i--) {
        const temp = newCards[row][i];
        newCards[row][i] = newCards[row][i + 1];
        newCards[row][i + 1] = temp;
      }
    } else {
      for (let i = col_0 + 1; i <= col; i++) {
        const temp = newCards[row][i];
        newCards[row][i] = newCards[row][i - 1];
        newCards[row][i - 1] = temp;
      }
    }
  }
  if (col === col_0) {
    if (row < row_0) {
      for (let i = row_0 - 1; i >= row; i--) {
        const temp = newCards[i][col];
        newCards[i][col] = newCards[i + 1][col];
        newCards[i + 1][col] = temp;
      }
    } else {
      for (let i = row_0 + 1; i <= row; i++) {
        const temp = newCards[i][col];
        newCards[i][col] = newCards[i - 1][col];
        newCards[i - 1][col] = temp;
      }
    }
  }
  return true;
};

export const getAns = (type) => {
  const ans = [...Array(type * type).keys()].slice(1);
  ans.push(0);
  return ans;
};

export const getShuffledCards = (type) => {
  let newCards = [];
  const arr = [...Array(type * type).keys()];
  while (arr.length) newCards.push(arr.splice(0, type));

  for (let i = 0; i < type * 30; i++) {
    moveCards(Math.floor(Math.random() * type * type), newCards);
  }

  return newCards;
};
