'use strict';

let name = document.querySelector('.name')
let number = document.querySelector('.number-js')
let plusBtn = document.querySelector('.bnt-js-plus');
let cancelBtn = document.querySelector('.bnt-js-cancel');
let firstName = document.querySelector('.first_name');
let secondName = document.querySelector('.second_name');


let x = 0

let Monday = ['Подтягивание на турнике', 'тяга горизонтального блока к поясу сидя', 'тяги гантели одной рукой в наклоне', 'сгибание рук со штангой стоя']

let Wednesday = ['жим ногами', 'разгибание ног', 'сгибание ног', 'армейский жим штанги стоя', 'подъем гантелей через стороны'];

let Friday = ['Жим гантелей лежа', 'жим лежа на наклонной скамье ', 'отжимание от брусьев', 'французский жим штанги лежа'];


let counter = 0;
let nameDelete = 0;





plusBtn.addEventListener('click', function () {

	//counter
	counter += 1
	number.textContent = counter;

	//bcg change

	setTimeout(() => {
		plusBtn.classList.add('btn-js-plus_clicked')
	}, 0)

	setTimeout(() => {
		plusBtn.classList.remove('btn-js-plus_clicked')
	}, 450)



})


cancelBtn.addEventListener('click', function () {
	//counter
	counter = 0
	number.textContent = counter;

	//bcg change

	setTimeout(() => {
		cancelBtn.classList.add('btn-js-cancel_clicked')
	}, 0)

	setTimeout(() => {
		cancelBtn.classList.remove('btn-js-cancel_clicked')
	}, 450)

})


//Изменение названия 
function nameToDate(arr) {
	firstName.textContent = `${arr[nameDelete]}`
	secondName.textContent = `(${nameDelete + 1} / ${arr.length})`


	cancelBtn.addEventListener('click', function () {
		nameDelete += 1;
		if (nameDelete == arr.length) {
			nameDelete = 0
		}
		firstName.textContent = `${arr[nameDelete]} `
		secondName.textContent = `(${nameDelete + 1} / ${arr.length})`
	})
}

// Зависимость от дня недели
let day = new Date();

if (day.getDay() == 1) {
	nameToDate(Monday)
} else if (day.getDay() == 3) {
	nameToDate(Wednesday)
} else if (day.getDay() == 5) {
	nameToDate(Friday)
} else {
	nameToDate(Monday)
}
