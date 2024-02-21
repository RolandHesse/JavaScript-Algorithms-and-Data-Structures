const input = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");

// let residuum;
// let outputArray = [];

const transform1051 = (
  highArabic,
  middleArabic,
  lowArabic,
  highRoman,
  middleRoman,
  lowRoman
) => {
  residuum = input.value % highArabic;

  const numberOfMiddleArabicsInResiduum = Math.floor(residuum / middleArabic);
  residuum = residuum % middleArabic;
  const numberOfLowArabicsInResiduumOfResiduum = Math.floor(
    residuum / lowArabic
  );

  if (numberOfMiddleArabicsInResiduum === 1) {
    if (numberOfLowArabicsInResiduumOfResiduum === 0) {
      outputArray.push(middleRoman);
    } else if (numberOfLowArabicsInResiduumOfResiduum < 4) {
      outputArray.push(middleRoman);
      for (let i = 0; i < numberOfLowArabicsInResiduumOfResiduum; i++) {
        outputArray.push(lowRoman);
      }
    } else if (numberOfLowArabicsInResiduumOfResiduum === 4) {
      outputArray.push(lowRoman + highRoman);
    }
  }

  if (numberOfMiddleArabicsInResiduum === 0) {
    if (numberOfLowArabicsInResiduumOfResiduum < 4) {
      for (let i = 0; i < numberOfLowArabicsInResiduumOfResiduum; i++) {
        outputArray.push(lowRoman);
      }
    }
    if (numberOfLowArabicsInResiduumOfResiduum === 4) {
      outputArray.push(lowRoman + middleRoman);
    }
  }
};

convertButton.addEventListener("click", (e) => {
  e.preventDefault();

  outputArray = [];
  output.textContent = "";

  {
    if (!input.value) {
      output.textContent = "Please enter a valid number";
      return;
    }
    if (input.value < 1) {
      output.textContent = "Please enter a number greater than or equal to 1";
      return;
    }
    if (input.value > 3999) {
      output.textContent = "Please enter a number less than or equal to 3999";
      return;
    }

    const thousands = Math.floor(input.value / 1000);
    for (let i = 0; i < thousands; i++) {
      outputArray.push("M");
    }

    transform1051(1000, 500, 100, "M", "D", "C");
    transform1051(100, 50, 10, "C", "L", "X");
    transform1051(10, 5, 1, "X", "V", "I");

    const outputString = outputArray.join("");
    output.textContent = outputString;
  }
});
