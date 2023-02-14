function getInputValueInTextByID(inputID){
    let inputField =  document.getElementById(inputID);
    let inputValue =  inputField.value;

    return inputValue;
}

function getInputValueInNumberByID(inputID){
    let inputField =  document.getElementById(inputID);
    let inputValue = parseFloat(inputField.value);

    inputField.value = "";

    return inputValue;
}

function getElementValueInTextByID(inputID){
    let inputField =  document.getElementById(inputID);
    let inputValue =  inputField.innerText;

    inputField.value = "";

    return inputValue;
}

function getElementValueInNumberByID(inputID){
    let inputField =  document.getElementById(inputID);
    let inputValue =  parseFloat(inputField.innerText);

    inputField.value = "";

    return inputValue;
}

function setElementValueByID(id , values){
    let element  = document.getElementById(id);
    element.innerText = values;
}

function setInputValueByID(id , values){
    let element  = document.getElementById(id);
    element.value = values;
}

