
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