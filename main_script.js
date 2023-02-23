
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

function formatAmount(amount, n = 1) {
	if (n) {
		return reverseText(reverseText(amount).match(/.{1,3}/g).join(" ")) + " so'm"
	}
}

var searchInput = document.querySelector("input.form-control[type=search]"),
	navList = document.querySelector("ul.navbar-nav"),
	searchContainer = document.querySelector(".container");

if (window.innerWidth < 768) {
	searchInput.oninput = e => {
		if (searchInput.value) {
			navList.classList.toggle("hide", true);
			searchContainer.classList.toggle("pt-5", true)
		}
		else {
			navList.classList.toggle("hide", false);
			searchContainer.classList.toggle("pt-5", false)
		}
	}
}