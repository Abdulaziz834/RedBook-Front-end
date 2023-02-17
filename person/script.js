var individualDebts = [
	{ id: 1, is_income: true, is_given: false, name: "Odam1", amount: "453000", date: new Date("2023-01-27 09:12") },
	{ id: 5, is_income: true, is_given: true, name: "Odam1", amount: "567000", date: new Date("2023-01-28 09:43") },
	{ id: 7, is_income: false, is_given: false, name: "Odam1", amount: "357000", date: new Date("2023-01-29 08:59") },
]


var debtTemplate, debtContent, debtsContainer = document.querySelector(".card-container");
for (let debt of individualDebts) {
	debtTemplate = document.querySelector("template#debt"),
		debtContent = debtTemplate.content.cloneNode(true);

	let cardClass;
	if (debt.is_income) {
		cardClass = "income";
	}
	else {
		cardClass = "outcome";
	}

	debtContent.querySelector(".debt").classList.add(cardClass);

	if (debt.is_given) {
		debtContent.querySelector("object.card-img-top").setAttribute("data", "../assets/icons/circle-check.svg");
	}
	else {
		debtContent.querySelector("object.card-img-top").setAttribute("data", "../assets/icons/circle-empty.svg");
	}

	debtContent.querySelector(".card-title").innerText = formatAmount(debt.amount);
	debtContent.querySelector(".card-text.small").innerHTML = formatDateTime(debt.date, "datetime")
	debtsContainer.append(debtContent);
}