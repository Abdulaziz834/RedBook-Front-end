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

var debts = [
	{ id: 1, is_income: true, is_given: false, name: "Odam1", amount: "453000", date: new Date("2023-01-27 09:12") },
	{ id: 2, is_income: false, is_given: true, name: "Odam2", amount: "178000", date: new Date("2023-01-27 10:42") },
	{ id: 3, is_income: true, is_given: true, name: "Odam3", amount: "1453000", date: new Date("2023-01-27 13:25") },
	{ id: 4, is_income: false, is_given: false, name: "Odam2", amount: "53000", date: new Date("2023-01-27 14:57") },
	{ id: 5, is_income: true, is_given: true, name: "Odam1", amount: "567000", date: new Date("2023-01-28 09:43") },
	{ id: 6, is_income: false, is_given: true, name: "Odam4", amount: "53000", date: new Date("2023-01-28 11:06") },
	{ id: 7, is_income: true, is_given: false, name: "Odam1", amount: "357000", date: new Date("2023-01-29 08:59") },
	{ id: 8, is_income: false, is_given: false, name: "Odamello Modamello", amount: "53000", date: new Date("2023-01-29 12:29") },
]
// alert(`${window.innerWidth}px ${window.innerHeight}px`);
var debtTemplate, debtContent, debtsContainer = document.querySelector("#recent-debts .card-container");
for (let debt of debts) {
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
		debtContent.querySelector("object.card-img-top").setAttribute("data", "./assets/icons/circle-check.svg");
	}
	else {
		debtContent.querySelector("object.card-img-top").setAttribute("data", "./assets/icons/circle-empty.svg");
	}

	debtContent.querySelector(".card-title > a").innerText = debt.name;
	debtContent.querySelector(".card-subtitle").innerText = reverseText(reverseText(debt.amount).match(/.{1,3}/g).join(" ")) + " so'm";
	debtContent.querySelector(".card-text.small").innerHTML = formatDateTime(debt.date, "datetime")
	debtsContainer.append(debtContent);
}

debtsContainer.innerHTML += '<div class="btn-container"><button class="btn btn-primary">Show more</button></div>'


var dailyIncome = [
	{ amount: "10345000", date: new Date("2022-01-26") },
	{ amount: "12655000", date: new Date("2022-01-27") },
	{ amount: "9123000", date: new Date("2022-01-28") },
	{ amount: "8125000", date: new Date("2022-01-29") },
]

var incomeTemplate, incomeContent, incomeContainer = document.querySelector("#daily-income .card-container");
for (let income of dailyIncome) {
	incomeTemplate = document.querySelector("template#income"),
	incomeContent = incomeTemplate.content.cloneNode(true);
		
	incomeContent.querySelector(".card-title").innerText = reverseText(reverseText(income.amount).match(/.{1,3}/g).join(" ")) + " so'm";
	incomeContent.querySelector(".card-text.small").innerHTML = formatDateTime(income.date, 'date')
	incomeContainer.append(incomeContent)

}