function convertKmToMiles() {
    const kmInput = document.getElementById("km-input").value;
    const milesOutput = document.getElementById("miles-output");

    const miles = kmInput * 0.621371;

    milesOutput.innerText = miles + " miles";
  }

  