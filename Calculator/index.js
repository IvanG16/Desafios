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

            case "delete":
                del();
            break;
            

            case "operator":

                numbers[1]=value;
                if(numbers.length > 3){
                    operation(numbers);
                }
                parenthesis(numbers);

            break;

            case "number":

                numbers[1] ? numbers[2]+=value : numbers[0]+=value;
                parenthesis(numbers);
            break;
            
            case "equal":

                parenthesis(numbers);
                operation(numbers);
                document.getElementById("inputs").innerHTML = numbers[0];
                numbers[2]='';
                
            break;

            case "number-sign":
                if(numbers[1]){
                    numbers[2]= numbers[2]* -1;
                    document.getElementById("inputs").innerHTML = '('+numbers[2]+')';
                }else{
                    numbers[0]= numbers[0]* -1;
                    document.getElementById("inputs").innerHTML = numbers[0];
                }
            break;
        }
    })
}

function operation(numbers){

    switch(numbers[1]){

        case "+":
            numbers[0]= Number(numbers[0]) + Number(numbers[2]);
        break;

        case "-":
            numbers[0]= numbers[0] - numbers[2];
        break;

        case "x":
            numbers[0]= numbers[0] * numbers[2];
        break;

        case "/":
            numbers[0]= numbers[0] / numbers[2];
        break;

    }
}

function clear() {
    value='';
    numbers =['','',''];
    
}

function del(){
    numbers[0]= numbers[0].toString();
    numbers[0]= numbers[0].slice(0, -1);
    document.getElementById("old-inputs").innerHTML = numbers[0];
    document.getElementById("inputs").innerHTML = '';
}

function parenthesis(){
    if(numbers[2].toString().includes('-')){
        document.getElementById("old-inputs").innerHTML = numbers[0] + numbers[1] + '('+numbers[2]+')';
    }else{
        document.getElementById("old-inputs").innerHTML = numbers[0] + numbers[1] + numbers[2];
    }
}

let numbers=['','',''];

const buttons = document.getElementsByClassName("calc-button");

Array.from(buttons).forEach(addEventListenerToButton);
