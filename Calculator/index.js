function addEventListenerToButton(element) {
  element.addEventListener('click', () => {
    const value = element.getAttribute('data-button-value');
    const type = element.getAttribute('data-button-type');

    switch (type) {
      case 'clear':
        clear();
        break;

      case 'delete':
        del();
        break;

      case 'operator':
        numbers[OPERATOR] = value;
        if (numbers.length > 3) {
          operation(numbers);
        }
        parenthesis(numbers);

        break;

      case 'number':
        numbers[OPERATOR] ? numbers[SECOND_NUMBER] += value : numbers[FIRST_NUMBER] += value;
        parenthesis(numbers);
        break;

      case 'equal':
        parenthesis(numbers);
        operation(numbers);
        document.getElementById('inputs').innerHTML = numbers[FIRST_NUMBER];
        numbers[SECOND_NUMBER] = '';

        break;

      case 'number-sign':
        if (numbers[OPERATOR]) {
          numbers[SECOND_NUMBER] = numbers[SECOND_NUMBER] * -1;
          document.getElementById('inputs').innerHTML = `(${numbers[SECOND_NUMBER]})`;
        } else {
          numbers[FIRST_NUMBER] = numbers[FIRST_NUMBER] * -1;
          document.getElementById('inputs').innerHTML = numbers[FIRST_NUMBER];
        }
        break;
    }
  });
}

function operation(numbers) {
  switch (numbers[OPERATOR]) {
    case '+':
      numbers[FIRST_NUMBER] = Number(numbers[FIRST_NUMBER]) + Number(numbers[SECOND_NUMBER]);
      break;

    case '-':
      numbers[FIRST_NUMBER] = numbers[FIRST_NUMBER] - numbers[SECOND_NUMBER];
      break;

    case 'x':
      numbers[FIRST_NUMBER] = numbers[FIRST_NUMBER] * numbers[SECOND_NUMBER];
      break;

    case '/':
      numbers[FIRST_NUMBER] = numbers[FIRST_NUMBER] / numbers[SECOND_NUMBER];
      break;
  }
}

function clear() {
  value = '';
  numbers = ['', '', ''];
  document.getElementById('old-inputs').innerHTML = '';
  document.getElementById('inputs').innerHTML = '';
}

function del() {
  numbers[FIRST_NUMBER] = numbers[FIRST_NUMBER].toString();
  numbers[FIRST_NUMBER] = numbers[FIRST_NUMBER].slice(0, -1);
  document.getElementById('old-inputs').innerHTML = numbers[FIRST_NUMBER];
  document.getElementById('inputs').innerHTML = '';
}

function parenthesis() {
  if (numbers[SECOND_NUMBER].toString()
    .includes('-')) {
    document.getElementById('old-inputs').innerHTML = `${numbers[FIRST_NUMBER] + numbers[OPERATOR]}(${numbers[SECOND_NUMBER]})`;
  } else {
    document.getElementById('old-inputs').innerHTML = numbers[FIRST_NUMBER] + numbers[OPERATOR] + numbers[SECOND_NUMBER];
  }
}

let numbers = ['', '', ''];
const FIRST_NUMBER = 0;
const OPERATOR = 1;
const SECOND_NUMBER = 2;

const buttons = document.getElementsByClassName('calc-button');

Array.from(buttons).forEach(addEventListenerToButton);
