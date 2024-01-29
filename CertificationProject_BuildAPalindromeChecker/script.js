const inputForm = document.getElementById("form");
const resultDiv = document.getElementById("result");

inputForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const userTextInput = event.target.elements.textInput.value;

  if (userTextInput === "") {
    alert("Please input a value");
    return;
  }

  const lowercasedUserTextInput = userTextInput.toLowerCase();
  const regex = /[^a-z\d]/g;
  const clearedUserTextInput = lowercasedUserTextInput.replace(regex, "");
  const reversedClearedUserTextInput = clearedUserTextInput
    .split("")
    .reverse()
    .join("");

  if (clearedUserTextInput === reversedClearedUserTextInput) {
    resultDiv.innerHTML = `<strong>${userTextInput}</strong> is a palindrome`;
    event.target.reset();
  } else {
    resultDiv.innerHTML = `<strong>${userTextInput}</strong> is not a palindrome`;
    event.target.reset();
  }

  console.log("userTextInput: ", userTextInput);
  console.log("lowercasedUserTextInput: ", lowercasedUserTextInput);
  console.log("clearedUserTextInput: ", clearedUserTextInput);
  console.log("reversedClearedUserTextInput: ", reversedClearedUserTextInput);
});
