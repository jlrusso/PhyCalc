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



window.onload = function(){
	var openSearchBtn = document.getElementById("open-search-btn"),
		openSearchBtnTwo = document.getElementById("open-search-btn-two"),
		searchSection = document.getElementById("search-section"),
		searchBar = document.getElementById("search-bar"),
		closeSearchBtn = document.getElementById("close-search-btn");

	openSearchBtn.addEventListener("click", openSearchSection);
	openSearchBtnTwo.addEventListener("click", openSearchSection);

	function openSearchSection(){
		searchSection.style.top = "50px";
		searchSection.style.width = "100%";
	}

	closeSearchBtn.addEventListener("click", function(){
		searchSection.style.top = "-100px";
	});
	


	function showList() {
		if (navSearchBar.value.length > 0){
			caseList.classList.add('show');
			navSearchBar.style.borderRadius = "10px 10px 0 0";
			showAnchors();
		} else {
			caseList.classList.remove('show');
			navSearchBar.style.borderRadius = "10px";
		}
	}

	function showAnchors(){
		let inputValue = navSearchBar.value.toUpperCase();
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

	window.onclick = function(event){
		if (!event.target.matches('#nav-search-bar')){
			if (caseList.classList.contains('show')){
				caseList.classList.remove('show');
				navSearchBar.style.borderRadius = "10px";
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
}


	/*--- Topic Calculators ---*/
	var objectBtns = document.getElementsByClassName("object-btn"),
		oneObjectBtn = document.getElementById("one-object-radio-btn"),
		twoObjectsBtn = document.getElementById("two-objects-radio-btn");

	var solveBtns = document.getElementsByClassName("solve-btn"),
		solveForceBtn = document.getElementById("solve-force-btn"),
		solveGravityBtn = document.getElementById("solve-gravity-btn"),
		solveSmallMassBtn = document.getElementById("solve-small-mass-btn"),
		solveBigMassBtn = document.getElementById("solve-big-mass-btn"),
		solveRadiusBtn = document.getElementById("solve-radius-btn");

	var unitBtns = document.getElementsByClassName("unit-btn"),
		newtonsBtn = document.getElementById("newtons-radio-btn"),
		kilogramsBtn = document.getElementById("kilograms-radio-btn"),
		metersBtn = document.getElementById("meters-radio-btn"),
		acclUnits = document.getElementById("accl-units-radio-btn"),
		gravitationalConstant = (6.7*10**-11);

	var inputFields = document.getElementsByClassName("input-field"),
		forceField = document.getElementById("gravitational-force-field"),
		gravityField = document.getElementById("gravity-field"),
		smallMassField = document.getElementById("small-mass-field"),
		bigMassField = document.getElementById("big-mass-field"),
		centersDistance = document.getElementById("radius-field"),
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

	for(let i = 0; i < objectBtns.length; i++){
		objectBtns[i].addEventListener("click", objectCheckedFunc);
	}

	for(let i = 0; i < solveBtns.length; i++){
		solveBtns[i].addEventListener("click", solveForBtnFunction);
	}

	function objectCheckedFunc(){
		for(let i = 0; i < solveBtns.length; i++){
			if(solveBtns[i].disabled){
				solveBtns[i].disabled = false;
			}
			if(solveBtns[i].checked){
				solveBtns[i].checked = false;
			}
		}
		for(let i = 0; i < inputFields.length; i++){
			inputFields[i].value = "";
			if (inputFields[i].disabled){
				inputFields[i].disabled = false;
			}
		}

		for(let i = 0; i < unitBtns.length; i++){
			unitBtns[i].disabled = false;
			unitBtns[i].checked = false;
		}
		forceField.placeholder = "Force (F)";
		smallMassField.placeholder = "mass (m)";
		bigMassField.placeholder = "Mass (M)";
		gravityField.placeholder = "gravity (g)";
		centersDistance.placeholder = "distance (r)"

		if(oneObjectBtn.checked){
			solveSmallMassBtn.disabled = true;
			solveForceBtn.disabled = true;
			smallMassField.disabled = true;
			forceField.disabled = true;
			currentSlideIndex = 0;
			switchToSlide();
		} else if (twoObjectsBtn.checked){
			solveGravityBtn.disabled = true;
			gravityField.disabled = true;
		}
		
	}

	function solveForBtnFunction(){

		function resetInputFields(){
			forceField.placeholder = "Force (F)";
			gravityField.placeholder = "gravity (g)";
			smallMassField.placeholder = "mass (m)";
			bigMassField.placeholder = "Big Mass (M)";
			centersDistance.placeholder = "distance (r)";

			for(let i = 0; i < inputFields.length; i++){
				inputFields[i].disabled = false;
				inputFields[i].value = "";
				if(inputFields[i].classList.contains("yellow-outline")){
					inputFields[i].classList.remove("yellow-outline");
				}
			}
			for(let i = 0; i < objectBtns.length; i++){
				if(oneObjectBtn.checked){
					forceField.disabled = true;
					smallMassField.disabled = true;
				} else {
					gravityField.disabled = true;
				}
			}
		}
		resetInputFields();

		function resetUnitBtns(){
			for(let i = 0; i < unitBtns.length; i++){
				unitBtns[i].disabled = true;
				if (unitBtns[i].checked){
					unitBtns[i].checked = false;
				}
			}
		}
		resetUnitBtns();

		switch(true){
			case (solveGravityBtn.checked):
				acclUnits.checked = true;
				acclUnits.disabled = false;
				gravityField.type = "text";
				gravityField.placeholder = "Calculating (g)..";
				gravityField.classList.add("yellow-outline");
				gravityField.disabled = true;
				currentSlideIndex = 0;
				switchToSlide();
			break;
			case (solveSmallMassBtn.checked):
				kilogramsBtn.checked = true;
				kilogramsBtn.disabled = false;
				smallMassField.type = "text";
				smallMassField.placeholder = "Calculating (m)..";
				smallMassField.classList.add("yellow-outline");
				smallMassField.disabled = true;
				currentSlideIndex = 6;
				switchToSlide();
			break;
			case (solveBigMassBtn.checked && !twoObjectsBtn.checked):
				kilogramsBtn.checked = true;
				kilogramsBtn.disabled = false;
				bigMassField.type = "text";
				bigMassField.placeholder = "Calculating (M)..";
				bigMassField.classList.add("yellow-outline");
				bigMassField.disabled = true;
				currentSlideIndex = 1;
				switchToSlide();
			break;
			case (solveBigMassBtn.checked && twoObjectsBtn.checked):
				kilogramsBtn.checked = true;
				kilogramsBtn.disabled = false;
				bigMassField.type = "text";
				bigMassField.placeholder = "Calculating (M)..";
				bigMassField.classList.add("yellow-outline");
				bigMassField.disabled = true;
				currentSlideIndex = 5;
				switchToSlide();
			break;
			case (solveRadiusBtn.checked && !twoObjectsBtn.checked): 
				metersBtn.checked = true;
				metersBtn.disabled = false;
				centersDistance.type = "text";
				centersDistance.placeholder = "Calculating (r)..";
				centersDistance.classList.add("yellow-outline");
				centersDistance.disabled = true;
				currentSlideIndex = 2;
				switchToSlide();
			break;
			case (solveRadiusBtn.checked && twoObjectsBtn.checked): 
				metersBtn.checked = true;
				metersBtn.disabled = false;
				centersDistance.type = "text";
				centersDistance.placeholder = "Calculating (r)..";
				centersDistance.classList.add("yellow-outline");
				centersDistance.disabled = true;
				currentSlideIndex = 4;
				switchToSlide();
			break;
			case (solveForceBtn.checked):
				newtonsBtn.checked = true;
				newtonsBtn.disabled = false;
				forceField.type = "text";
				forceField.placeholder = "Calculating (F)..";
				forceField.classList.add("yellow-outline");
				forceField.disabled = true;
				currentSlideIndex = 3;
				switchToSlide();
			break;
		}
	}



	function calculateFunc(){
		switch(true){
			case (solveGravityBtn.checked):
				function setTempGravity(){
					var tempGravity = (gravitationalConstant * bigMassField.value) / Math.pow(centersDistance.value, 2);
					function setFinalGravity(){
						if(tempGravity.toString().length > 9){
							gravityField.value = tempGravity.toPrecision(sigFigsField.value || 9) + " N";
						} else {
							gravityField.value = tempGravity.toPrecision(sigFigsField.value || tempGravity.toString().length) + " N";
						}
					}
					setFinalGravity();
				}
				setTempGravity();
			break;
			case (solveBigMassBtn.checked && !twoObjectsBtn.checked):
				function setTempBigMass(){
					var tempBigMass = (gravityField.value * Math.pow(centersDistance.value, 2)) / gravitationalConstant;
					function setFinalBigMass(){
						if(tempBigMass.toString().length > 9){
							bigMassField.value = tempBigMass.toPrecision(sigFigsField.value || 9) + " kg";
						} else {
							bigMassField.value = tempBigMass.toPrecision(sigFigsField.value || tempBigMass.toString().length) + " kg";
						}
					}
					setFinalBigMass();
				}
				setTempBigMass();
			break;
			case (solveRadiusBtn.checked && !twoObjectsBtn.checked):
				function setTempRadius(){
					var tempRadius = Math.sqrt(gravitationalConstant * bigMassField.value / gravityField.value);
					function setFinalRadius(){
						if(tempRadius.toString().length > 9){
							centersDistance.value = tempRadius.toPrecision(sigFigsField.value || 9) + " m";
						} else {
							centersDistance.value = tempRadius.toPrecision(sigFigsField.value || tempRadius.toString().length) + " m";
						}
					}
					setFinalRadius();
				}
				setTempRadius();
			break;
			case (solveForceBtn.checked):
				function setTempForce(){
					var tempForce = gravitationalConstant * bigMassField.value * smallMassField.value / Math.pow(centersDistance.value, 2);
					function setFinalForce(){
						if(tempForce.toString().length > 9){
							forceField.value = tempForce.toPrecision(sigFigsField.value || 9) + " N";
						} else {
							forceField.value = tempForce.toPrecision(sigFigsField.value || tempForce.toString().length) + " N";
						}
					}
					setFinalForce();
				}
				setTempForce();
			break;
			case (solveRadiusBtn.checked && twoObjectsBtn.checked):
				function setTempRadiusTwo(){
					var tempRadius = Math.sqrt(gravitationalConstant * bigMassField.value * smallMassField.value / forceField.value);
					function setFinalRadiusTwo(){
						if(tempRadius.toString().length > 9){
							centersDistance.value = tempRadius.toPrecision(sigFigsField.value || 9) + " m";
						} else {
							centersDistance.value = tempRadius.toPrecision(sigFigsField.value || tempRadius.toString().length) + " m";
						}
					}
					setFinalRadiusTwo();
				}
				setTempRadiusTwo();
			break;
			case (solveBigMassBtn.checked && twoObjectsBtn.checked):
				function setTempBigMassTwo(){
					var tempBigMass = forceField.value * (Math.pow(centersDistance.value, 2)) / (gravitationalConstant * smallMassField.value);
					function setFinalBigMassTwo(){
						if(tempBigMass.toString().length > 9){
							bigMassField.value = tempBigMass.toPrecision(sigFigsField.value || 9) + " kg";
						} else {
							bigMassField.value = tempBigMass.toPrecision(sigFigsField.value || tempBigMass.toString().length) + " kg";
						}
					}
					setFinalBigMassTwo();
				}
				setTempBigMassTwo();
			break;
			case (solveSmallMassBtn.checked && twoObjectsBtn.checked):
				function setTempSmallMassTwo(){
					var tempSmallMass = forceField.value * (Math.pow(centersDistance.value, 2)) / (gravitationalConstant * bigMassField.value);
					function setFinalSmallMassTwo(){
						if(tempSmallMass.toString().length > 9){
							smallMassField.value = tempSmallMass.toPrecision(sigFigsField.value || 9) + " kg";
						} else {
							smallMassField.value = tempSmallMass.toPrecision(sigFigsField.value || 9) + " kg";
						}
					}
					setFinalSmallMassTwo();
				}
				setTempSmallMassTwo();
			break;
			default:
				alert("Select variable to solve for");
		}
	}


	function clearFunc(){
		forceField.placeholder = "Force (F)";
		gravityField.placeholder = "Gravity (g)";
		smallMassField.placeholder = "mass (m)";
		bigMassField.placeholder = "Mass (M)";
		centersDistance.placeholder = "radius (r)";
		sigFigsField.placeholder = "# of sigFigs (optional)";

		for(let i = 0; i < inputFields.length; i++){
			inputFields[i].value = "";
			if(inputFields[i].disabled){
				inputFields[i].disabled = false;
			}
			if(inputFields[i].classList.contains("yellow-outline")){
				inputFields[i].classList.remove("yellow-outline");
			}
		}
		for(let i = 0; i < objectBtns.length; i++){
			objectBtns[i].checked = false;
		}

		for(let i = 0; i < solveBtns.length; i++){
			if(solveBtns[i].checked){
				solveBtns[i].checked = false;
			}
			if(solveBtns[i].disabled){
				solveBtns[i].disabled = false;
			}
		}

		for(let i = 0; i < unitBtns.length; i++){
			if(unitBtns[i].checked){
				unitBtns[i].checked = false;
			}
			if(unitBtns[i].disabled){
				unitBtns[i].disabled = false;
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
/*--- End of Equation Images ---*/


/*--- Changing Module Images ---*/
var moduleImageContainer = document.getElementById("module-img-inner"),
	imageAndCap = document.getElementsByClassName("img-and-caption"),
	currentModuleImage = 0,
	prevBtn2 = document.getElementById("module-left-arrow"),
	nextBtn2 = document.getElementById("module-right-arrow"),
	moduleWidth = 100;

	prevBtn2.addEventListener("click", prevModuleImage);
	nextBtn2.addEventListener("click", nextModuleImage);

	function switchModuleImage(){
		console.log(currentModuleImage);
		moduleImageContainer.style.left = -moduleWidth * currentModuleImage + "%";
	}
	switchModuleImage();

	function prevModuleImage(){
		currentModuleImage--;
		if(currentModuleImage < 0){
			currentModuleImage = imageAndCap.length - 1;
		}
		switchModuleImage();
	}

	function nextModuleImage(){
		currentModuleImage++;
		if(currentModuleImage >= imageAndCap.length){
			currentModuleImage = 0;
		}
		switchModuleImage();
	}
/*--- End of Module Images ---*/

	



