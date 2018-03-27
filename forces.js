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
/*--- Open and Close Modal Panels ---*/
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
/*--- End of Modal Accordions ---*/

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
