// Declare Global variable to use Multiple Time These variable

let randomNumberGenerate = document.getElementById('randomNumber');
let givenNumberValue = document.getElementById('inputField');
let submitButtonClick = document.getElementById('submitButton');
let matchResult = document.getElementById('match');
let notMatchResult = document.getElementById('notMatch');

// Random Pin Generate

function pinGenerate(){   
    let randomNumber = Math.floor(1000+ Math.random()*9000);
    randomNumberGenerate.value = randomNumber;
    document.getElementById('number-left').innerText = 3;
    notMatchResult.style.display = 'none';
    submitButtonClick.disabled = false;
}

// Input Value Display in input Field

function displayNumber(num){
    givenNumberValue.value += num;
}

// Clear all value

function clearAllValue(){
    givenNumberValue.value = '';
}

// Clear One Value

function backspace(){
    let backspaceInput = givenNumberValue;
    let backspaceInputValue = backspaceInput.value;
    if(backspaceInputValue >= 0){
        backspaceInputValue = backspaceInputValue.substr(0, backspaceInputValue.length-1);
        backspaceInput.value = backspaceInputValue;
    }
}

// Pin Match Or Not Match Check

submitButtonClick.addEventListener('click', function(){
    let changeNumber = document.getElementById('number-left').innerText;
    let inputNumber = givenNumberValue.value;
    
    // Check Invalid Input
    if(inputNumber.length != 4 || isNaN(inputNumber) || inputNumber < 0){
        alert("Please Enter Four Digit Positive Number Pin");
    }

    else{

        // Check Match Input
        if(randomNumberGenerate.value == givenNumberValue.value){
            
            let area = document.getElementsByClassName('half-width');
            for (let i = 0; i < area.length; i++) {
                const element = area[i];
                element.style.display = 'none';
            }
            matchResult.style.display = 'block';
            notMatchResult.style.display = 'none';
            givenNumberValue.value = '';
            randomNumberGenerate.value = '';
        }
        // For Not Match Input
        else{

            notMatchResult.style.display = 'block';
            matchResult.style.display = 'none';
            changeNumber--;
            document.getElementById('number-left').innerText = changeNumber;
            givenNumberValue.value = '';
            if(changeNumber == 0){
                submitButtonClick.disabled = 'true';
                randomNumberGenerate.value = '';
            }
        }
    }

})