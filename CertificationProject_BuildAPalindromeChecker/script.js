const inputForm = document.getElementById("form");
const resultDiv = document.getElementById("result");

function confetti() {
  function random(max) {
    return Math.random() * max;
  }

  const documentFragment = document.createDocumentFragment();

  for (let i = 0; i < 100; i++) {
    let styles =
      "transform: translate3d(" +
      (random(500) - 250) +
      "px, " +
      (random(200) - 150) +
      "px, 0) rotate(" +
      random(360) +
      "deg);\
                background: hsla(" +
      random(360) +
      ",100%,50%,1);\
                animation: bang 700ms ease-out forwards;\
                opacity: 0";

    const randomlyStyledConfetti = document.createElement("i");
    randomlyStyledConfetti.style.cssText = styles.toString();
    documentFragment.appendChild(randomlyStyledConfetti);
  }
  inputForm.append(documentFragment);
}

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
    confetti();
    event.target.reset();
  } else {
    resultDiv.innerHTML = `<strong>${userTextInput}</strong> is not a palindrome`;
    event.target.reset();
  }
});
