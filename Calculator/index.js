function addEventListenerToButton(element){
    element.addEventListener('click', function(){
        let value=element.getAttribute("data-button-value")
        let type=element.getAttribute("data-button-type")

        switch(type){
            case "clear": 

                clear();
                document.getElementById("old-inputs").innerHTML = '';
                document.getElementById("inputs").innerHTML = '';
            break;
            case "number":

                current += value;

                document.getElementById("inputs").innerHTML = current;
            break;
            case "operator":

                if(operator!=undefined){
                    operator = value;
                    
                }else{
                    document.getElementById("inputs").innerHTML = '';
                    if(current!=''){
                        numbers.push(current);
                        operator = value;
                        document.getElementById("old-inputs").innerHTML = numbers[0] + operator;
                        
                    }
                }
                current='';
            break;
            case "equal":

                if(current!=''){
                    numbers.push(current);
                    document.getElementById("old-inputs").innerHTML = numbers[0] + operator + numbers[1];
                    document.getElementById("inputs").innerHTML = operation(numbers, operator);
                }
                numbers.splice(1, 1);
                current=''
            break;

        }
        
        console.log(numbers);
        console.log(operator);
    })
}

function operation(numbers, operator){
    if(numbers[1] != undefined){
        switch(operator){
            case '+':
                numbers[0]=Number(numbers[0]) + Number(numbers[1]);
            break;
            case '-':
                numbers[0]=numbers[0] - numbers[1];
            break;
            case 'x':
                numbers[0]=numbers[0] * numbers[1];
            break;
            case '/':
                numbers[0]=numbers[0] / numbers[1];
            break;
        }
        numbers.splice(1, 1);
        return numbers[0];
    }
}
function clear() {
    value='';
    current='';
    operator=undefined; 
    numbers =[];
}
let current='';
let numbers =[];
let operator;


const buttons = document.getElementsByClassName("calc-button");

Array.from(buttons).forEach(addEventListenerToButton);
