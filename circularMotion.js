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
	solveAngularVelocity = document.getElementById("angular-velocity-radio-btn"),
	solveRadius = document.getElementById("radius-radio-btn"),
	solvePeriod = document.getElementById("period-radio-btn");

var unitBtns = document.getElementsByClassName("unit-btn"),
	feetBtn = document.getElementById("feet-radio-btn"),
	meterBtn = document.getElementById("meter-radio-btn"),
	mileBtn = document.getElementById("mile-radio-btn"),
	kilometerBtn = document.getElementById("kilometer-radio-btn"),
	revolutionBtn = document.getElementById("revolution-radio-btn"),
	chosenUnit;

var timeBtns = document.getElementsByClassName("time-btn"),
	secondsBtn = document.getElementById("seconds-radio-btn"),
	minutesBtn = document.getElementById("minutes-radio-btn"),
	hoursBtn = document.getElementById("hours-radio-btn"),
	daysBtn = document.getElementById("days-radio-btn"),
	chosenTimeUnit;


var inputFields = document.getElementsByClassName("input-field"),
	angularVelocityField = document.getElementById("angular-velocity-field"),
	radiusField = document.getElementById("radius-field"),
	periodField = document.getElementById("period-field"),
	sigFigsField = document.getElementById("sig-figs-field"),
	omegaSymbol = document.getElementById("omega-symbol");

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
		if(unitBtns[i].checked){
			unitBtns[i].checked = false;
		}
	}
	for(let i = 0; i < timeBtns.length; i++){
		if(timeBtns[i].checked){
			timeBtns[i].checked = false;
		}
	}
	secondsBtn.checked = true;

	function resetInputFields(){
		angularVelocityField.placeholder = "Angular Velocity " + omegaSymbol.textContent;
		radiusField.placeholder = "Radius (r)";
		periodField.placeholder = "Period (T)";
		sigFigsField.placeholder = "# of sigfigs (optional)";

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
			case (solveAngularVelocity.checked):
				angularVelocityField.type = "text";
				angularVelocityField.placeholder = "Calculating " + omegaSymbol.textContent + "..";
				angularVelocityField.disabled = true;
				angularVelocityField.classList.add("yellow-outline");
				currentSlideIndex = 0;
				switchToSlide();

				revolutionBtn.disabled = true;
			break;
			case (solvePeriod.checked):
				periodField.type = "text";
				periodField.placeholder = "Calculating T..";
				periodField.disabled = true;
				periodField.classList.add("yellow-outline");
				currentSlideIndex = 1;
				switchToSlide();
			break;
			case (solveRadius.checked):
				radiusField.type = "text";
				radiusField.placeholder = "Calculating r..";
				radiusField.disabled = true;
				radiusField.classList.add("yellow-outline");
				currentSlideIndex = 2;
				switchToSlide();
				secondsBtn.checked = false;
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
			case (solveAngularVelocity.checked):
				function setTempOmega(){
					var tempAngularVelocity = (2 * Math.PI * radiusField.value) / periodField.value;
					function setFinalOmega(){
						if(tempAngularVelocity.toString().length > 9){
							angularVelocityField.value = tempAngularVelocity.toPrecision(sigFigsField.value || 9) + " " + (chosenUnit || " ") + "/" + (chosenTimeUnit || "s");
						} else {
							angularVelocityField.value = tempAngularVelocity.toPrecision(sigFigsField.value || tempAngularVelocity.toString().length) + " " + (chosenUnit || " ") + "/" + (chosenTimeUnit || "s");
						}
					}
					setFinalOmega();
				}
				setTempOmega();
			break;
			case (solveRadius.checked):
				function setTempRadius(){
					var tempRadius = (angularVelocityField.value * periodField.value) / (2 * Math.PI);
					function setFinalRadius(){
						if(angularVelocityField.toString().length > 9){
							radiusField.value = tempRadius.toPrecision(sigFigsField.value || 9) + " " + chosenUnit;
						} else {
							radiusField.value = tempRadius.toPrecision(sigFigsField.value || tempRadius.toString().length) + " " + chosenUnit;
						}
					}
					setFinalRadius();
				}
				setTempRadius();
			break;
			case (solvePeriod.checked):
				function setTempPeriod(){
					var tempPeriod = (2 * Math.PI * radiusField.value) / angularVelocityField.value;
					function setFinalPeriod(){
						if(tempPeriod.toString().length > 9){
							periodField.value = tempPeriod.toPrecision(sigFigsField.value || 9) + " " + (chosenTimeUnit || " " ) + "/rev";
						} else {
							periodField.value = tempPeriod.toPrecision(sigFigsField.value || tempPeriod.toString().length) + " rev/" + (chosenTimeUnit || " ");
						}
					}
					setFinalPeriod();
				}
				setTempPeriod();
			break;
			default:
				alert("Select variable to solve for");
		}
	}


	function clearFunc(){
		angularVelocityField.placeholder = "Angular Velocity " + omegaSymbol.textContent;
		radiusField.placeholder = "Radius (r)";
		periodField.placeholder = "Period (T)";
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
