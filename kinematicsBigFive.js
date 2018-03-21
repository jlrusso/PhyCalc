/*--- Open and Close Modal Accordion Panels ---*/
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  	acc[i].onclick = function() {
    	this.classList.toggle("active");
    	var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
}
/*--- Open and Close Accordion Panels END ---*/

/*--- Equation Slides and Control ---*/
var innerImageContainer = document.getElementById("inner-image-container"),
    slides = document.getElementsByClassName("slide"),
    currentSlideIndex = 0,
    width = 100,
    prevBtn = document.getElementById("prev-slide-btn"),
    nextBtn = document.getElementById("next-slide-btn"),
    slideBars = document.getElementsByClassName("slide-bar");

prevBtn.addEventListener("click", goToPrevSlide);
nextBtn.addEventListener("click", goToNextSlide);

for(let i = 0; i < slideBars.length; i++){
	slideBars[i].addEventListener("click", function(){
		currentSlideIndex = i;
		switchToSlide();
	})
}

switchToSlide();

function switchToSlide(){
	for(let i = 0; i < slideBars.length; i++){
		if(slideBars[i].classList.contains("active-indicator")){
			slideBars[i].classList.remove("active-indicator");
		}
	}
	innerImageContainer.style.left = -width * currentSlideIndex + "%";
	slideBars[currentSlideIndex].classList.add("active-indicator");
}

function goToPrevSlide(){
	currentSlideIndex--;
	if(currentSlideIndex < 0){
		currentSlideIndex = slides.length - 1;
	}
	switchToSlide();
}

function goToNextSlide(){
	currentSlideIndex++;
	if(currentSlideIndex >= slides.length){
		currentSlideIndex = 0;
	}
	switchToSlide();
}
/*--- End of Equation Slides and Control ---*/

var solveForBtns = document.getElementsByClassName("solve-btns"),
    solveVelocity = document.getElementById("solve-velocity"),
    solveInitialVelocity = document.getElementById("solve-initial-velocity"),
    solveFinalVelocity = document.getElementById("solve-final-velocity"),
    solveInitialPosition = document.getElementById("solve-initial-position"),
    solveFinalPosition = document.getElementById("solve-final-position"),
    solveTime = document.getElementById("solve-time"),
    solveAcceleration  = document.getElementById("solve-acceleration"),
    solveDisplacement = document.getElementById("solve-displacement");

var givenBtns = document.getElementsByClassName("given-btns"),
  	givenVelocity = document.getElementById("given-velocity"),
  	givenInitialVelocity = document.getElementById("given-initial-velocity"),
  	givenFinalVelocity = document.getElementById("given-final-velocity"),
  	givenInitialPosition = document.getElementById("given-initial-position"),
  	givenFinalPosition = document.getElementById("given-final-position"),
  	givenTime = document.getElementById("given-time"),
  	givenAcceleration = document.getElementById("given-acceleration"),
  	acclUnits = document.getElementsByClassName("accl-units")[0].textContent;
  	givenDisplacement = document.getElementById("given-displacement");

var unitBtns = document.getElementsByClassName("unit-btn"),
  	meterBtn = document.getElementById("meter-radio-btn"),
  	mileBtn = document.getElementById("mile-radio-btn"),
  	feetBtn = document.getElementById("feet-radio-btn"),
  	kilometerBtn = document.getElementById("kilometer-radio-btn");

var chosenUnit;
for(let i = 0; i < unitBtns.length; i++){
	unitBtns[i].addEventListener("click", function(){
		chosenUnit = unitBtns[i].getAttribute("units");
	});
}

var timeBtns = document.getElementsByClassName("time-units"),
  	secondBtn = document.getElementById("sec-radio-btn"),
  	minutesBtn = document.getElementById("min-radio-btn"),
  	hourBtn = document.getElementById("hour-radio-btn"),
  	dayBtn = document.getElementById("day-radio-btn");

var chosenTimeUnit;
var perTimeUnit;
for(let i = 0; i < timeBtns.length; i++){
	  timeBtns[i].addEventListener("click", function(){
		perTimeUnit = "/" + timeBtns[i].getAttribute("units");
		chosenTimeUnit = timeBtns[i].getAttribute("units");
	});
}

var inputFields = document.getElementsByClassName("form-control"),
  	displacementField = document.getElementById("displacement-field"),
  	velocityField = document.getElementById("velocity-field"),
  	initialVelocityField = document.getElementById("initial-velocity-field"),
  	finalVelocityField = document.getElementById("final-velocity-field"),
  	initialPositionField = document.getElementById("initial-position-field"),
  	finalPositionField = document.getElementById("final-position-field"),
  	timeField = document.getElementById("time-field"),
  	accelerationField = document.getElementById("acceleration-field");

var calculateBtn = document.getElementById("calculate-btn"),
	  clearBtn = document.getElementById("clear-btn");

calculateBtn.addEventListener("click", calculateFunction);
clearBtn.addEventListener("click", clearFunction);

/*--- Clear Solve Radio Btns on Every Given Radio Click ---*/
for(let i = 0; i < givenBtns.length; i++){
	givenBtns[i].addEventListener("click", function(){
    uncheckSolveBtns();
    resetInputFields();
  });
}

function resetInputFields(){
  for(let i = 0; i < inputFields.length; i++){
    if(inputFields[i].disabled){
      inputFields[i].disabled = false;
    }
    if(inputFields[i].classList.contains("yellow-outline")){
      inputFields[i].classList.remove("yellow-outline");
    }
  }
}

function uncheckSolveBtns(){
  for(let i = 0; i < solveForBtns.length; i++){
    if(solveForBtns[i].checked){
      solveForBtns[i].checked = false;
    }
  }
}

/*--- end of above ---*/

for(let i = 0; i < solveForBtns.length; i++){
	solveForBtns[i].addEventListener("click", solveFunction);
	solveForBtns[i].addEventListener("click", solveToField);
}

var equation;
function solveFunction(){
	switch(true){
		case (givenFinalVelocity.checked && givenInitialVelocity.checked && givenAcceleration.checked && solveDisplacement.checked) ||
			 (givenFinalVelocity.checked && givenInitialVelocity.checked && givenDisplacement.checked && solveAcceleration.checked) ||
			 (givenFinalVelocity.checked && givenAcceleration.checked && givenDisplacement.checked && solveInitialVelocity.checked) ||
			 (givenInitialVelocity.checked && givenAcceleration.checked && givenDisplacement.checked && solveFinalVelocity.checked):
			 equation = 4;
			 currentSlideIndex = 4;
			 switchToSlide();
		break;
		case (givenFinalPosition.checked && givenInitialPosition.checked && givenFinalVelocity.checked && givenTime.checked && solveAcceleration.checked) ||
			 (givenFinalPosition.checked && givenInitialPosition.checked && givenFinalVelocity.checked && givenAcceleration.checked && solveTime.checked) ||
			 (givenFinalPosition.checked && givenInitialPosition.checked && givenAcceleration.checked && givenTime.checked && solveFinalVelocity.checked) ||
			 (givenFinalPosition.checked && givenFinalVelocity.checked && givenAcceleration.checked && givenTime.checked && solveInitialPosition.checked) ||
			 (givenInitialPosition.checked && givenFinalVelocity.checked && givenTime.checked && givenAcceleration.checked && solveFinalPosition.checked):
			 equation = 3;
			 currentSlideIndex = 3;
			 switchToSlide();
		break;
		case (givenFinalPosition.checked && givenInitialPosition.checked && givenInitialVelocity.checked && givenTime.checked && solveAcceleration.checked) ||
			 (givenFinalPosition.checked && givenInitialPosition.checked && givenInitialVelocity.checked && givenAcceleration.checked && solveTime.checked) ||
			 (givenFinalPosition.checked && givenInitialVelocity.checked && givenTime.checked && givenAcceleration.checked && solveInitialPosition.checked) ||
			 (givenFinalPosition.checked && givenInitialPosition.checked && givenTime.checked && givenAcceleration.checked && solveInitialVelocity.checked) ||
			 (givenInitialPosition.checked && givenInitialVelocity.checked && givenTime.checked && givenAcceleration.checked && solveFinalPosition.checked):
			 equation = 2;
			 currentSlideIndex = 2;
			 switchToSlide();
		break;
		case (givenFinalVelocity.checked && givenInitialVelocity.checked && givenAcceleration.checked && solveTime.checked) ||
		 	 (givenFinalVelocity.checked && givenInitialVelocity.checked && givenTime.checked && solveAcceleration.checked) ||
			 (givenFinalVelocity.checked && givenAcceleration.checked && givenTime.checked && solveInitialVelocity.checked) ||
			 (givenInitialVelocity.checked && givenAcceleration.checked && givenTime.checked && solveFinalVelocity.checked):
			 equation = 1;
			 currentSlideIndex = 1;
			 switchToSlide();
		break;
		case (givenDisplacement.checked && givenTime.checked && solveVelocity.checked) ||
			 (givenDisplacement.checked && givenVelocity.checked && solveTime.checked) ||
			 (givenVelocity.checked && givenTime.checked && solveDisplacement.checked):
			 equation = 0
			 currentSlideIndex = 0;
			 switchToSlide();
		break;
	}
}

//alters input fields based on checkboxes checked and radio btns clicked
function solveToField(){
	resetInputFields();
	switch(true){
		case (equation === 0):
			initialPositionField.disabled = true;
			finalPositionField.disabled = true;
			initialVelocityField.disabled = true;
			finalVelocityField.disabled = true;
			accelerationField.disabled = true;
			function forEquationZero(){
				switch(true){
					case (solveDisplacement.checked):
						displacementField.classList.add("yellow-outline");
						displacementField.disabled = true;
					break;
					case (solveVelocity.checked):
						velocityField.classList.add("yellow-outline");
						velocityField.disabled = true;
					break;
					case (solveTime.checked):
						timeField.classList.add("yellow-outline");
						timeField.disabled = true;
					break;
				}
			}
			forEquationZero();
		break;
		case (equation === 1):
			finalPositionField.disabled = true;
			initialPositionField.disabled = true;
			displacementField.disabled = true;
			velocityField.disabled = true;
			function forEquationOne(){
				switch(true){
					case (solveFinalVelocity.checked):
						finalVelocityField.classList.add("yellow-outline");
						finalVelocityField.disabled = true;
					break;
					case (solveInitialVelocity.checked):
						initialVelocityField.classList.add("yellow-outline");
						initialVelocityField.disabled = true;
					break;
					case (solveAcceleration.checked):
						accelerationField.classList.add("yellow-outline");
						accelerationField.disabled = true;
					break;
					case (solveTime.checked):
						timeField.classList.add("yellow-outline");
						timeField.disabled = true;
					break;
				}
			}
			forEquationOne();
		break;
		case (equation === 2):
			displacementField.disabled = true;
			finalVelocityField.disabled = true;
			velocityField.disabled = true;
			function forEquationTwo(){
				switch(true){
					case (solveFinalPosition.checked):
						finalPositionField.classList.add("yellow-outline");
						finalPositionField.disabled = true;
					break;
					case (solveInitialPosition.checked):
						initialPositionField.classList.add("yellow-outline");
						initialPositionField.disabled = true;
					break;
					case (solveInitialVelocity.checked):
						initialVelocityField.classList.add("yellow-outline");
						initialVelocityField.disabled = true;
					break;
					case (solveTime.checked):
						timeField.classList.add("yellow-outline");
						timeField.disabled = true;
					break;
					case (solveAcceleration.checked):
						accelerationField.classList.add("yellow-outline");
						accelerationField.disabled = true;
					break;
				}
			}
			forEquationTwo();
		break;
		case (equation === 3):
			displacementField.disabled = true;
			initialVelocityField.disabled = true;
			velocityField.disabled = true;
			function forEquationThree(){
				switch(true){
					case (solveFinalPosition.checked):
						finalPositionField.classList.add("yellow-outline");
						finalPositionField.disabled = true;
					break;
					case (solveInitialPosition.checked):
						initialPositionField.classList.add("yellow-outline");
						initialPositionField.disabled = true;
					break;
					case (solveFinalVelocity.checked):
						finalVelocityField.classList.add("yellow-outline");
						finalVelocityField.disabled = true;
					break;
					case (solveTime.checked):
						timeField.classList.add("yellow-outline");
						timeField.disabled = true;
					break;
					case (solveAcceleration.checked):
						accelerationField.classList.add("yellow-outline");
						accelerationField.disabled = true;
					break;
				}
			}
			forEquationThree();
		break;
		case (equation === 4):
			initialPositionField.disabled = true;
			finalPositionField.disabled = true;
			velocityField.disabled = true;
			timeField.disabled = true;
			function forEquationFour(){
				switch(true){
					case (solveInitialVelocity.checked):
						initialVelocityField.classList.add("yellow-outline");
						initialVelocityField.disabled = true;
					break;
					case (solveFinalVelocity.checked):
						finalVelocityField.classList.add("yellow-outline");
						finalVelocityField.disabled = true;
					break;
					case (solveAcceleration.checked):
						accelerationField.classList.add("yellow-outline");
						accelerationField.disabled = true;
					break;
					case (solveDisplacement.checked):
						displacementField.classList.add("yellow-outline");
						displacementField.disabled = true;
					break;
				}
			}
			forEquationFour();
		break;
	}
}

function calculateFunction(){
	switch(true){
		case (givenFinalVelocity.checked && givenInitialVelocity.checked && givenAcceleration.checked && solveDisplacement.checked): {
			displacementField.type = "text";
			let tempDispValue = (0.5 * (Math.pow(finalVelocityField.value, 2) - Math.pow(initialVelocityField.value, 2))) / accelerationField.value;
			if(tempDispValue.toString().length > 7){
				displacementField.value = tempDispValue.toPrecision(7) + " " + (chosenUnit || " ");
			} else {
				displacementField.value = tempDispValue.toPrecision(tempDispValue.toString().length) + " " + (chosenUnit || " ");
			}
		}
		break;

		case (givenFinalVelocity.checked && givenInitialVelocity.checked && givenDisplacement.checked && solveAcceleration.checked): {
			accelerationField.type = "text";
			let tempAccelerationValue = (0.5 * (Math.pow(finalVelocityField.value, 2) - Math.pow(initialVelocityField.value, 2))) / displacementField.value;
			if(tempAccelerationValue.toString().length > 7){
				accelerationField.value = tempAccelerationValue.toPrecision(7) + " " + (chosenUnit || " ") + (perTimeUnit || " ");
			} else {
				accelerationField.value = tempAccelerationValue.toPrecision(tempAccelerationValue.toString().length) + " " + (chosenUnit || " ") + (perTimeUnit || " ");
			}
		}
		break;

		case (givenFinalVelocity.checked && givenAcceleration.checked && givenDisplacement.checked && solveInitialVelocity.checked): {
			initialVelocityField.type = "text";
			let tempInitialVelocityValue = Math.sqrt(Math.pow(finalVelocityField.value, 2) - (2 * accelerationField.value * displacementField.value));
			if(tempInitialVelocityValue.toString().length > 7){
				initialVelocityField.value = tempInitialVelocityValue.toPrecision(7) + " " + (chosenUnit || " ");
			} else {
				initialVelocityField.value = tempInitialVelocityValue.toPrecision(tempInitialVelocityValue.toString().length) + " " + (chosenUnit || " ");
			}
		}
		break;

		case (givenInitialVelocity.checked && givenAcceleration.checked && givenDisplacement.checked && solveFinalVelocity.checked): {
			finalVelocityField.type = "text";
			let tempFinalVelocityValue = Math.pow(initialVelocityField.value, 2) + parseFloat(2 * accelerationField.value * displacementField.value);
			if(tempFinalVelocityValue.toString().length > 7){
				finalVelocityField.value = tempFinalVelocityValue.toPrecision(7) + " " + (chosenUnit || " ") + (perTimeUnit || " ");
			} else {
				finalVelocityField.value = tempFinalVelocityValue.toPrecision(tempFinalVelocityValue.toString().length) + " " + (chosenUnit || " ") + (perTimeUnit || " ");
			}
		}
		break;

		case (givenFinalPosition.checked && givenInitialPosition.checked && givenFinalVelocity.checked && givenTime.checked && solveAcceleration.checked): {
			accelerationField.type = "text";
			let tempAccelerationValue = 2 * (finalPositionField.value - initialPositionField.value - (finalVelocityField.value * timeField.value)) / Math.pow(timeField.value, 2);
			if(tempAccelerationValue.toString().length > 7) {
				accelerationField.value = tempAccelerationValue.toPrecision(7) + " " + (chosenUnit || " ") + (acclUnits || " ");
			} else {
				accelerationField.value = tempAccelerationValue.toPrecision(tempAccelerationValue.toString().length) + " " + (chosenUnit || " ") + (acclUnits || " ");
			}
		}
		break;

		case (givenFinalPosition.checked && givenInitialPosition.checked && givenFinalVelocity.checked && givenAcceleration.checked && solveTime.checked): {
			timeField.type = "text";
			let tempTimeValue = Math.sqrt(2 * (finalPositionField.value - initialPositionField.value - (finalVelocityField.value * timeField.value)) / accelerationField.value);
			if(tempTimeValue.toString().length > 7){
				timeField.value = tempTimeValue.toPrecision(7) + " " + (chosenTimeUnit || " ");
			} else {
				timeField.value = tempTimeValue.toPrecision(tempTimeValue.toString().length) + " " + (chosenTimeUnit || " ");
			}
		}
		break;

		case (givenFinalPosition.checked && givenInitialPosition.checked && givenAcceleration.checked && givenTime.checked && solveFinalVelocity.checked): {
			finalVelocityField.type = "text";
			let tempFinalVelocityValue = (finalPositionField.value - initialPositionField.value + parseFloat(0.5 * accelerationField.value * Math.pow(timeField.value, 2))) / timeField.value;
			if(tempFinalVelocityValue.toString().length > 7) {
				finalVelocityField.value = tempFinalVelocityValue.toPrecision(7) + " " + (chosenUnit || " ") + (perTimeUnit || " ");
			} else {
				finalVelocityField.value = tempFinalVelocityValue.toPrecision(tempFinalVelocityValue.toString().length) + " " + (chosenUnit || " ") + (perTimeUnit || " ");
			}
		}
		break;

		case (givenFinalPosition.checked && givenFinalVelocity.checked && givenAcceleration.checked && givenTime.checked && solveInitialPosition.checked): {
			initialPositionField.type = "text";
			let tempInitialPositionValue = finalPositionField.value - (finalVelocityField.value * timeField.value) + parseFloat(0.5 * accelerationField.value * Math.pow(timeField.value, 2));
			if(tempInitialPositionValue.toString().length > 7){
				initialPositionField.value = tempInitialPositionValue.toPrecision(7) + " " + (chosenUnit || " ");
			} else {
				initialPositionField.value = tempInitialPositionValue.toPrecision(tempInitialPositionValue.toString().length) + " " + (chosenUnit || " ");
			}
		}
		break;

		case (givenInitialPosition.checked && givenFinalVelocity.checked && givenTime.checked && givenAcceleration.checked && solveFinalPosition.checked): {
			finalPositionField.type = "text";
			let tempFinalPositionValue = parseFloat(initialPositionField.value) + parseFloat(finalVelocityField.value * timeField.value) - (0.5 * accelerationField.value * Math.pow(timeField.value, 2));
			if(tempFinalPositionValue.toString().length > 7){
				finalPositionField.value = tempFinalPositionValue.toPrecision(7) + " " + (chosenUnit || " ");
			} else {
				finalPositionField.value = tempFinalPositionValue.toPrecision(tempFinalPositionValue.toString().length) + " " + (chosenUnit || " ");
			}
		}
		break;

		case (givenFinalPosition.checked && givenInitialPosition.checked && givenInitialVelocity.checked && givenTime.checked && slveAcceleration.checked): {
			accelerationField.type = "text";
			let tempAccelerationValue = (2 * (finalPositionField.value - initialPositionField.value - (initialVelocityField.value * timeField.value))) / Math.sqrt(timeField.value, 2);
			if(tempAccelerationValue.toString().length > 7){
				accelerationField.value = tempAccelerationValue.toPrecision(7) + " " + (chosenUnit || " ") + (acclUnits || " ");
			} else {
				accelerationField.value = tempAccelerationValue.toPrecision(tempAccelerationValue.toString().length) + " " + (chosenUnit || " ") + (acclUnits || " ");
			}
		}
		break;

		case (givenFinalPosition.checked && givenInitialPosition.checked && givenInitialVelocity.checked && givenAcceleration.checked && solveTime.checked): {
			timeField.type = "text";
			let tempTimeValue = Math.sqrt(2*(finalPositionField.value - initialPositionField.value - (initialVelocityField.value * timeField.value)) / accelerationField.value);
			if(tempTimeValue.toString().length > 7){
				timeField.value = tempTimeValue.toPrecision(7) + " " + chosenTimeUnit;
			} else {
				timeField.value = tempTimeValue.toPrecision(tempTimeValue.toString().length) + " " + chosenTimeUnit;
			}
		}
		break;

		case (givenFinalPosition.checked && givenInitialVelocity.checked && givenTime.checked && givenAcceleration.checked && solveInitialPosition.checked): {
			initialPositionField.type = "text";
			let tempInitialPositionValue = finalPositionField.value - (initialVelocityField.value * timeField.value) - (0.5) * (accelerationField.value) * (Math.pow(timeField.value, 2));
			if(tempInitialPositionValue.toString().length > 7){
				initialPositionField.value = tempInitialPositionValue.toPrecision(7) + " " + chosenUnit;
			} else {
				initialPositionField.value = tempInitialPositionValue.toPrecision(tempInitialPositionValue.toString().length) + " " + chosenUnit;
			}
		}
		break;

		case (givenFinalPosition.checked && givenInitialPosition.checked && givenTime.checked && givenAcceleration.checked && solveInitialVelocity.checked): {
			initialVelocityField.type = "text";
			let tempInitialVelocityValue = (finalPositionField.value - initialPositionField.value  - ((0.5) * (accelerationField.value * Math.pow(timeField.value, 2)))) / timeField.value;
			if(tempInitialVelocityValue.toString().length > 7){
				initialVelocityField.value = tempInitialVelocityValue.toPrecision(7) + " " + (chosenUnit || " ") + (perTimeUnit || " ");
			} else {
				initialVelocityField.value = tempInitialVelocityValue.toPrecision(tempInitialVelocityValue.toString().length) + " " + (chosenUnit || " ") + (perTimeUnit || " ");
			}
		}
		break;

		case (givenInitialPosition.checked && givenInitialVelocity.checked && givenTime.checked && givenAcceleration.checked && solveFinalPosition.checked): {
			finalPositionField.type = "text";
			let tempFinalPositionValue = parseFloat(initialPositionField.value) + parseFloat(initialVelocityField.value * timeField.value) + parseFloat(0.5 * accelerationField.value * (Math.pow(timeField.value, 2)));
			if(tempFinalPositionValue.toString().length > 7){
				finalPositionField.value = tempFinalPositionValue.toPrecision(7) + " " + (chosenUnit || " ");
			} else {
				finalPositionField.value = tempFinalPositionValue.toPrecision(tempFinalPositionValue.toString().length) + " " + (chosenUnit || " ");
			}
		}
		break;

		case (givenFinalVelocity.checked && givenInitialVelocity.checked && givenAcceleration.checked && solveTime.checked): {
			timeField.type = "text";
			let tempTimeValue = (finalVelocityField.value - initialVelocityField.value) / accelerationField.value;
			if(tempTimeValue.toString().length > 7){
				timeField.value = tempTimeValue.toPrecision(7) + " " + chosenTimeUnit;
			} else {
				timeField.value = tempTimeValue.toPrecision(tempTimeValue.toString().length) + " " + chosenTimeUnit;
			}
		}
		break;

		case (givenFinalVelocity.checked && givenInitialVelocity.checked && givenTime.checked && solveAcceleration.checked): {
			accelerationField.type = "text";
			let tempAccelerationValue = (finalVelocityField.value - initialVelocityField.value) / timeField.value;
			if(tempAccelerationValue.toString().length > 7){
				accelerationField.value = tempAccelerationValue.toPrecision(7) + " " + chosenUnit + acclUnits;
			} else {
				accelerationField.value = tempAccelerationValue.toPrecision(tempAccelerationValue.toString().length) + " " + chosenUnit + acclUnits;
			}
		}
		break;

		case (givenFinalVelocity.checked && givenAcceleration.checked && givenTime.checked && solveInitialVelocity.checked): {
			initialVelocityField.type = "text";
			let tempInitialVelocityValue = (finalVelocityField.value) - (accelerationField.value * timeField.value);
			if(tempInitialVelocityValue.toString().length > 7){
				initialVelocityField.value = tempInitialVelocityValue.toPrecision(7) + " " + (chosenUnit || " ") + (perTimeUnit || " ");
			} else {
				initialVelocityField.value = tempInitialVelocityValue.toPrecision(tempInitialVelocityValue.toString().length) + " " + (chosenUnit || " ") + (perTimeUnit || " ");
			}
		}
		break;

		case (givenInitialVelocity.checked && givenAcceleration.checked && givenTime.checked && solveFinalVelocity.checked): {
			finalVelocityField.type = "text";
			let tempFinalVelocityValue = parseFloat(initialVelocityField.value) + parseFloat(accelerationField.value * timeField.value);
			if(tempFinalVelocityValue.toString().length > 7){
				finalVelocityField.value = tempFinalVelocityValue.toPrecision(7) + " " + (chosenUnit || " ") + (perTimeUnit || " ");
			} else {
				finalVelocityField.value = tempFinalVelocityValue.toPrecision(tempFinalVelocityValue.toString().length) + " " + (chosenUnit || " ") + (perTimeUnit || " ");
			}
		}
		break;

		case (givenDisplacement.checked && givenTime.checked && solveVelocity.checked): {
			velocityField.type = "text";
			let tempVelocityValue = displacementField.value / timeField.value;
			if(tempVelocityValue.toString().length > 7){
				velocityField.value = tempVelocityValue.toPrecision(7) + " " + (chosenUnit || " ") + (perTimeUnit || " ");
			} else {
				velocityField.value = tempVelocityValue.toPrecision(tempVelocityValue.toString().length) + " " + (chosenUnit || " ") + (perTimeUnit || " ");
			}
		}
		break;

		case (givenDisplacement.checked && givenVelocity.checked && solveTime.checked): {
			timeField.type = "text";
			let tempTimeValue = displacementField.value / velocityField.value;
			if(tempTimeValue.toString().length > 7){
				timeField.value = tempTimeValue.toPrecision(7) + " " + (chosenTimeUnit || " ");
			} else {
				timeField.value = tempTimeValue.toPrecision(tempTimeValue.toString().length) + " " + (chosenTimeUnit || " ");
			}
		}
		break;

		case (givenVelocity.checked && givenTime.checked && solveDisplacement.checked): {
			displacementField.type = "text";
			let tempDispValue = velocityField.value * timeField.value;
			if(tempDispValue.toString().length > 7){
				displacementField.value = tempDispValue.toPrecision(7) + " " + (chosenUnit || " ");
			} else {
				displacementField.value = tempDispValue.toPrecision(tempDispValue.toString().length) + " " + (chosenUnit || " ");
			}
		}
		break;
	}
}

function clearFunction(){
	for(let i = 0; i < givenBtns.length; i++){
		if(givenBtns[i].checked){
			givenBtns[i].checked = false;
		}
	}
	for(let i = 0; i < solveForBtns.length; i++){
		if(solveForBtns[i].checked){
			solveForBtns[i].checked = false;
		}
	}
	for(let i = 0; i < unitBtns.length; i++){
		if(unitBtns[i].checked){
			unitBtns[i].checked = false;
		}
	}
	for(let i = 0; i < timeBtns.length; i++){
		if(timeBtns[i].checked){
			timeBtns[i].checked = false;
		}
	}
	for(let i = 0; i < inputFields.length; i++){
		inputFields[i].value = "";
		if(inputFields[i].style.display === "none"){
			inputFields[i].style.display = "";
		}
		if(inputFields[i].disabled){
			inputFields[i].disabled = false;
		}
		if(inputFields[i].classList.contains("yellow-outline")){
			inputFields[i].classList.remove("yellow-outline");
		}
		if(inputFields[i].type === "text"){
			inputFields[i].type = "number";
		}
	}
	currentSlideIndex = 0;
	switchToSlide();
}

var carAnimations = ["car-one-animation", "car-two-animation", "car-three-animation"];
var animateCarBtns = document.getElementsByClassName("animate-car-btn");
var carIcons = document.getElementsByClassName("car-icon");
for(let i = 0; i < animateCarBtns.length; i++){
  animateCarBtns[i].addEventListener("click",function(){
    carIcons[i].classList.toggle(carAnimations[i]);
  })
}
