const facts = [
  {
    statement: "JavaScript was invented in 1995",
    answer: "true",
    explanation:
      "Brendan Eich created JS at Netscape in 1995. The initial version of the language was written in just 10 days.",
  },
  {
    statement: "Strings in JS are editable values",
    answer: "false",
    explanation:
      "In JavaScript strings are immutable values, meaning they cannot be edited; however, they can replaced with new, different strings.",
  },
  {
    statement: "1 + 1 === 2",
    answer: "true",
    explanation: "The plus operator gives the sum of two numbers.",
  },
  {
    statement: "'1' + '1' === '2'",
    answer: "false",
    explanation:
      "The plus operator concatenates (joins together) strings, so '1' + '1' === '11'.",
  },
  {
    statement: "typeof ['J', 'S'] === 'array'",
    answer: "false",
    explanation:
      "Arrays have the type 'object'. In JS, everything is either a primitive data type (e.g. 'string', 'number') or an object. Arrays are a kind of object with some special properties.  ",
  },
];

function hide(element) {
  element.classList.add("hidden");
}

function show(element) {
  element.classList.remove("hidden");
}

function disable(button) {
  button.setAttribute("disabled", "");
}

function enable(button) {
  button.removeAttribute("disabled");
}

let correct = 0;
let completed = 0;

let fact;

const explanation = document.getElementById("explanation");
const nextButton = document.getElementById("next-question");
const optionButtons = document.getElementById("options").children;

function getNextFact() {
  fact = facts.shift(); // get the first fact in our array (shortening the array)

  // set the question text to the current fact's statement
  document.getElementById("statement").textContent = fact.statement;

  // hide any previous explanation
  hide(explanation);

  for (let option of optionButtons) {
    // clear any previous classes
    option.classList.remove("correct");
    option.classList.remove("incorrect");
    // make sure buttons are enabled
    enable(option);
  }

  // disable next-question button
  disable(nextButton);
}

nextButton.addEventListener("click", getNextFact);

for (let option of optionButtons) {
  option.addEventListener("click", (e) => {
    // When this option is clicked...

    // disable all the option buttons
    for (let button of optionButtons) {
      disable(button);
    }

    // enable the 'next question' button, if we still have facts left
    if (facts.length > 0) {
      enable(nextButton);
    } else {
      nextButton.textContent = "No more questions!";
    }

    const guess = e.target.value;
    if (guess === fact.answer) {
      // correct answer!
      e.target.classList.add("correct");
      correct += 1;
    } else {
      // wrong answer!
      e.target.classList.add("incorrect");
    }

    // display the explanation
    explanation.textContent = fact.explanation;
    show(explanation);

    // update the score
    completed += 1;
    document.getElementById("correct").textContent = correct;
    document.getElementById("completed").textContent = completed;
  });
}

getNextFact();

// // TODO 1: Declare & assign variables pointing to the corresponding element(s)
// // statement should be the "statement" div
// const statement = document.getElementById("statement");
// // optionButtons should be all the elements within the "options" div
// const optionButtons = document.querySelector("#options").children;
// // explanation should be the "explanation" div
// const explanation = document.getElementById("explanation");

// // TODO 2: Declare & assign a variable called fact
// // Its value should be an object with a statement, true/false answer, and explanation
// const fact = {
//   statement: "array are like object",
//   answer: true,
//   explanation: "Array are a kind of object with special properties",
// };

// // TODO 3: Set the text of the statement element to the fact's statements
// statement.textContent = fact.statement;

// // TODO 4: Declare disable & enable functions to set or remove the "disabled" attribute from a given button element
// // disable(button) should set the button element's attribute "disabled" to the value ""
// const disable = (button) => button.setAttribute("disabled", "");

// // enable(button) should remove the attribute "disabled" from the button element
// const enable = (button) => button.removeAttribute("disabled");

// // TODO 5: Declare an isCorrect function that compares a guess to the right answer
// // isCorrect(guess) should return true if the guess matches the fact's answer
// function isCorrect(guess) {
//   return guess === fact.answer.toString();
// }

// // TODO 6A: Use a for loop to add a click event listener to each of the optionButtons
// for (let button of optionButtons) {
//   button.addEventListener("click", (event) => {
//     // TODO 6B: Within the event handler function, display the fact's explanation by setting
//     // the text of the explanation element
//     explanation.textContent = fact.explanation;

//     // TODO 7: Within the event handler function,
//     // Use a for loop to disable all the option buttons
//     for (let otherButton of optionButtons) {
//       disable(otherButton);
//     }

//     console.log(button.value);
//     // TODO 8: Within the event handler function,
//     // Get the guessed value from the clicked button
//     // Use a conditional to compare the guess to the fact's answer
//     // and add the "correct"/"incorrect" class as appropriate
//     if (isCorrect(button.value)) {
//       button.classList.add("correct");
//     } else {
//       button.classList.add("incorrect");
//     }
//   });
// }
