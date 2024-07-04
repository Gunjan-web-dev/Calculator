const display=document.getElementById("display")

function appendToDisplay(value){
    display.value += value;
}
function clearDisplay(){
    display.value="";
}

function calculate(){
    if(display.value===""){
        alert("Please enter a valid input!!")
        display.value="0"
    }

        let result = eval(display.value);
        display.value = result;
}