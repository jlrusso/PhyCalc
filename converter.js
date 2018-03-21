  var userInput = document.getElementById('unitInputField');
  var unitOutput = document.getElementById('unitOutputField');
  var unitC = document.getElementById('unitConverter');
  userInput.addEventListener('input', convertUnit);
  userInput.addEventListener('change', convertUnit);
  unitC.addEventListener('change', convertUnit);

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
