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
				mainContent.style.marginTop = "40px";
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
		clickBox.addEventListener("click", function(e){
			if(e.target == clickBox){
				verticalNav.classList.toggle("show-vertical-nav");
				burgerIcon.classList.toggle("active");
			}
		});

		window.onclick = function(e){
			if(!e.target.matches("#click-box")){
				if(icon.classList.contains("active")){
					icon.classList.remove("active");
					verticalNav.classList.remove("show-vertical-nav");
				}
			}
		}

		/*--- End of Hamburger Menu ---*/


		/*--- Open and Close Accordion Panels ---*/
		var accordions = document.getElementsByClassName("accordion");
		var panel;
		var i;
		for (i = 0; i < accordions.length; i++) {
		  	accordions[i].onclick = function(e) {
		    	this.classList.toggle("active");
		    	panel = this.nextElementSibling;
		        if (panel.style.maxHeight){
		            panel.style.maxHeight = null;
		        } else {
		            panel.style.maxHeight = panel.scrollHeight + "px";
		        }
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

		/*--- Calculating Displacement, Final P, and Initial P ---*/
		var solveForBtns = document.getElementsByClassName("solve-btns"),
			solveForDisplacement = document.getElementById("solve-displacement-radio-btn"),
			solveForFinalPosition = document.getElementById("solve-final-p-radio-btn"),
			solveForInitialPosition = document.getElementById("solve-initial-p-radio-btn");

		var firstUnits = document.getElementsByClassName("first-units"),
			meterBtn = document.getElementById("meter-btn"),
			mileBtn = document.getElementById("mile-btn"),
			feetBtn = document.getElementById("feet-btn"),
			kilometerBtn = document.getElementById("kilometer-btn"),
			chosenUnit;

		var numInputFields = document.getElementsByClassName("num-input-field"),
			displacementField = document.getElementById("displacement-field"),
			finalPositionField = document.getElementById("final-p-field"),
			initialPositionField = document.getElementById("initial-p-field"),
			sigFigsField = document.getElementById("sig-figs-field"),
			calculateBtn = document.getElementById("calculate-btn"),
			clearBtn = document.getElementById("clear-btn");

			/*--- Bind Solve Selector Options with Solve For Radio Btns ---*/
			function resetTrigAndUnitSelectors(){
				currentSlideIndex = 0;
				switchToSlide();
				$("#solve-selector").prop("selectedIndex", 0);
				$("#unit-selector").prop("selectedIndex", 0);
			}

			$("#solve-selector").change(function(){
				switch(true){
					case $("#displacement-option").is(":selected"):
						solveForDisplacement.click();
					break;
					case $("#final-position-option").is(":selected"):
						solveForFinalPosition.click();
					break;
					case $("#initial-position-option").is(":selected"):
						solveForInitialPosition.click();
					break;
				}
			})

			$("#unit-selector").change(function(){
				switch(true){
					case $("#meter-option").is(":selected"):
						meterBtn.click();
					break;
					case $("#kilometer-option").is(":selected"):
						kilometerBtn.click();
					break;
					case $("#feet-option").is(":selected"):
						feetBtn.click();
					break;
					case $("#mile-option").is(":selected"):
						mileBtn.click();
					break;
				}
			})


		calculateBtn.addEventListener("click", calculateFunction);
		clearBtn.addEventListener("click", clearFunction);

		for(let i = 0; i < solveForBtns.length; i++){
			solveForBtns[i].addEventListener("click", function(){
				currentSlideIndex = i;
				switchToSlide();
			});
			solveForBtns[i].addEventListener("click", solveForFunction);
		}

		for(let i = 0; i < firstUnits.length; i++){
			firstUnits[i].addEventListener("click", function(){
				chosenUnit = firstUnits[i].getAttribute("units");
			});
		}



		function solveForFunction(){

			function resetInputFields(){
				for(let i = 0; i < numInputFields.length; i++){
					numInputFields[i].value = "";
					if(numInputFields[i].disabled){
						numInputFields[i].disabled = false;
					}
					if(numInputFields[i].type = "text"){
						numInputFields[i].type = "number";
					}
					if(numInputFields[i].classList.contains("yellow-outline")){
						numInputFields[i].classList.remove("yellow-outline");
					}
				}
			}
			resetInputFields();

			//resets input field placeholders every time a solve btn is clicked
			function resetPlaceholders(){
				displacementField.placeholder = "Displacement";
				finalPositionField.placeholder = "Final Position";
				initialPositionField.placeholder = "Initial Position";
			}
			resetPlaceholders();

			switch(true){
				case (solveForDisplacement.checked):
					meterBtn.checked = true;
					displacementField.placeholder = "Calculating Disp..";
					displacementField.disabled = true;
					displacementField.classList.add("yellow-outline");
				break;
				case (solveForFinalPosition.checked):
					meterBtn.checked = true;
					finalPositionField.placeholder = "Calculating Final P..";
					finalPositionField.disabled = true;
					finalPositionField.classList.add("yellow-outline");
				break;
				case (solveForInitialPosition.checked):
					meterBtn.checked = true;
					initialPositionField.placeholder = "Calculating Initial P..";
					initialPositionField.disabled = true;
					initialPositionField.classList.add("yellow-outline");
				break;
			}
		}

		function calculateFunction(){
			switch(true){
				case (solveForDisplacement.checked):
					function setTempDispValue(){
						var tempDispValue = finalPositionField.value - initialPositionField.value;
						function setFinalDispValue(){
							displacementField.type = "text";
							if(tempDispValue.toString().length > 9){
								displacementField.value = tempDispValue.toPrecision(sigFigsField.value || 7) + " " + (chosenUnit || "m");
							} else {
								displacementField.value = tempDispValue.toPrecision(sigFigsField.value || tempDispValue.toString().length) + " " + (chosenUnit || "m");
							}
						}
						return setFinalDispValue();
					}
					setTempDispValue();
				break;
				case (solveForFinalPosition.checked):
					function setTempFinalPositionValue(){
						var tempFinalValue = parseFloat(displacementField.value) + parseFloat(initialPositionField.value);
						function setFinalFinalPositionValue(){
							finalPositionField.type = "text";
							if(tempFinalValue.toString().length > 9){
								finalPositionField.value = tempFinalValue.toPrecision(sigFigsField.value || 7) + " " + (chosenUnit || "m");
							} else {
								finalPositionField.value = tempFinalValue.toPrecision(sigFigsField.value || tempFinalValue.toString().length) + " " + (chosenUnit || "m");
							}
						}
						return setFinalFinalPositionValue();
					}
					setTempFinalPositionValue();
				break;
				case (solveForInitialPosition.checked):
					function setTempInitialPositionValue(){
						var tempInitialValue = finalPositionField.value - displacementField.value;
						function setFinalInitialPositionValue(){
							initialPositionField.type = "text";
							if(tempInitialValue.toString().length > 9){
								initialPositionField.value = tempInitialValue.toPrecision(sigFigsField.value || 7) + " " + (chosenUnit || "m");
							} else {
								initialPositionField.value = tempInitialValue.toPrecision(sigFigsField.value || tempInitialValue.toString().length) + " " + (chosenUnit || "m");
							}
						}
						return setFinalInitialPositionValue();

					}
					setTempInitialPositionValue();
				break;
				default:
					alert("Choose a variable to solve for");
			}
		}

		function clearFunction(){
			resetTrigAndUnitSelectors();
			resetPlaceholders();
			uncheckRadioBTns();
			resetInputFields();
			resetSlide();
			function resetPlaceholders(){
				displacementField.placeholder = "Displacement";
				finalPositionField.placeholder = "Final Position";
				initialPositionField.placeholder = "Initial Position";
			}
			function uncheckRadioBTns(){
				for(let i = 0; i < solveForBtns.length; i++){
					if(solveForBtns[i].checked){
						solveForBtns[i].checked = false;
					}
				}
				for(let i = 0; i < firstUnits.length; i++){
					if(firstUnits[i].checked){
						firstUnits[i].checked = false;
					}
				}
			}
			function resetInputFields(){
				for(let i = 0; i < numInputFields.length; i++){
					numInputFields[i].value = ""
					if(numInputFields[i].disabled){
						numInputFields[i].disabled = false;
					}
					if(numInputFields[i].type = "text"){
						numInputFields[i].type = "number";
					}
					if(numInputFields[i].classList.contains("yellow-outline")){
						numInputFields[i].classList.remove("yellow-outline");
					}
				}
			}
			function resetSlide(){
				currentSlideIndex = 0;
				switchToSlide();
			}
		}
		/*--- End of Calculations ---*/


		/*--- Move Equation Slides ---*/
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
		var $dispSymbol = $("#disp-symbol").text();
		var $finalPSymbol = $("#final-p-symbol").text();
		var $initialPSymbol = $("#initial-p-symbol").text();
		var $meterUnit = $("#meter-btn").attr("units");
		var $kilometerUnit = $("#kilometer-btn").attr("units");
		var $feetUnit = $("#feet-btn").attr("units");
		var $mileUnit = $("#mile-btn").attr("units");


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
			if(window.innerWidth < 525 && window.innerWidth > 460){
				$(".checkmark").eq(0).text($dispSymbol);
				$(".checkmark").eq(1).text("Final-P");
				$(".checkmark").eq(2).text("Initial-P");
			} else if (window.innerWidth < 460 && window.innerWidth > 381){
				$(".checkmark").eq(0).text($dispSymbol);
				$(".checkmark").eq(1).text("Final-P");
				$(".checkmark").eq(2).text("Initial-P");
				$(".checkmark").eq(3).text($meterUnit);
				$(".checkmark").eq(4).text($mileUnit);
				$(".checkmark").eq(5).text($feetUnit);
				$(".checkmark").eq(6).text($kilometerUnit);
			} else if (window.innerWidth < 381){
				$(".checkmark").eq(0).text($dispSymbol);
				$(".checkmark").eq(1).text("X f");
				$(".checkmark").eq(2).text("X i");
				$(".checkmark").eq(3).text($meterUnit);
				$(".checkmark").eq(4).text($mileUnit);
				$(".checkmark").eq(5).text($feetUnit);
				$(".checkmark").eq(6).text($kilometerUnit);
			}
			 else {
				$(".checkmark").eq(0).text("Displacement");
				$(".checkmark").eq(1).text("Final Position");
				$(".checkmark").eq(2).text("Initial Position");
				$(".checkmark").eq(3).text("Meters");
				$(".checkmark").eq(4).text("Miles");
				$(".checkmark").eq(5).text("Feet");
				$(".checkmark").eq(6).text("Kilometers");
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
			if(window.innerWidth < 525 && window.innerWidth > 460){
				$(".checkmark").eq(0).text($dispSymbol);
				$(".checkmark").eq(1).text("Final-P");
				$(".checkmark").eq(2).text("Initial-P");
			} else if (window.innerWidth < 460 && window.innerWidth > 381){
				$(".checkmark").eq(0).text($dispSymbol);
				$(".checkmark").eq(1).text("Final-P");
				$(".checkmark").eq(2).text("Initial-P");
				$(".checkmark").eq(3).text($meterUnit);
				$(".checkmark").eq(4).text($mileUnit);
				$(".checkmark").eq(5).text($feetUnit);
				$(".checkmark").eq(6).text($kilometerUnit);
			} else if (window.innerWidth < 381){
				$(".checkmark").eq(0).text($dispSymbol);
				$(".checkmark").eq(1).text("X f");
				$(".checkmark").eq(2).text("X i");
				$(".checkmark").eq(3).text($meterUnit);
				$(".checkmark").eq(4).text($mileUnit);
				$(".checkmark").eq(5).text($feetUnit);
				$(".checkmark").eq(6).text($kilometerUnit);
			} else {
				$(".checkmark").eq(0).text("Displacement");
				$(".checkmark").eq(1).text("Final Position");
				$(".checkmark").eq(2).text("Initial Position");
				$(".checkmark").eq(3).text("Meters");
				$(".checkmark").eq(4).text("Miles");
				$(".checkmark").eq(5).text("Feet");
				$(".checkmark").eq(6).text("Kilometers");
			}
		})
