let reviewContainer = document.querySelector(".review");

let successContainer = document.querySelector(".success");

let ratings = document.querySelectorAll(".rate");

let selectionNumber = document.querySelector(".selection-number");

let submitBtn = document.querySelector(".submit-btn");

let currentSelection;

ratings.forEach((value) => {
  value.addEventListener("click", () => {
    selectionNumber.innerHTML = value.innerHTML;
    if (currentSelection) {
      currentSelection.classList.remove("selection");
    }
    value.classList.add("selection");
    currentSelection = value;
  });
});

submitBtn.addEventListener("click", () => {
  if (!currentSelection) {
    alert("Please select a rating!");
  } else {
    selectionNumber.innerHTML = currentSelection.innerHTML;
    reviewContainer.classList.add("hidden");
    successContainer.classList.remove("hidden");
  }
});
