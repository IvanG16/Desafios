export const basicOperations = {
  '+': (x, y) => parseFloat(x) + parseFloat(y),
  '-': (x, y) => parseFloat(x) - parseFloat(y),
  '*': (x, y) => parseFloat(x) * parseFloat(y),
  '/': (x, y) => parseFloat(x) / parseFloat(y),
  '%': (x, y) => parseFloat(y) * (parseFloat(x) / 100),
};
export const basicOperators = Object.keys(basicOperations);

export const operations = {
  '√': (x) => parseFloat(x) + parseFloat(x),
  '^': (x, y) => parseFloat(x) - parseFloat(y),
  'cos': (x, y) => parseFloat(x) * parseFloat(y),
  'tan': (x, y) => parseFloat(x) / parseFloat(y),
  'sen': (x, y) => parseFloat(y) * (parseFloat(x) / 100),
};
export const operators = Object.keys(operations);

export const getApiData = async (number1, operator, accumulator) => {
  if(!number1 && operator != '^'){
      const response = await fetch(`/api/v2/query?appid=XA3Y4W-2EP6LQJ3W6&input=${operator}%20${accumulator}&output=json`);
      if (response.ok) {
          const data = await response.json();
          if (data.queryresult.success) {
              const apiResponse = (data.queryresult.pods.find(({ id }) => id === 'Result')) ? data.queryresult.pods.find(({ id }) => id === 'Result')?.subpods[0]?.plaintext : data.queryresult.pods.find(({ id }) => id === 'DecimalApproximation')?.subpods[0]?.plaintext
              return apiResponse.substring(0, 28);
          }
      }
  }else if(number1){
      return 'Syntax Error';
  }
  throw new Error(`Error al calcular ${number1} ${operator} ${accumulator}`);
};

export async function inputtedEquals({ number1, operator, accumulator, setAccumulator, setLogList }){
  if(!operator){
      return console.warn("You're trying to submit an empty calculation")
  }

  const apiData = await getApiData(number1, operator, accumulator);
  setAccumulator(apiData);
  setLogList((previousLogs) => {
      const newLogs = {
          calculo: `${number1} ${operator} ${accumulator}`,
          date: new Date(),
      }
      return [...previousLogs, newLogs]
  }
  )
}

export function inputtedClearAll({ setAccumulator, setNumber1, setOperator }){
  setAccumulator('');
  setNumber1(null);
  setOperator(null);
}

export function inputtedDelete({ setAccumulator, accumulator, setOperator, operator, setNumber1, number1 }){
  if (accumulator) return setAccumulator(accumulator.substring(0, accumulator.length - 1));
  
  if (operator) return setOperator(operator.substring(0, operator.length - 1));

  if (number1) return setNumber1(number1.substring(0, number1.length - 1));
}

export function onOff({ isOff, setIsOff, setAccumulator, setOperator, setNumber1 }){
  setIsOff(!isOff);
  setAccumulator('');
  setNumber1(null);
  setOperator(null);
}

export function inputtedDecimalPoint({ setAccumulator, accumulator, input }){
  if (accumulator.includes('.')) return setAccumulator(accumulator);

  setAccumulator(accumulator + input);
}

export function inputtedNumber({ accumulator, setAccumulator, input }){
  if(accumulator.length < 28) return setAccumulator(accumulator + input);
}

export function determinesOutput({ input, setAccumulator, accumulator, setNumber1, number1, setOperator, operator, setIsOff, isOff ,setLogList }){
  if(inputs[input]){
      return inputs[input]({ input, setAccumulator, accumulator, setNumber1, number1, setOperator, operator, setIsOff, isOff ,setLogList });
  }
  return inputtedNumber({ accumulator, setAccumulator, input });
}


export function determinesOutputBasic({ input, setAccumulator, accumulator, setNumber1, number1, setOperator, operator, setIsOff, isOff }){
  if(normalInputs[input]){
      return normalInputs[input]({ input, setAccumulator, accumulator, setNumber1, number1, setOperator, operator, setIsOff, isOff });
  }
  return inputtedNumber({ accumulator, setAccumulator, input });
}

export function normalEquals({ number1, accumulator, operator, setAccumulator }){
  if(!(number1 && accumulator && operator)){
    return console.warn('You are trying to submit an invalid operation')
  }

  setAccumulator(basicOperations[operator](number1, accumulator));
}

export const inputs = {
  ['=']: inputtedEquals,
  ['C']: inputtedClearAll,
  ['del']: inputtedDelete,
  ['Off']: onOff,
  ['.']: inputtedDecimalPoint,
  ...operations,
}

export const normalInputs = {
  ['=']: normalEquals,
  ['C']: inputtedClearAll,
  ['del']: inputtedDelete,
  ['Off']: onOff,
  ['.']: inputtedDecimalPoint,
  ...basicOperations,
}
