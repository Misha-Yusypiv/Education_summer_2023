function calculateTax() {
    var rentCost = document.getElementById("rentCost").value;
    var serviceCost = document.getElementById("serviceCost").value;
    var taxRate = document.getElementById("taxRate").value;
    var tax = ((rentCost - serviceCost) * (taxRate / 100)).toFixed(2);
    document.getElementById("result").innerHTML = "Податок на оренду нерухомості: " + tax + " доларів США";
  }

  function calculateProposedRent() {
    var currentRent = document.getElementById("currentRent").value;
    var rentIncrease = document.getElementById("rentIncrease").value;
    var rentDuration = document.getElementById("rentDuration").value;
    var proposedRent = (currentRent * Math.pow((1 + (rentIncrease / 100)), rentDuration)).toFixed(2);
    document.getElementById("result").innerHTML = "Пропонована вартість оренди: " + proposedRent + " доларів США";
  }
  