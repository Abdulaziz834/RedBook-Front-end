

function cardDateChanger(card) {
    card.querySelector(".card-text").innerHTML = formatDateTime(new Date(), "datetime")
}



var debt = document.querySelector(".debt"),
  inputs = document.querySelectorAll("input");

cardDateChanger(debt)
window.onfocus = () => {
    cardDateChanger(debt)
}

inputs.forEach((input) => {
  if (input.id == "giver-name") {
    input.oninput = (e) => {
      if (e.target.value) {
        debt.querySelector(".card-title").innerText = e.target.value;
      } else {
        debt.querySelector(".card-title").innerText = "Odam Katowice";
      }
    };
  } else if (input.id == "amount") {
    input.oninput = (e) => {
      if (e.target.value) {
        debt.querySelector(".card-subtitle").innerText =
        formatAmount(e.target.value);
      } else {
        debt.querySelector(".card-subtitle").innerText = "100 000 so'm";
      }
    };
  } else if (input.id == "is-income") {
    input.onclick = (e) => {
      if (e.target.checked) {
        debt.classList.remove("outcome");
        debt.classList.add("income");
      } else {
        debt.classList.remove("income");
        debt.classList.add("outcome");
      }
    };
  }
});
