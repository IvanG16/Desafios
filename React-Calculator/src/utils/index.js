export const operations = {
    '+': (x, y) => parseFloat(x) + parseFloat(y),
    '-': (x, y) => parseFloat(x) - parseFloat(y),
    '*': (x, y) => parseFloat(x) * parseFloat(y),
    '/': (x, y) => parseFloat(x) / parseFloat(y),
    '%': (x, y) => parseFloat(y) * (parseFloat(x) / 100),
  };
export const operators = Object.keys(operations);
