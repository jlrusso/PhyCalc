// calculator js
var inputField = document.getElementById('input-field');
var radiansBtn = document.getElementById('radians-btn');
var degreesBtn = document.getElementById('degrees-btn');
var squareBtn = document.getElementById('square-btn');
var squareRootBtn = document.getElementById("square-root-btn");
var nthPowerBtn = document.getElementById('nth-power');
var tenPowerBtn = document.getElementById("ten-power");
var calculateBtn = document.getElementById('calculator-calculate-btn');
var clearBtn = document.getElementById('calculator-clear-btn');
var deleteBtn = document.getElementById('delete-btn');
var sigFigField = document.getElementById("sig-fig-field");

inputField.addEventListener('keydown', keyPush);
squareBtn.addEventListener('click',squareValue);
squareRootBtn.addEventListener('click', squareRoot);
nthPowerBtn.addEventListener('click', toNthPower);
tenPowerBtn.addEventListener('click', tenToTheNthPower);
radiansBtn.addEventListener('click', radianMode);
degreesBtn.addEventListener('click', degreesMode);
calculateBtn.addEventListener('click', calculateInput);
clearBtn.addEventListener('click', clearInputs);
deleteBtn.addEventListener('click', deleteInput);

//enable multiplication of input value by 10 to the nth power
function tenToTheNthPower(){
    inputField.value += "*(10^";
}

//loads page in degrees mode as the default
window.onload = degreesMode();

//puts calculator in degrees mode
function degreesMode(){
    inputField.value = "";
    document.getElementById('degrees-indicator').classList.add('mode-indicator');
    degrees = "Yes";
    if (document.getElementById('radians-indicator').classList.contains('mode-indicator')) {
         document.getElementById('radians-indicator').classList.remove('mode-indicator');
    }
}

//puts calculator in radians mode
function radianMode(){
    inputField.value = "";
    degrees = "No";
    document.getElementById('radians-indicator').classList.add('mode-indicator');
    if (document.getElementById('degrees-indicator').classList.contains('mode-indicator')) {
         document.getElementById('degrees-indicator').classList.remove('mode-indicator');
    }
}

//calculate or alter delete value based on key press
function keyPush(event){
    switch(event.keyCode){
        case 13:
        calculateInput();
        break;
        case 46:
        deleteInput();
        break;
    }
}

//event listener for regular btns to addToField()
var regBtns = document.getElementsByClassName('reg-btn');
for (var i = 0; i < regBtns.length; i++){
    regBtns[i].addEventListener('click', addToField);
}

//event listener for trig btns to trig()
var trigBtns = document.getElementsByClassName('trig-btn');
for (var i = 0; i < trigBtns.length; i++){
    trigBtns[i].addEventListener('click', trig);
}
//add character to field, dependent on presence of "=" sign
function addToField(){
    switch(true) {
        case (inputField.value.indexOf('=') > -1):
        inputField.value = "" + this.textContent;
        break;
        default:
        inputField.value += this.textContent;
    }
}
//square the current value inside input field
function squareValue(){
    inputField.value += "^2";
}
function squareRoot(){
    inputField.value += "(√";
}
function toNthPower(){
    inputField.value += "^";
}
function trig(){
    if (inputField.value.indexOf("=") > -1){
        inputField.value = this.textContent + "(";
    } else {
        inputField.value += this.textContent + "(";
    }

}
var trigs = ["sin(", "cos(", "tan(", "sin-1(", "cos-1(", "tan-1("],
    tempTrigs = ["sint(", "cost(", "tant(", "sin-1t(", "cos-1t(", "tan-1t("],
    degTrigs = ["Math.sin((Math.PI/180)*", "Math.cos((Math.PI/180)*", "Math.tan((Math.PI/180)*", "(180/Math.PI)*Math.asin(", "(180/Math.PI)*Math.acos(", "(180/Math.PI)*Math.atan"],
    radTrigs = ["Math.sin(", "Math.cos(", "Math.tan(", "Math.asin(", "Math.acos(", "Math.atan("];
//evaluate the expression inside input field
function calculateInput(){
    //change pi symbol to number value before evaluating
    while (inputField.value.indexOf('π') > -1){
      console.log("pi");
        inputField.value = inputField.value.replace('π', Math.PI);
    }
    if (inputField.value.indexOf('^2') > -1){
        inputField.value = inputField.value.replace('^2', "**2");
    } else if (inputField.value.indexOf('^') > -1){
        inputField.value = inputField.value.replace('^', "**");
        //evaluate square root if root symbol and parentheses around it are present
    } else if (inputField.value.indexOf('(√') > -1) {
        while (inputField.value.indexOf('(√') > -1){
            inputField.value = inputField.value.replace('(√', 'Math.sqrt(');
        }
    }
    var postTrigValue = inputField.value.substring( inputField.value.indexOf('(') + 1, inputField.value.length);
    //change from default radians to degrees mode
    if(degrees === "Yes"){
        //change all trig functions in input field to functional ones: Math.trig();
        for(let i = 0; i < trigs.length; i++){
           if(inputField.value.indexOf(trigs[i]) > -1){
               while (inputField.value.indexOf(trigs[i]) > -1){
                   inputField.value = inputField.value.replace(trigs[i], tempTrigs[i]);
               }
               inputField.value = inputField.value.replace(tempTrigs[i], degTrigs[i]);
           }
       }

        //if input field has an = sign, then clear input field before anything else
        if(inputField.value.indexOf("=") > -1){
            alert(inputField.value);
            inputField.value = "";
        }
        //block below changes value precision based on value length
        else if(inputField.value.toString().length > 11){
            inputField.value = "= " + eval(inputField.value).toPrecision(sigFigField.value || 11);
        } else {
            inputField.value = "= " + eval(inputField.value).toPrecision(sigFigField.value || inputField.value.toString().length);
        }
    } else { //if radians === "Yes" and degrees === "No"
        switch(true){
            case (inputField.value.indexOf('=') > -1):
                alert(inputField.value);
                inputField.value = "";
            break;
        }
        for(let i = 0; i < trigs.length; i++){
            while (inputField.value.indexOf(trigs[i]) > -1){
                inputField.value = inputField.value.replace(trigs[i], tempTrigs[i]);
            }
            inputField.value = inputField.value.replace(tempTrigs[i], radTrigs[i]);
        }
        if(inputField.value.toString().length > 11){
            inputField.value = "= " + eval(inputField.value).toPrecision(sigFigField.value || 11);
        } else {
            inputField.value = "= " + eval(inputField.value).toPrecision(sigFigField || inputField.value.toString().length);
        }
    }
    sigFigField.value = "";
}
//clear input field
function clearInputs(){
    /*helo*/
    inputField.value = "";
    sigFigField.value = "";
}		//deletes one input character at a time
function deleteInput(){
    var valMinusOne = inputField.value.slice(0, -1);
    inputField.value = valMinusOne;
}

/*--- Show Tool on some Calculator Btn mouseover ---*/
var calculatorTooltip = document.getElementById("calculator-tooltip");
calculatorTooltip.textContent = " ";
var piBtns = document.getElementsByClassName("pi-btn");

squareRootBtn.addEventListener("mouseover", function(){
  calculatorTooltip.textContent = "Closing ')' required";
  calculatorTooltip.style.opacity = "1";
})

squareRootBtn.addEventListener("mouseout", function(){
  calculatorTooltip.style.opacity = "0";
})

for(let i = 0; i < piBtns.length; i++){
  piBtns[i].addEventListener("mouseover", function(){
    calculatorTooltip.textContent = "Use '*' to multiply by π";
    calculatorTooltip.style.opacity = "1";
  })

  piBtns[i].addEventListener("mouseout", function(){
    calculatorTooltip.style.opacity = "0";
  })
}


for(let i = 0; i < trigBtns.length; i++){
  trigBtns[i].addEventListener("mouseover", function(){
    calculatorTooltip.textContent = "Closing ')' required";
    calculatorTooltip.style.opacity = "1";
  })
  trigBtns[i].addEventListener("mouseout", function(){
    calculatorTooltip.style.opacity = "0";
  })
}

tenPowerBtn.addEventListener("mouseover", function(){
  calculatorTooltip.textContent = "Closing ')' required";
  calculatorTooltip.style.opacity = "1";
})
tenPowerBtn.addEventListener("mouseout", function(){
  calculatorTooltip.style.opacity = "0";
})

var sigFigField = document.getElementById("sig-fig-field");
sigFigField.addEventListener("mouseover", function(){
  calculatorTooltip.textContent = "# of significant digits";
  calculatorTooltip.style.opacity = "1";
})
sigFigField.addEventListener("mouseout", function(){
  calculatorTooltip.style.opacity = "0";
})
