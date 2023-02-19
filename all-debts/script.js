var debts = [
	{ id: 8, is_income: false, is_given: false, name: "Eng uzun otli odam", amount: "53000", date: new Date("2023-01-29 12:29") },
	{ id: 7, is_income: true, is_given: false, name: "Odam1", amount: "357000", date: new Date("2023-01-29 08:59") },
	{ id: 6, is_income: false, is_given: true, name: "Odam4", amount: "53000", date: new Date("2023-01-29 11:06") },
	{ id: 1, is_income: true, is_given: false, name: "Odam1", amount: "453000", date: new Date("2023-01-29 09:12") },
	{ id: 2, is_income: false, is_given: true, name: "Odam2", amount: "178000", date: new Date("2023-01-29 10:42") },
	{ id: 3, is_income: true, is_given: true, name: "Odam3", amount: "1453000", date: new Date("2023-01-28 13:25") },
	{ id: 4, is_income: false, is_given: false, name: "Odam2", amount: "53000", date: new Date("2023-01-28 14:57") },
	{ id: 5, is_income: true, is_given: true, name: "Odam1", amount: "567000", date: new Date("2023-01-28 09:43") },
	{ id: 6, is_income: true, is_given: true, name: "Odam4", amount: "53000", date: new Date("2023-01-28 11:06") },
    { id: 9, is_income: false, is_given: true, name: "Odam4", amount: "53000", date: new Date("2023-01-28 11:06") },
	{ id: 10, is_income: true, is_given: false, name: "Odam1", amount: "453000", date: new Date("2023-01-28 09:12") },
    { id: 11, is_income: true, is_given: true, name: "Eng uzun otli odam", amount: "1453000", date: new Date("2023-01-26 09:12") },
]
// alert(`${window.innerWidth}px ${window.innerHeight}px`);
var templates = document.querySelectorAll("template"), 
    debtContent, blockContent, 
    containerContent = document.querySelector(".block-parent"), 
    blockSequence = 0, 
    lastDate = debts[0].date.getDate(), 
    debtsContainers = document.querySelectorAll(".debts-block");

containerContent.querySelector("time.debt-date").innerText = formatDateTime(debts[0].date, "date");


for (let debt of debts) {
	debtContent = templates[1].content.cloneNode(true);

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

	debtContent.querySelector(".card-title > a").innerText = debt.name;
	if (debt.name == "Odam1") {
		debtContent.querySelector(".card-title > a").href = "../person/index.html";

	}
	debtContent.querySelector(".card-subtitle").innerText = formatAmount(debt.amount);
	debtContent.querySelector(".card-text.small").innerHTML = formatDateTime(debt.date, "time");
    if (debt.date.getDate() != lastDate) {
        lastDate = debt.date.getDate();
        blockSequence++;
        blockContent = templates[0].content.cloneNode(true);
        blockContent.querySelector("time.debt-date").innerText = formatDateTime(debt.date, "date");
        containerContent.append(blockContent);
        debtsContainers = document.querySelectorAll(".debts-block");
    }
	debtsContainers[blockSequence].append(debtContent);
}