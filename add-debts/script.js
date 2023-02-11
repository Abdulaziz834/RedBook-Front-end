var navbarCloseBtn = document.querySelector(".navbar-toggler"),
  navbarExpanded = false;

navbarCloseBtn.onclick = () => {
  if (navbarExpanded) {
    setTimeout(() => {
      navbarCloseBtn.ariaExpanded = "false";
      document
        .querySelector(navbarCloseBtn.dataset.bsTarget)
        .classList.remove("show");
    }, 600);
  }
  navbarExpanded = !navbarExpanded;
};



function reverseText(text) {
	return text.split("").reverse().join("")
}

function hoursFormatting(num) {
	if (`${num}`.length == 1) {
		return `0${num}`
	}
	return num
}

function formatDateTime(date, format) {
	const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	if (format.toLowerCase() == "datetime") {
		return `${hoursFormatting(date.getDate())} ${months[date.getMonth()]} ${date.getFullYear()} <br> ${hoursFormatting(date.getHours())}:${hoursFormatting(date.getMinutes())}`
	}
	else if (format.toLowerCase() == "date") {
		return `${hoursFormatting(date.getDate())} ${months[date.getMonth()]} ${date.getFullYear()}`
	}
	else if (format.toLowerCase() == "time") {
		return `${hoursFormatting(date.getHours())}:${hoursFormatting(date.getMinutes())}`
	}
	return console.error("Unsupported format provided");
}

function formatAmount(amount) {
	return reverseText(reverseText(amount).match(/.{1,3}/g).join(" ")) + " so'm"
}

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
