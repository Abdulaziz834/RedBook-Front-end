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


var debts = [
	{ id: 1, is_income: true, is_given: false, name: "Odam1", amount: "453000" },
	{ id: 2, is_income: false, is_given: true, name: "Odam2", amount: "178000" },
	{ id: 3, is_income: true, is_given: true, name: "Odam3", amount: "1453000" },
	{ id: 4, is_income: false, is_given: false, name: "Odam2", amount: "53000" },
	{ id: 5, is_income: true, is_given: true, name: "Odam1", amount: "567000" },
	{ id: 6, is_income: false, is_given: true, name: "Odam4", amount: "53000" },
	{ id: 7, is_income: false, is_given: false, name: "Odamello Modamello", amount: "53000" },
]
// alert(`${window.innerWidth}px ${window.innerHeight}px`);
var template, content, cardContainer = document.querySelector(".card-container");
for (let debt of debts) {
	template = document.querySelector("template"),
		content = template.content.cloneNode(true);

	let cardClass;
	if (debt.is_income) {
		cardClass = "income";
	}
	else {
		cardClass = "outcome";
	}

	content.querySelector(".debt").classList.add(cardClass);

	if (debt.is_given) {
		content.querySelector("object.card-img-top").setAttribute("data", "./assets/icons/circle-check.svg");
	}
	else {
		content.querySelector("object.card-img-top").setAttribute("data", "./assets/icons/circle-empty.svg");
	}

	content.querySelector(".card-title > a").innerText = debt.name;
	content.querySelector(".card-subtitle").innerText = reverseText(reverseText(debt.amount).match(/.{1,3}/g).join(" ")) + " so'm";

	cardContainer.append(content);
}

cardContainer.innerHTML += '<div class="btn-container"><button class="btn btn-primary">Show more</button></div>'
