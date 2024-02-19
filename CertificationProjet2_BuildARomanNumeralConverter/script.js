const input = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertButton.addEventListener("click", () => {
  const outputArray = [];
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

    let residuum;

    const thousands = Math.floor(input.value / 1000);
    for (let i = 0; i < thousands; i++) {
      outputArray.push("M");
    }
    residuum = input.value % 1000;

    const fivehundreds = Math.floor(residuum / 500);
    residuum = residuum % 500;
    const hundreds = Math.floor(residuum / 100);

    if (fivehundreds === 1) {
      if (hundreds === 0) {
        outputArray.push("D");
      } else if (hundreds < 4) {
        outputArray.push("D");
        for (let i = 0; i < hundreds; i++) {
          outputArray.push("C");
        }
      } else if (hundreds === 4) {
        outputArray.push("CM");
      }
    }

    if (fivehundreds === 0) {
      if (hundreds < 4) {
        for (let i = 0; i < hundreds; i++) {
          outputArray.push("C");
        }
      }
      if (hundreds === 4) {
        outputArray.push("CD");
      }
    }

    residuum = residuum % 100;

    const fifties = Math.floor(residuum / 50);
    residuum = residuum % 50;
    const tens = Math.floor(residuum / 10);

    if (fifties === 1) {
      if (tens === 0) {
        outputArray.push("L");
      } else if (tens < 4) {
        outputArray.push("L");
        for (let i = 0; i < tens; i++) {
          outputArray.push("X");
        }
      } else if (tens === 4) {
        outputArray.push("XC");
      }
    }

    if (fifties === 0) {
      if (tens < 4) {
        for (let i = 0; i < tens; i++) {
          outputArray.push("X");
        }
      }
      if (tens === 4) {
        outputArray.push("XL");
      }
    }

    residuum = residuum % 10;

    const fives = Math.floor(residuum / 5);
    residuum = residuum % 5;
    const ones = Math.floor(residuum / 1);

    if (fives === 1) {
      if (ones === 0) {
        outputArray.push("V");
      } else if (ones < 4) {
        outputArray.push("V");
        for (let i = 0; i < ones; i++) {
          outputArray.push("I");
        }
      } else if (ones === 4) {
        outputArray.push("IX");
      }
    }

    if (fives === 0) {
      if (ones < 4) {
        for (let i = 0; i < ones; i++) {
          outputArray.push("I");
        }
      }
      if (ones === 4) {
        outputArray.push("IV");
      }
    }

    const outputString = outputArray.join("");
    output.innerText = outputString;

    console.log("outputArray: ", outputArray);
    console.log("outputString: ", outputString);
    console.log("residuum: ", residuum);
  }
});
