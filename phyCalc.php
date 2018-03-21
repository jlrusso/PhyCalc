<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>PhyCalc | Physics Calculators</title>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet">
	<link rel="stylesheet" href="phyCalc.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
		<nav class="clearfix">
			<div class="nav-logo animated fadeInRight"><a href="phyCalc.php">PhyCalc</a></div>
			<div class="navigation animated fadeInLeft">
				<ul class="horizontal-nav">
					<li><a href="#" id="contact-btn">Contact</a></li>
					<li><a href="#" id="calculator-btn">Calculator</a></li>
					<li><a href="#" id="conversion-btn">Conversions</a></li>
					<li><a href="#" id="horizontal-search-btn"><i class="glyphicon glyphicon-search"></i></a></li>
				</ul>
				<div class="animated fadeInLeft" id="icon">
					<div id="vertical-search-btn"><i class="glyphicon glyphicon-search"></i></div>
					<div id="click-box"></div>
					<span id="hamburger-menu"></span>
					<div class="vertical-nav">
						<ul>
							<li><a href="#" id="vert-contact-btn">Contact</a></li>
							<li><a href="#" id="vert-calculator-btn">Calculator</a></li>
							<li><a href="#" id="vert-conversion-btn">Conversions</a></li>
						</ul>
					</div>
				</div>
			</div>
		</nav>

		<div id="search-container">
			<div id="search-form">
				<input type="text" id="search-bar"/>
				<div id="search-btn"><i class="glyphicon glyphicon-search"></i></div>
			</div>
			<div id="close-search-btn">
				<span id="close-bar-one"></span>
				<span id="close-bar-two"></span>
			</div>
			<div id="search-case-list">
				<a href="displacement.html">displacement</a>
				<a href="displacement.html">initial position</a>
				<a href="displacement.html">final position</a>
				<a href="vectorDisplacement.html">vectors</a>
				<a href="vectorDisplacement.html">vector displacement</a>
				<a href="velocity.html">velocity</a>
				<a href="velocity.html">time interval</a>
				<a href="velocity.html">displacement for velocity</a>
				<a href="velocity.html">acceleration</a>
			</div>
		</div>

		<div class="banner">
			<div id="banner-inner">
				<p id="banner-heading">Physics problems? Find solutions.</p>
				<span id="get-started-btn">Get Started</span>
			</div>
		</div>

		<div class="how-it-works-section">
			<div class="row text-center">
				<div class="col-md-4">
					<img src="../img/search-icon.png" alt="Search Icon"/>
					<div class="hiw-caption">
						<p>Search our database by topic or topic-related terms</p>
					</div>
				</div>
				<div class="col-md-4">
					<img src="../img/review-icon.png" alt="Review Icon"/>
					<div class="hiw-caption">
						<p>Review practice problems and step by step solutions</p>
					</div>
				</div>
				<div class="col-md-4">
					<img src="../img/solution-icon.png" alt="Solution Icon"/>
					<div class="hiw-caption">
						<p>Solve your own problems by inputing given variables</p>
					</div>
				</div>
			</div>
		</div>

		<div id="main-content">
			<div id="features-heading-container">
				<div class="animated fadeInLeftBig" id="featured-topic-heading">Featured Topics</div>
			</div>
			<div class="row card-row">
				<div class="col-md-3">
					<a href="displacement.html">
						<div class="card" href="displacement.html">
							<div class="button-to-page">View Topic</div>
							<img src="../img/home-displacement.png" class="responsive">
							<div class="caption">
								<h4 class="text-center">Displacement</h4>
								<div class="line-divider"></div>
								<ul class="text-center">
									<li>Net Distance</li>
									<li>Starting Position</li>
									<li>Final Position</li>
								</ul>
							</div>
						</div>
					</a>
				</div>
				<div class="col-md-3">
					<a href="vectorDisplacement.html">
						<div class="card">
							<div class="button-to-page">View Topic</div>
							<img src="../img/2d-displacement.png" class="img-responsive">
							<div class="caption text-center">
								<h4>2D Displacement</h4>
								<div class="line-divider"></div>
								<ul>
									<li>Trigonometry</li>
									<li>Vector Travel</li>
									<li>Two-dimensional</li>
								</ul>
							</div>
						</div>
					</a>
				</div>
				<div class="col-md-3">
					<a href="velocity.html">
						<div class="card">
							<div class="button-to-page">View Topic</div>
							<img src="../img/home-velocity.png" class="img-responsive">
							<div class="caption text-center">
								<h4>Velocity</h4>
								<div class="line-divider"></div>
								<ul>
									<li>Vector Travel</li>
									<li>Direction</li>
									<li>Speed v. Velocity</li>
								</ul>
							</div>
						</div>
					</a>
				</div>
				<div class="col-md-3">
					<a href="kinematicsBigFive.html">
						<div class="card">
							<div class="button-to-page">View Topic</div>
							<img src="../img/home-motion-2d.png" class="img-responsive">
							<div class="caption text-center">
								<h4>Kinematics: Big 5</h4>
								<div class="line-divider"></div>
								<ul>
									<li>Velocity</li>
									<li>Time &amp; Acceleration</li>
									<li>Position</li>
								</ul>
							</div>
						</div>
					</a>
				</div>
			</div>
			<div class="row card-row">
				<div class="col-md-3">
					<a href="acceleration.html">
						<div class="card">
							<div class="button-to-page">View Topic</div>
							<img src="../img/home-acceleration.png" class="img-responsive">
							<div class="caption text-center">
								<h4>Acceleration</h4>
								<div class="line-divider"></div>
								<ul>
									<li>&Delta;Velocity</li>
									<li>Gravity</li>
									<li>Slowing v. Speeding</li>
								</ul>
							</div>
						</div>
					</a>
				</div>
				<div class="col-md-3">
					<a href="circularMotion.html">
						<div class="card">
							<div class="button-to-page">View Topic</div>
							<img src="../img/home-circular.png" class="img-responsive">
							<div class="caption text-center">
								<h4>Circular Motion</h4>
								<div class="line-divider"></div>
								<ul>
									<li>Revolutions</li>
									<li>Period</li>
									<li>Radius &amp; Speed</li>
								</ul>
							</div>
						</div>
					</a>
				</div>
				<div class="col-md-3">
					<a href="oneDimensionalForces.html">
						<div class="card">
							<div class="button-to-page">View Topic</div>
							<img src="../img/home-force.png" class="img-responsive">
							<div class="caption text-center">
								<h4>Forces</h4>
								<div class="line-divider"></div>
								<ul>
									<li>Newton's Laws</li>
									<li>Types of Forces</li>
									<li>Vector Forces</li>
								</ul>
							</div>
						</div>
					</a>
				</div>
				<div class="col-md-3">
					<a href="gravitationalForces.html">
						<div class="card">
							<div class="button-to-page">View Topic</div>
							<img src="../img/home-angle-force.png" class="img-responsive">
							<div class="caption text-center">
								<h4>Gravity Forces</h4>
								<div class="line-divider"></div>
								<ul>
									<li>Law of Gravitation</li>
									<li>Gravitational Forces</li>
									<li>Inverse Square Law</li>
								</ul>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>

		<div id="conversion-section">
			<div id="conversion-container">
				<div id="conversion-heading">Unit Conversions</div>
				<div class="input-option-input">
					<input type="number" id="unit-input-field" max="999" placeholder="(input)"/>
					<select name="unitConversions" id="unit-converter">
						<option value="mmToM" id="millimetersToCentimeters" selected>mm to cm</option>
						<option value="mToMm" id="centimetersToMillimeters">cm to mm</option>
						<option value="cmToM" id="centimetersToMeters">cm to m</option>
						<option value="mtoCm" id="metersToCentimeters">m to cm</option>
						<option value="mToKm" id="metersTokilometers">m to km</option>
						<option value="kmToM" id="kilometersToMeters">km to m</option>
						<option value="mToMi" id="metersToMiles">m to mi</option>
						<option value="miToM" id="milesToMeters">mi to m</option>
						<option value="mToMi" id="metersToMiles">m to mi</option>
						<option value="kmToMi" id="kilometersToMiles">km to mi</option>
						<option value="miToKm" id="milesToKilometers">mi to km</option>
						<option value="ftToYds" id="feetToYards">ft to yds</option>
						<option value="ydsToFt" id="yardsToFeet">yds to ft</option>
						<option value="ftToM" id="feetToMeters">ft to m</option>
						<option value="mToFt" id="metersToFeet">m to ft</option>
						<option value="inToCm" id="inchesToCentimeters">in to cm</option>
						<option value="cmToIn" id="centimetersToInches">cm to in</option>
						<option value="mgToG" id="milligramsToGrams">mg to g</option>
						<option value="gToMg" id="gramsToMilligrams">g to mg</option>
						<option value="gToKg" id="gramsToKilograms">g to kg</option>
						<option value="kgToG" id="kilogramsToGrams">kg to g</option>
						<option value="lbsToKg" id="poundsToKilograms">lbs to kg</option>
						<option value="kgToLbs" id="kilogramsToPounds">kg to lbs</option>
						<option value="km2Tom2" id="kilometerSquaredToSquareMeters">km² to m²</option>
						<option value="m2ToKm2" id="squareMetersToKilometersSquared">m² to km²</option>-->
					</select>
					<input type="text" id="unit-output-field" placeholder="(output)" disabled="disabled">
				</div>
			</div>
		</div>

		<div id="calculator-container">
			<div class="calculator-whole">
				<input type="text" id="input-field">
				<div class="row">
					<div class="col-half">
						<div id="radians-container">
							<button type="button" id="radians-btn">Radians</button>
							<span id="radians-indicator"></span>
						</div>
					</div>
					<div class="col-half">
						<div id="degrees-container">
							<button type="button" id="degrees-btn">Degrees</button>
							<span id="degrees-indicator"></span>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-fourth">
						<button type="button" class="trig-btn">sin</button>
					</div>
					<div class="col-fourth">
						<button type="button" class="trig-btn">cos</button>
					</div>
					<div class="col-fourth">
						<button type="button" class="trig-btn">tan</button>
					</div>
					<div class="col-fourth">
						<button type="button" class="reg-btn pi-btn">&pi;</button>
					</div>
				</div>
				<div class="row">
					<div class="col-fourth">
						<button type="button" class="trig-btn">sin<sup>-1</sup></button>
					</div>
					<div class="col-fourth">
						<button type="button" class="trig-btn">cos<sup>-1</sup></button>
					</div>
					<div class="col-fourth">
						<button type="button" class="trig-btn">tan<sup>-1</sup></button>
					</div>
					<div class="col-fourth">
						<button type="button" class="reg-btn">/</button>
					</div>
				</div>
				<div class="row">
					<div class="col-fourth">
						<button type="button" class="reg-btn">7</button>
					</div>
					<div class="col-fourth">
						<button type="button" class="reg-btn">8</button>
					</div>
					<div class="col-fourth">
						<button type="button" class="reg-btn">9</button>
					</div>
					<div class="col-fourth">
						<button type="button" class="reg-btn"><b>*</b></button>
					</div>
				</div>
				<div class="row">
					<div class="col-fourth">
						<button type="button" class="reg-btn">4</button>
					</div>
					<div class="col-fourth">
						<button type="button" class="reg-btn">5</button>
					</div>
					<div class="col-fourth">
						<button type="button" class="reg-btn">6</button>
					</div>
					<div class="col-fourth">
						<button type="button" class="reg-btn">-</button>
					</div>
				</div>
				<div class="row">
					<div class="col-fourth">
						<button type="button" class="reg-btn">1</button>
					</div>
					<div class="col-fourth">
						<button type="button" class="reg-btn">2</button>
					</div>
					<div class="col-fourth">
						<button type="button" class="reg-btn">3</button>
					</div>
					<div class="col-fourth">
						<button type="button" class="reg-btn">+</button>
					</div>
				</div>
				<div class="row">
					<div class="col-fourth">
						<button type="button" class="reg-btn">0</button>
					</div>
					<div class="col-fourth">
						<button type="button" class="reg-btn"><b>.</b></button>
					</div>
					<div class="col-fourth">
						<button type="button" id="square-btn">x<sup>2</sup></button>
					</div>
					<div class="col-fourth">
						<button type="button" id="nth-power">x<sup>n</sup></button>
					</div>
				</div>
			 	<div class="row">
					<div class="col-fourth">
						<button type="button" id="square-root-btn">&radic;</button>
					</div>
					<div class="col-fourth">
						<button type="button" class="reg-btn">(</button>
					</div>
					<div class="col-fourth">
						<button type="button" class="reg-btn">)</button>
					</div>
					<div class="col-fourth">
						<button type="button" id="ten-power">EE</button>
					</div>
				</div>
				<div class="row">
					<div class="col-fourth">
						<button type="button" id="calculator-calculate-btn">=</button>
					</div>
					<div class="col-fourth">
						<button type="button" id="calculator-clear-btn">Clear</button>
					</div>
					<div class="col-fourth">
						<button type="button" id="delete-btn">Del</button>
					</div>
					<div class="col-fourth">
						<input type="number" id="sig-fig-field" placeholder="sigfigs"/>
					</div>
				</div>
			</div>
			<div id="calculator-tooltip"></div>
		</div>


		<div id="contact-container">
			<h2>Get in Touch</h2>
			<form action="includes/contact.php" method="POST">
				<?php
					if(isset($_GET['fullname'])){
						echo "<input type='text' name='fullname' placeholder='Full name' value='" . $_GET['fullname'] . "' maxlength='30' required='required'/>";
						echo "<input type='email' name='email' placeholder='Email' required='required'/>";
					} else {
						echo "<input type='text' name='fullname' placeholder='Full name' maxlength='30' required='required'/>";
						echo "<input type='email' name='email' placeholder='Email' required='required'/>";
					}
					if(isset($_GET['subject'])){
						echo "<input type='text' name='subject' placeholder='Subject' maxlength='30' value='" . $_GET['subject'] . "'/>";
					} else {
						echo "<input type='text' name='subject' placeholder='Subject' maxlength='30'/>";
					}
					if(isset($_GET['message'])){
						echo "<textarea name='message' rows='8' cols='80' placeholder='Message' maxlength='500'>" . $_GET['message'] . "</textarea>";
					} else {
						echo "<textarea name='message' rows='8' cols='8' placeholder='Message' maxlength='500'></textarea>";
					}
				?>
				<input type="submit" name="submit" value="Submit" id="contact-submit-btn"/>
			</form>
		</div>

		<!-- Go back to top -->
		<div id="go-up-container">
			<button type="button" id="go-up-btn"><span class="glyphicon glyphicon-chevron-up"></span></button>
		</div>

		<div id="credits-section">
			<div class="credits-inner text-center">Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
		</div>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script type="text/javascript" src="jsCalculator.js"></script>
	<script type="text/javascript" src="phyCalc.js"></script>


</html>
