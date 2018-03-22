$(window).on('beforeunload', function() {
   $(window).scrollTop(0);
});

$(document).ready(function(){
	$("#conversion-btn").click(function(){
		$("html, body").animate({
			scrollTop: $("#conversion-container").offset().top
		}, "slow")
	});

	$("#vert-conversion-btn").click(function(){
		$("html, body").animate({
			scrollTop: $("#conversion-container").offset().top
		}, "slow")
	});

	$("#examples-btn").click(function(){
		$("html, body").animate({
			scrollTop: $("#practice-btns-container").offset().top
		}, "slow")
	});

	$("#vert-examples-btn").click(function(){
		$("html, body").animate({
			scrollTop: $("#practice-btns-container").offset().top
		}, "slow")
	});

	$("#go-up-btn").click(function(){
		$("html, body").animate({
			scrollTop: 0
		}, "slow")
	});
})

var horizontalSearchBtn = document.getElementById("horizontal-search-btn"),
verticalSearchBtn = document.getElementById("vertical-search-btn"),
searchContainer = document.getElementById("search-container"),
searchBar = document.getElementById("search-bar"),
closeSearchBtn = document.getElementById("close-search-btn"),
caseList = document.getElementById("search-case-list"),
mainContent = document.getElementById("main-content");

horizontalSearchBtn.addEventListener("click", openSearchContainer);
verticalSearchBtn.addEventListener("click", openSearchContainer);
searchBar.addEventListener("input", showList);
closeSearchBtn.addEventListener("click", closeSearchContainer);

function openSearchContainer(){
	if(!searchContainer.classList.contains("active-search")){
		searchContainer.classList.toggle("active-search");
		mainContent.style.marginTop = "30px";
    searchBar.focus();
	} else {
		searchContainer.classList.remove("active-search");
		caseList.classList.remove("show");
		searchBar.value = "";
		mainContent.style.marginTop = "0";
	}
}

function closeSearchContainer(){
	if(searchContainer.classList.contains("active-search")){
		searchContainer.classList.remove("active-search");
		caseList.classList.remove("show");
		searchBar.value  = "";
		mainContent.style.marginTop = "0";
	}
}
var searchClosers = [searchContainer, mainContent];
for(let i = 0; i < searchClosers.length; i++){
  searchClosers[i].addEventListener("click", function(e){
    if(!e.target.matches("#search-bar")){
      closeSearchContainer();
    }
  })
}

function showList() {
	if (searchBar.value.length > 0){
		caseList.classList.add('show');
		showAnchors();
	} else {
		caseList.classList.remove('show');
	}
}

function showAnchors(){
	let inputValue = searchBar.value.toUpperCase();
	let anchors = caseList.getElementsByTagName('a');
	let newAnchors = document.createElement("a");
	for (var i = 0; i < anchors.length; i++){
		let a = anchors[i];
		if (a.textContent.toUpperCase().indexOf(inputValue) > -1){
			anchors[i].style.display = "";
		} else {
			anchors[i].style.display = "none";
		}
	}
}
/*--- Toggle Hamburger Menu ---*/
var clickBox = document.getElementById("click-box"),
		burgerIcon = document.getElementById("icon"),
		verticalNav = document.getElementById("vertical-nav");
clickBox.addEventListener("click", openVerticalNav);

function openVerticalNav(e){
	if(e.target == clickBox){
		verticalNav.classList.toggle("show-vertical-nav");
		burgerIcon.classList.toggle("active");
	}
}

window.onclick = function(e){
	if(!e.target.matches("#click-box")){
		if(icon.classList.contains("active")){
			icon.classList.remove("active");
			verticalNav.classList.remove("show-vertical-nav");
		}
	}
}

/*--- End of Hamburger Menu ---*/
var accordions = document.getElementsByClassName("accordion");
for(var i = 0; i < accordions.length; i++){
	accordions[i].addEventListener("click", openClosePanel);
}

function openClosePanel(){
	this.classList.toggle("active");
	var underPanel = this.nextElementSibling;
	if(underPanel.style.maxHeight){
		underPanel.style.maxHeight = null;
	} else {
		underPanel.style.maxHeight = underPanel.scrollHeight + "px";
	}
}

/*--- Close all accordion panels on "X" btn click or Modal Window click ---*/
var modalCloseBtns = document.getElementsByClassName("glyphicon-remove");
var modalPanels = document.getElementsByClassName("modal-panel");
for(let i = 0; i < modalCloseBtns.length; i++){
  modalCloseBtns[i].addEventListener("click", function(){
    for(let i = 0; i < modalPanels.length; i++){
      if(modalPanels[i].style.maxHeight != null){
        modalPanels[i].style.maxHeight = null;
      }
    }
    var $modalContent = $(this).parents(".modal-content");
    var $accordions = $modalContent.find(".accordion");
    $accordions.removeClass("active");
  })
}
$(".example-modal").click(function(e){
  var $closeBtn = $(this).find(".glyphicon-remove");
  if(e.target.matches(".example-modal")){
    $closeBtn.click();
  }
})
/*--- End of Closing all Accordion and Panels ---*/

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

switchToSlide()
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

/*--- Calculation Vars and Calculator ---*/
var solveForBtns = document.getElementsByClassName("solve-btns"),
	solveTheta = document.getElementById("solve-theta-radio-btn"),
	degSymbol = document.getElementById("deg-symbol").textContent;
	solveDispOne = document.getElementById("solve-d1-radio-btn"),
	solveDispTwo = document.getElementById("solve-d2-radio-btn"),
	solveNetDisp = document.getElementById("solve-dnet-radio-btn");


var trigFunctions = document.getElementsByClassName("trig-function"),
	inverseTrigFuncs = document.getElementsByClassName("inverse-trig-function"),
	sinRadioBtn = document.getElementById("sin-radio-btn"),
	cosRadioBtn = document.getElementById("cos-radio-btn"),
	tanRadioBtn = document.getElementById("tan-radio-btn"),
	arcSinRadioBtn = document.getElementById("arcSin-radio-btn"),
	arcCosRadioBtn = document.getElementById("arcCos-radio-btn"),
	arcTanRadioBtn = document.getElementById("arcTan-radio-btn");


var units = document.getElementsByClassName("units"),
	meterRadioBtn = document.getElementById("meter-radio-btn"),
	mileRadioBtn = document.getElementById("mile-radio-btn"),
	feetRadioBtn = document.getElementById("feet-radio-btn"),
	kiloRadioBtn = document.getElementById("kilometer-radio-btn"),
	degreesRadioBtn = document.getElementById("degrees-radio-btn");

var partOneInputFields = document.getElementsByClassName("part-one-input-field"),
	angleField = document.getElementById("angle-field"),
	angleFieldTheta = angleField.placeholder;
	vectorOneField = document.getElementById("vector-one"),
	vectorTwoField = document.getElementById("vector-two"),
	netDispField = document.getElementById("net-displacement"),
	sigFigsField = document.getElementById("sig-figs-field"),
	thetaSymbol = document.getElementById("theta-symbol").textContent;

var calculateBtn = document.getElementById("calculate-btn");
var clearBtn = document.getElementById("clear-btn");
calculateBtn.addEventListener("click", calculateFunction);
clearBtn.addEventListener("click", clearFunction);

function reseTrigAndUnitSelectors(){
	currentSlideIndex = 0;
	switchToSlide();
  $("#solve-for-selector").prop("selectedIndex", 0);
	$("#trig-selector").prop("selectedIndex", 0);
	$("#unit-selector").prop("selectedIndex", 0);
}

/*--- Bind Solve Selector Options with Solve For Radio Btns ---*/
$("#solve-for-selector").change(function(){
	switch(true){
		case $("#theta-selector-btn").is(":selected"):
			solveTheta.click();
		break;
		case $("#d1-selector-btn").is(":selected"):
			solveDispOne.click();
		break;
		case $("#d2-selector-btn").is(":selected"):
			solveDispTwo.click();
		break;
		case $("#dnet-selector-btn").is(":selected"):
			solveNetDisp.click();
		break;
	}
})


/*--- Bind Trig Selector Options with Trig Radio Btns ---*/
$("#trig-selector").change(function(){
	switch(true){
		case $("#sin-selector-btn").is(":selected"):
			sinRadioBtn.click();
		break;
		case $("#cos-selector-btn").is(":selected"):
			cosRadioBtn.click();
		break;
		case $("#tan-selector-btn").is(":selected"):
			tanRadioBtn.click();
		break;
		case $("#arcsin-selector-btn").is(":selected"):
			arcSinRadioBtn.click();
		break;
		case $("#arccos-selector-btn").is(":selected"):
			arcCosRadioBtn.click();
		break;
		case $("#arctan-selector-btn").is(":selected"):
			arcTanRadioBtn.click();
		break;
	}
})

/*--- Bind Unit Selector Options with Unit Radio Btns ---*/
$("#unit-selector").change(function(){
	switch(true){
		case $("#meter-selector-btn").is(":selected"):
			meterRadioBtn.click();
		break;
		case $("#mile-selector-btn").is(":selected"):
			mileRadioBtn.click();
		break;
		case $("#feet-selector-btn").is(":selected"):
			feetRadioBtn.click();
		break;
		case $("#kilometer-selector-btn").is(":selected"):
			kiloRadioBtn.click();
		break;
		case $("#degree-selector-btn").is(":selected"):
			degreesRadioBtn.click();
		break;
	}
})


for(let i = 0; i < solveForBtns.length; i++){
	solveForBtns[i].addEventListener("click", solveForFunction);
}
for(let i = 0; i < trigFunctions.length; i++){
	trigFunctions[i].addEventListener("click", function(){
		currentSlideIndex = i;
		switchToSlide();
	});
	trigFunctions[i].addEventListener("click", chosenTrigFunction);
}

for(let i = 0; i < inverseTrigFuncs.length; i++){
	inverseTrigFuncs[i].addEventListener("click", function(){
		currentSlideIndex = i + 3;
		switchToSlide();
	});
	inverseTrigFuncs[i].addEventListener("click", chosenTrigFunction);
}

var chosenUnit;
for(let i = 0; i < units.length; i++){
	units[i].addEventListener("click", function(){
		chosenUnit = units[i].getAttribute("units");
	})
}

function resetAllTrigFuncs(){
	for(let i = 0; i < inverseTrigFuncs.length; i++){
		inverseTrigFuncs[i].checked = false;
	}
	for(let i = 0; i < inverseTrigFuncs.length; i++){
		inverseTrigFuncs[i].disabled = false;
	}
	for(let i = 0; i < trigFunctions.length; i++){
		trigFunctions[i].checked = false;
	}
	for(let i = 0; i < trigFunctions.length; i++){
		trigFunctions[i].disabled = false;
	}
	$(".trig-selector-btn").prop("disabled", false);
	$(".inv-trig-selector-btn").prop("disabled", false);
}

function solveForFunction(){
	angleField.placeholder = thetaSymbol + " (degrees mode)";
	vectorOneField.placeholder = "(d1)";
	vectorTwoField.placeholder = "(d2)";
	netDispField.placeholder = "d(net)";

	for(let i = 0; i < partOneInputFields.length; i++){
		partOneInputFields[i].disabled = false;
		partOneInputFields[i].value = "";
		if(partOneInputFields[i].classList.contains("yellow-outline")){
			partOneInputFields[i].classList.remove("yellow-outline");
		}
	}

	resetAllTrigFuncs();

	switch(true){
		case (solveTheta.checked):
			angleField.disabled = true;
			angleField.placeholder = "Calculating " + thetaSymbol + "..";
			angleField.classList.add("yellow-outline");
			for(let i = 0; i < trigFunctions.length; i++){
				trigFunctions[i].disabled = true;
				$(".trig-selector-btn").prop("disabled", true);
			}
		break;
		case (solveDispOne.checked):
			vectorOneField.disabled = true;
			vectorOneField.placeholder = "Calculating d1..";
			vectorOneField.classList.add("yellow-outline");
			for(let i = 0; i < inverseTrigFuncs.length; i++){
				inverseTrigFuncs[i].disabled = true;
			}
			$(".inv-trig-selector-btn").prop("disabled", true);
			cosRadioBtn.checked = false;
			cosRadioBtn.disabled = true;
			$("#cos-selector-btn").prop("disabled", true);
		break;
		case (solveDispTwo.checked):
			vectorTwoField.disabled = true;
			vectorTwoField.placeholder = "Calculating d2..";
			vectorTwoField.classList.add("yellow-outline");
			for(let i = 0; i < inverseTrigFuncs.length; i++){
				inverseTrigFuncs[i].disabled = true;
			}
			$(".inv-trig-selector-btn").prop("disabled", true);
			sinRadioBtn.checked = false;
			sinRadioBtn.disabled = true;
			$("#sin-selector-btn").prop("disabled", true);
		break;
		case (solveNetDisp.checked):
			netDispField.disabled = true;
			netDispField.placeholder = "Calculating d(net)..";
			netDispField.classList.add("yellow-outline");
			for(let i = 0; i < inverseTrigFuncs.length; i++){
				inverseTrigFuncs[i].disabled = true;
			}
			$(".inv-trig-selector-btn").prop("disabled", true);
			tanRadioBtn.checked = false;
			tanRadioBtn.disabled = true;
			$("#tan-selector-btn").prop("disabled", true);
		break;
	}
}

function chosenTrigFunction(){
	for(let i = 0; i < partOneInputFields.length; i++){
		partOneInputFields[i].value = "";
		partOneInputFields[i].disabled = false;
	}
	switch(true){
		case (solveDispOne.checked && tanRadioBtn.checked):
			vectorOneField.disabled = true;
			netDispField.disabled = true;
		break;
		case (solveDispTwo.checked && tanRadioBtn.checked):
			vectorTwoField.disabled = true;
			netDispField.disabled = true;
		break;
		case (solveDispOne.checked && sinRadioBtn.checked):
			vectorOneField.disabled = true;
			vectorTwoField.disabled = true;
		break;
		case (solveDispTwo.checked && cosRadioBtn.checked):
			vectorTwoField.disabled = true;
			vectorOneField.disabled = true;
		break;
		case (solveNetDisp.checked && sinRadioBtn.checked):
			netDispField.disabled = true;
			vectorTwoField.disabled = true;
		break;
		case (solveNetDisp.checked && cosRadioBtn.checked):
			netDispField.disabled = true;
			vectorOneField.disabled = true;
		break;
		case (solveTheta.checked && arcSinRadioBtn.checked):
			angleField.disabled = true;
			vectorTwoField.disabled = true;
		break;
		case (solveTheta.checked && arcCosRadioBtn.checked):
			angleField.disabled = true;
			vectorOneField.disabled = true;
		break;
		case (solveTheta.checked && arcTanRadioBtn.checked):
			angleField.disabled = true;
			netDispField.disabled = true;
		break;
	}
}

function calculateFunction(){
	for(let i = 0; i < partOneInputFields.length; i++){
		if(partOneInputFields[i].type === "text"){
			partOneInputFields[i].type = "number";
		}
	}
	switch(true){
		case (solveDispOne.checked && sinRadioBtn.checked): {
			let tempVectorOneValue = (Math.sin(angleField.value * Math.PI/180) * netDispField.value);
			vectorOneField.type = "text";
			if(tempVectorOneValue.toString().length > 7){
				vectorOneField.value = tempVectorOneValue.toPrecision(sigFigsField.value || 7) + " " + (chosenUnit || " ");
			} else {
				vectorOneField.value = tempVectorOneValue.toPrecision(sigFigsField.value || tempVectorOneValue.toString().length) + " " (chosenUnit || " ");
			}
		}
		break;
		case (solveDispOne.checked && tanRadioBtn.checked): {
			let tempVectorOneValue = (Math.tan(angleField.value * Math.PI/180) * vectorTwoField.value);
			vectorOneField.type = "text";
			if(tempVectorOneValue.toString().length > 7){
				vectorOneField.value = tempVectorOneValue.toPrecision(sigFigsField.value || 7) + " " + (chosenUnit || " ");
			} else {
				vectorOneField.value = tempVectorOneValue.toPrecision(sigFigsField.value || tempVectorOneValue.toString().length) + " " (chosenUnit || " ");
			}
		}
		break;
		case (solveDispTwo.checked && cosRadioBtn.checked): {
			let tempVectorTwoValue = (Math.cos(angleField.value * Math.PI/180) * netDispField.value);
			vectorTwoField.type = "text";
			if(tempVectorTwoValue.toString().length > 7){
				vectorTwoField.value = tempVectorTwoValue.toPrecision(sigFigsField.value || 7) + " " + (chosenUnit || " ");
			} else {
				vectorTwoField.value = tempVectorTwoValue.toPrecision(sigFigsField.value || tempVectorTwoValue.toString().length) + " " + (chosenUnit || " ");
			}
		}
		break;
		case (solveDispTwo.checked && tanRadioBtn.checked): {
			let tempVectorTwoValue = (vectorOneField.value / (Math.tan(angleField.value * Math.PI/180)));
			vectorTwoField.type = "text";
			if(tempVectorTwoValue.toString().length > 7){
				vectorTwoField.value = tempVectorTwoValue.toPrecision(sigFigsField.value || 7) + " " + (chosenUnit || " ");
			} else {
				vectorTwoField.value = tempVectorTwoValue.toPrecision(sigFigsField.value || tempVectorTwoValue.toString().length) + " " + (chosenUnit || " ");
			}
		}
		break;
		case (solveNetDisp.checked && sinRadioBtn.checked): {
			let tempNetDispValue = (vectorOneField.value / (Math.sin(angleField.value * Math.PI/180)));
			netDispField.type = "text";
			if(tempNetDispValue.toString().length > 7){
				netDispField.value = tempNetDispValue.toPrecision(sigFigsField.value || 7) + " " + (chosenUnit || " ");
			} else {
				netDispField.value = tempNetDispValue.toPrecision(sigFigsField.value || tempNetDispValue.toString().length) + " " + (chosenUnit || " ");
			}
		}
		break;
		case (solveNetDisp.checked && cosRadioBtn.checked): {
			let tempNetDispValue = (vectorTwoField.value / (Math.cos(angleField.value * Math.PI/180)));
			netDispField.type = "text";
			if(tempNetDispValue.toString().length > 7){
				netDispField.value = tempNetDispValue.toPrecision(sigFigsField.value || 7) + " " + (chosenUnit || " ");
			} else {
				netDispField.value = tempNetDispValue.toPrecision(sigFigsField.value || tempNetDispValue.toString().length) + " " + (chosenUnit || " ");
			}
		}
		break;
		case (solveTheta.checked && arcSinRadioBtn.checked): {
			let tempAngleFieldValue = (Math.asin(vectorOneField.value / netDispField.value) * (180/Math.PI));
			angleField.type = "text";
			if(tempAngleFieldValue.toString().length > 7){
				angleField.value = tempAngleFieldValue.toPrecision(sigFigsField.value || 7) + " " + degSymbol;
			} else {
				angleField.value = tempAngleFieldValue.toPrecision(sigFigsField.value || tempAngleFieldValue.toString().length) + " " + degSymbol;
			}
		}
		break;
		case (solveTheta.checked && arcCosRadioBtn.checked): {
			let tempAngleFieldValue = (Math.acos(vectorTwoField.value / netDispField.value) * (180/Math.PI));
			angleField.type = "text";
			if(tempAngleFieldValue.toString().length > 7){
				angleField.value = tempAngleFieldValue.toPrecision(sigFigsField.value || 7) + " " + degSymbol;
			} else {
				angleField.value = tempAngleFieldValue.toPrecision(sigFigsField.value || tempAngleFieldValue.toString().length) + " " + degSymbol;
			}
		}
		break;
		case (solveTheta.checked && arcTanRadioBtn.checked): {
			let tempAngleFieldValue = (Math.atan(vectorOneField.value / vectorTwoField.value) * (180/Math.PI));
			angleField.type = "text";
			if(tempAngleFieldValue.toString().length > 7){
				angleField.value = tempAngleFieldValue.toPrecision(sigFigsField.value || 7) + " " + degSymbol;
			} else {
				angleField.value = tempAngleFieldValue.toPrecision(sigFigsField.value || tempAngleFieldValue.toString().length) + " " + degSymbol;
			}
		}
		break;
		default:
			alert("Choose a variable to solve for and the trig function");
	}
}


		function clearFunction(){
			reseTrigAndUnitSelectors();
			$("#solve-for-selector").prop("selectedIndex", 0);
			$("#trig-selector").prop("selectedIndex", 0);
			angleField.placeholder = angleFieldTheta;
			vectorOneField.placeholder = "(d1)";
			vectorTwoField.placeholder = "(d2)";
			netDispField.placeholder = "d-net";

			for(let i = 0; i < solveForBtns.length; i++){
				if(solveForBtns[i].checked){
					solveForBtns[i].checked = false;
				}
			}
			for(let i = 0; i < trigFunctions.length; i++){
				if(trigFunctions[i].checked){
					trigFunctions[i].checked = false;
				}
				if(trigFunctions[i].disabled){
					trigFunctions[i].disabled = false;
				}
			}
			for(let i = 0; i < inverseTrigFuncs.length; i++){
				if(inverseTrigFuncs[i].checked){
					inverseTrigFuncs[i].checked = false;
				}
				if(inverseTrigFuncs[i].disabled){
					inverseTrigFuncs[i].disabled = false;
				}
			}
			for(let i = 0; i < units.length; i++){
				if(units[i].checked){
					units[i].checked = false;
				}
			}
			for(let i = 0; i < partOneInputFields.length; i++){
				partOneInputFields[i].value = ""
				if(partOneInputFields[i].disabled){
					partOneInputFields[i].disabled = false;
				}
				if(partOneInputFields[i].type = "text"){
					partOneInputFields[i].type = "number";
				}
				if(partOneInputFields[i].classList.contains("yellow-outline")){
					partOneInputFields[i].classList.remove("yellow-outline");
				}
			}
		}


		/*--- Conversion Table JS ---*/
		var userInput = document.getElementById('unit-input-field');
		var unitOutput = document.getElementById('unit-output-field');
		var unitC = document.getElementById('unit-converter');

		if(userInput){
			userInput.addEventListener('input', convertUnit);
		}
		if(unitC){
			unitC.addEventListener('change', convertUnit);
		}

		function convertUnit()
		{
			if (userInput.value < 0){
				alert("Please enter a value greater or equal to zero");
				userInput.value = "";
			} else {
				switch(true)
				{
					case document.getElementById('millimetersToCentimeters').selected:
						unitOutput.value = (userInput.value / 10) + " cm";
						break;
					case document.getElementById('centimetersToMillimeters').selected:
						unitOutput.value = (userInput.value * 10) + " mm";
						break;
					case document.getElementById('centimetersToMeters').selected:
						unitOutput.value = (userInput.value / 100) + " m";
						break;
					case document.getElementById('metersToCentimeters').selected:
						unitOutput.value = (userInput.value * 100) + " cm";
						break;
					case document.getElementById('metersTokilometers').selected:
						unitOutput.value = (userInput.value / 1000) + " km";
						break;
					case document.getElementById('kilometersToMeters').selected:
						unitOutput.value = (userInput.value * 1000) + " m";
						break;
					case document.getElementById('metersToMiles').selected:
						unitOutput.value = (userInput.value / 1609.34) + " mi";
						break;
					case document.getElementById('milesToMeters').selected:
						unitOutput.value = (userInput.value * 1609.34) + " m";
						break;
					case document.getElementById('milesToKilometers').selected:
						unitOutput.value = (userInput.value * 1.60934) + " km";
						break;
					case document.getElementById('kilometersToMiles').selected:
						unitOutput.value = (userInput.value * 0.621371) + " mi";
						break;
					case document.getElementById('feetToYards').selected:
						unitOutput.value = (userInput.value / 3) + " yds";
						break;
					case document.getElementById('yardsToFeet').selected:
						unitOutput.value = (userInput.value * 3) + " ft";
						break;
					case document.getElementById('feetToMeters').selected:
						unitOutput.value = (userInput.value * 0.3048) + " m";
						break;
					case document.getElementById('metersToFeet').selected:
						unitOutput.value = (userInput.value * 3.28084) + " ft";
						break;
					case document.getElementById('centimetersToInches').selected:
						unitOutput.value = (userInput.value * 0.393701) + " in";
						break;
					case document.getElementById('inchesToCentimeters').selected:
						unitOutput.value = (userInput.value * 2.54) + " cm";
						break;
					case document.getElementById('milligramsToGrams').selected:
						unitOutput.value = (userInput.value / 1000) + " g";
						break;
					case document.getElementById('gramsToMilligrams').selected:
						unitOutput.value = (userInput.value * 1000) + " mg";
						break;
					case document.getElementById('gramsToKilograms').selected:
						unitOutput.value = (userInput.value / 1000) + " kg";
						break;
					case document.getElementById('kilogramsToGrams').selected:
						unitOutput.value = (userInput.value * 1000) + " g";
						break;
					case document.getElementById('poundsToKilograms').selected:
						unitOutput.value = (userInput.value / 2.20462) + " kg";
						break;
					case document.getElementById('kilogramsToPounds').selected:
						unitOutput.value = (userInput.value * 2.20462) + " lbs";
						break;
					case document.getElementById('squareMetersToKilometersSquared').selected:
						unitOutput.value = (userInput.value / 1000000).toExponential(2) + " km²";
						break;
					case document.getElementById('kilometerSquaredToSquareMeters').selected:
						unitOutput.value = (userInput.value * 1000000).toExponential(2) + " m²";
						break;
				}
			}
		}
		/*--- End of Conversion Table ---*/

		window.addEventListener("resize", function(){
			if(window.innerWidth < 992){
				$(window).scroll(function(){
					if($(window).scrollTop() > 600){
						$("#go-up-container").css("opacity", "1");
					} else {
						$("#go-up-container").css("opacity", "0");
					}
				})
			}
		})

		window.addEventListener("load", function(){
			if(window.innerWidth < 992){
				$(window).scroll(function(){
					if($(window).scrollTop() > 600){
						$("#go-up-container").css("opacity", "1");
					} else {
						$("#go-up-container").css("opacity", "0");
					}
				})
			}
		})
