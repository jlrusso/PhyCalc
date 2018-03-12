window.onload = function(){
	var horizontalSearchBtn = document.getElementById("horizontal-search-btn"),
		verticalSearchBtn = document.getElementById("vertical-search-btn"),
		searchSection = document.getElementById("search-section"),
		searchBar = document.getElementById("search-bar"),
		closeSearchBtn = document.getElementById("close-search-btn"),
		caseList = document.getElementById("search-case-list");

	horizontalSearchBtn.addEventListener("click", openSearchSection);
	verticalSearchBtn.addEventListener("click", openSearchSection);
	searchBar.addEventListener("input", showList);
	closeSearchBtn.addEventListener("click", closeSearchSection);

	function openSearchSection(){
		if(!searchSection.classList.contains("active-search")){
			searchSection.classList.toggle("active-search");
			searchBar.focus();
		} else {
			searchSection.classList.remove("active-search");
			caseList.classList.remove("show");
			searchBar.value = "";
		}
	} 

	function closeSearchSection(){
		if(searchSection.classList.contains("active-search")){
			searchSection.classList.remove("active-search");
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

	
	



	/*--- End of Hamburger Menu ---*/
}; //closing bracket for onload function









$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();

	$("#get-started-btn").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#featured-topic-heading").offset().top - 10
	        }, 'slow'); //scroll from top to selector
	});

});






