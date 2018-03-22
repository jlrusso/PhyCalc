$(window).on('beforeunload', function() {
	 $(window).scrollTop(0);
});


window.onload = function(){
var navBar = document.getElementsByTagName("nav")[0],
		horizontalSearchBtn = document.getElementById("horizontal-search-btn"),
		verticalSearchBtn = document.getElementById("vertical-search-btn"),
		searchContainer  = document.getElementById("search-container"),
		searchBar = document.getElementById("search-bar"),
		closeSearchBtn = document.getElementById("close-search-btn"),
		caseList = document.getElementById("search-case-list"),
		banner = document.getElementsByClassName("banner")[0],
		hiwSection = document.getElementsByClassName("how-it-works-section")[0],
		mainContent = document.getElementById("main-content");

	horizontalSearchBtn.addEventListener("click", openSearchContainer);
	verticalSearchBtn.addEventListener("click", openSearchContainer);
	searchBar.addEventListener("input", showList);
	closeSearchBtn.addEventListener("click", closeSearchContainer);

	function openSearchContainer(){
		if(!searchContainer.classList.contains("active-search")){
			searchContainer.classList.toggle("active-search");
			searchBar.focus();
		} else {
			searchContainer.classList.remove("active-search");
			caseList.classList.remove("show");
			searchBar.value = "";
		}
	}

	function closeSearchContainer(){
		if(searchContainer.classList.contains("active-search")){
			searchContainer.classList.remove("active-search");
			caseList.classList.remove("show");
			searchBar.value  = "";
		}
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
	var searchClosers = [searchContainer, banner, hiwSection, mainContent];
	for(let i = 0; i < searchClosers.length; i++){
		searchClosers[i].addEventListener("click", function(e){
			if(!e.target.matches("#search-bar")){
				closeSearchContainer();
			}
		})
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
		if(window.innerWidth < 650){
			if(!e.target.matches("#click-box")){
				if(icon.classList.contains("active")){
					icon.classList.remove("active");
					verticalNav.classList.remove("show-vertical-nav");
				}
			}
		}
	}
}; //closing bracket for onload function


/*--- Scroll to page section on click ---*/
$(document).ready(function(){
	$("#get-started-btn").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#featured-topic-heading").offset().top - 10
	        }, 'slow'); //scroll from top to selector
	});

	$("#contact-btn").click(function(){
		$('html,body').animate({
			scrollTop: $("#contact-container").offset().top
		}, 'slow')
	})

	$("#vert-contact-btn").click(function(){
		$("html, body").animate({
			scrollTop: $("#contact-container").offset().top
		}, "slow")
	})

	$("#calculator-btn").click(function(){
		$("html, body").animate({
			scrollTop: $("#calculator-container").offset().top - 30
		}, "slow");
	})

	$("#vert-calculator-btn").click(function(){
		$("html, body").animate({
			scrollTop: $("#calculator-container").offset().top - 30
		}, "slow");
	})

	$("#conversion-btn").click(function(){
		$('html, body').animate({
			scrollTop: $("#conversion-section").offset().top
		}, 'slow')
	})

	$("#vert-conversion-btn").click(function(){
		$("html, body").animate({
			scrollTop: $("#conversion-section").offset().top
		}, "slow")
	})

	$("#go-up-btn").click(function(){
		$("html, body").animate({
			scrollTop: 0
		}, "slow")
	});

	$(window).scroll(function(){
		if($(window).scrollTop() > 600){
			$("#go-up-container").css("opacity", "1");
		} else {
			$("#go-up-container").css("opacity", "0");
		}
	})

});
/*--- end of scroll to page section ---*/




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
