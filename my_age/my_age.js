/* console.log('Мне 40!'); */

function calculate_age() {
	let year = document.getElementById('girl').value;
	let age = 2023 - year;
	return age;
}

function show_age() {

	console.log('Мне ' + calculate_age() + ' лет');
}