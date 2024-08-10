const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "ERROR";
    }
}

function clearDisplay(){
    display.value = "";
}

function calculatePI(){
    display.value += Math.PI;
}

function round(){
    display.value = Math.round(100*display.value)/100;
}