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
})

var horizontalSearchBtn = document.getElementById("horizontal-search-btn"),
    verticalSearchBtn = document.getElementById("vertical-search-btn"),
    searchSection = document.getElementById("search-section"),
    searchBar = document.getElementById("search-bar"),
    closeSearchBtn = document.getElementById("close-search-btn"),
    caseList = document.getElementById("search-case-list"),
    mainContent = document.getElementById("main-content");

horizontalSearchBtn.addEventListener("click", openSearchSection);
verticalSearchBtn.addEventListener("click", openSearchSection);
searchBar.addEventListener("input", showList);
closeSearchBtn.addEventListener("click", closeSearchSection);

function openSearchSection(){
	if(!searchSection.classList.contains("active-search")){
		searchSection.classList.toggle("active-search");
		mainContent.style.marginTop = "30px";
		searchBar.focus();
	} else {
		searchSection.classList.remove("active-search");
		caseList.classList.remove("show");
		searchBar.value = "";
		mainContent.style.marginTop = "0";
	}
}

function closeSearchSection(){
	if(searchSection.classList.contains("active-search")){
		searchSection.classList.remove("active-search");
		caseList.classList.remove("show");
		searchBar.value  = "";
		document.getElementById("main-content").style.marginTop = "0";
	}
}
var searchClosers = [searchSection, mainContent];
for(let i = 0; i < searchClosers.length; i++){
  searchClosers[i].addEventListener("click", function(e){
    if(!e.target.matches("#search-bar")){
      closeSearchSection();
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
/*--- Example Problems Modals ---*/
var exampleAccordions = document.getElementsByClassName("accordion");
for (let i = 0; i < exampleAccordions.length; i++) {
    exampleAccordions[i].onclick = function() {
      this.classList.toggle("active");
      var innerPanel = this.nextElementSibling;
        if (innerPanel.style.maxHeight){
            innerPanel.style.maxHeight = null;
        } else {
            innerPanel.style.maxHeight = innerPanel.scrollHeight + "px";
        }
    }
}
/*--- End of Modal Accordions ---*/

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

/*--- Toggle Hamburger Menu ---*/
var icon = document.getElementById("icon");
var clickBox = document.getElementById("click-box");
var verticalNav = document.getElementsByClassName("vertical-nav")[0];
clickBox.addEventListener("click", toggleVerticalNav, false);

function toggleVerticalNav(e){
	icon.classList.toggle("active");
	verticalNav.classList.toggle("show-vertical-nav");
}

window.onclick = function(e){
	if(!e.target.matches("#click-box")){
		if(icon.classList.contains("active")){
			icon.classList.remove("active");
			verticalNav.classList.remove("show-vertical-nav");
		}
	}
}

	/*--- Topic Calculators ---*/
	var solveBtns = document.getElementsByClassName("solve-btn"),
		solveNetForce = document.getElementById("net-force-radio-btn"),
		solveMass = document.getElementById("mass-radio-btn"),
		solveAcceleration = document.getElementById("acceleration-radio-btn");

	var unitBtns = document.getElementsByClassName("unit-btn"),
		newtonsBtn = document.getElementById("newtons-radio-btn"),
		gramsBtn = document.getElementById("grams-radio-btn"),
		kilogramsBtn = document.getElementById("kilograms-radio-btn"),
		metersBtn = document.getElementById("meters-radio-btn"),
		kilometersBtn = document.getElementById("kilometers-radio-btn"),
		chosenUnit;

	var timeBtns = document.getElementsByClassName("time-btn"),
		secondsBtn = document.getElementById("seconds-radio-btn"),
		minutesBtn = document.getElementById("minutes-radio-btn"),
		hoursBtn = document.getElementById("hours-radio-btn"),
		daysBtn = document.getElementById("days-radio-btn"),
		chosenTimeUnit,
		acclUnits = "/" + chosenTimeUnit + "2";


	var inputFields = document.getElementsByClassName("input-field"),
		netForceField = document.getElementById("net-force-field"),
		massField = document.getElementById("mass-field"),
		accelerationField = document.getElementById("acceleration-field"),
		sigFigsField = document.getElementById("sig-figs-field");

	var calculateBtn = document.getElementById("calculate-btn"),
		clearBtn = document.getElementById("clear-btn");

	var innerImageContainer = document.getElementById("inner-image-container"),
		slides = document.getElementsByClassName("slide"),
		currentSlideIndex = 0,
		width = 100,
		prevBtn = document.getElementById("prev-slide-btn"),
		nextBtn = document.getElementById("next-slide-btn"),
		slideBars = document.getElementsByClassName("slide-bar");

	calculateBtn.addEventListener("click", calculateFunc);
	clearBtn.addEventListener("click", clearFunc);

	prevBtn.addEventListener("click", goToPrevSlide);
	nextBtn.addEventListener("click", goToNextSlide);


	for(let i = 0; i < solveBtns.length; i++){
		solveBtns[i].addEventListener("click", solveForBtnFunction);
	}

	function solveForBtnFunction(){
		for(let i = 0; i < unitBtns.length; i++){
			if(unitBtns[i].disabled){
				unitBtns[i].disabled = false;
			}
		}
		secondsBtn.checked = false;

		function resetInputFields(){
			netForceField.placeholder = "Net Force (Fnet)";
			massField.placeholder = "Mass (m)";
			accelerationField.placeholder = "Acceleration";

			for(let i = 0; i < inputFields.length; i++){
				inputFields[i].value = "";
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
		}
		resetInputFields();

		switch(true){
			case (solveNetForce.checked):
				netForceField.type = "text";
				netForceField.placeholder = "Calculating F..";
				netForceField.disabled = true;
				netForceField.classList.add("yellow-outline");
				currentSlideIndex = 0;
				switchToSlide();

				for(let i = 0; i < unitBtns.length; i++){
					unitBtns[i].disabled = true;
				}
				newtonsBtn.disabled = false;
			break;
			case (solveMass.checked):
				massField.type = "text";
				massField.placeholder = "Calculating m..";
				massField.disabled = true;
				massField.classList.add("yellow-outline");
				currentSlideIndex = 1;
				switchToSlide();

				for(let i = 0; i < unitBtns.length; i++){
					unitBtns[i].disabled = true;
				}
				gramsBtn.disabled = false;
				kilogramsBtn.disabled = false;
			break;
			case (solveAcceleration.checked):
				accelerationField.type = "text";
				accelerationField.placeholder = "Calculating a..";
				accelerationField.disabled = true;
				accelerationField.classList.add("yellow-outline");
				currentSlideIndex = 2;
				switchToSlide();

				for(let i = 0; i < unitBtns.length; i++){
					unitBtns[i].disabled = true;
				}
				metersBtn.disabled = false;
				kilometersBtn.disabled = false;
				secondsBtn.checked = true;
			break;
		}
	}


	function assignLengthUnit(){
		for(let i = 0; i < unitBtns.length; i++){
			unitBtns[i].addEventListener("click", function(){
				if(unitBtns[i].checked){
					chosenUnit = unitBtns[i].getAttribute("units");
				}
			})
		}
	}
	assignLengthUnit();



	function assignTimeUnit(){
		for(let i = 0; i < timeBtns.length; i++){
			timeBtns[i].addEventListener("click", function(){
				if(timeBtns[i].checked){
					chosenTimeUnit = timeBtns[i].getAttribute("units");
				}
			})
		}
	}
	assignTimeUnit();


	function calculateFunc(){
		switch(true){
			case (solveNetForce.checked):
				function setTempForce(){
					var tempForce = massField.value * accelerationField.value;
					function setFinalForce(){
						if(tempForce.toString().length > 9){
							netForceField.value = tempForce.toPrecision(sigFigsField.value || 9) + " " + (chosenUnit || " ");
						} else {
							netForceField.value = tempForce.toPrecision(sigFigsField.value || tempForce.toString().length) + " " + (choseUnit || " ");
						}
					}
					setFinalForce();
				}
				setTempForce();
			break;
			case (solveMass.checked):
				function setTempMass(){
					var tempMass = netForceField.value / accelerationField.value;
					function setFinalMass(){
						if(tempMass.toString().length > 9){
							massField.value = tempMass.toPrecision(sigFigsField.value || 9) + " " + (chosenUnit || " " ) + (chosenTimeUnit || " ");
						} else {
							massField.value = tempMass.toPrecision(sigFigsField.value || tempMass.toString().length) + " " + (chosenUnit || " " );
						}
					}
					setFinalMass();
				}
				setTempMass();
			break;
			case (solveAcceleration.checked):
				function setTempAcceleration(){
					var tempAcceleration = netForceField.value / massField.value;
					function setFinalAcceleration(){
						if(tempAcceleration.toString().length > 9){
							accelerationField.value = tempAcceleration.toPrecision(sigFigsField.value || 9) + " " + (chosenTimeUnit || " " ) + (acclUnits || " ");
						} else {
							accelerationField.value = tempAcceleration.toPrecision(sigFigsField.value || tempAcceleration.toString().length) + " " + (chosenTimeUnit || " ") + (acclUnits || " ");
						}
					}
					setFinalAcceleration();
				}
				setTempAcceleration();
			break;
		}
	}


	function clearFunc(){
		netForceField.placeholder = "Net Force (Fnet)";
		massField.placeholder = "Mass (m)";
		accelerationField.placeholder = "Acceleration (a)";

		for(let i = 0; i < inputFields.length; i++){
			inputFields[i].value = "";
			if(inputFields[i].disabled){
				inputFields[i].disabled = false;
			}
			if(inputFields[i].classList.contains("yellow-outline")){
				inputFields[i].classList.remove("yellow-outline");
			}
		}

		for(let i = 0; i < solveBtns.length; i++){
			if(solveBtns[i].checked){
				solveBtns[i].checked = false;
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
		currentSlideIndex = 0;
		switchToSlide();
	}



	/*--- End of Topic Calculators ---*/


	/*--- Move Equation Images ---*/
	for(let i = 0; i < slideBars.length; i++){
		slideBars[i].addEventListener("click", function(){
			currentSlideIndex = i;
			switchToSlide();
		});
	}

	function switchToSlide(){
		for(let i = 0; i < slideBars.length; i++){
			if(slideBars[i].classList.contains("active-indicator")){
				slideBars[i].classList.remove("active-indicator");
			}
		}
		innerImageContainer.style.left = -width * currentSlideIndex + "%";
		slideBars[currentSlideIndex].classList.add("active-indicator");
	}
	switchToSlide();

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

  /*--- Toggle Img Caption Show/Hide ---*/
  var imgCaptions = document.getElementsByClassName("img-caption");
  var thirdPageImgs = document.querySelectorAll(".third-page-pics > input[type='image']");
  thirdPageImgs.forEach(function(image){
    image.addEventListener("click", function(e){
      var imgCaption = this.nextElementSibling;
      if(!e.target.matches(".img-caption")){
        imgCaption.classList.toggle("hide-caption");
      }
    })
  })

  /*--- Close Modals ---*/
  var closeModalBtns = document.querySelectorAll(".close-modal-btn");
  closeModalBtns.forEach(function(btn){
    btn.addEventListener("click", function(){
      var $modalParent = $(this).parents(".modal");
      $modalParent.click();
    })
  })

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
