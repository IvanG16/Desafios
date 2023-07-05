function addEventListenerToButton(element){
    element.addEventListener('click', function(){
        console.log(element.getAttribute("data-button-value"))
    })
}
const buttons = document.getElementsByClassName("calc-button");

Array.from(buttons).forEach(addEventListenerToButton);
