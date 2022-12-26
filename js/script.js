'use strict';

let name = document.querySelector('.name')
let num = document.querySelector('.number-js')
let plusBtn = document.querySelector('.bnt-js-plus');
let cancelBtn = document.querySelector('.bnt-js-cancel');
let firstName = document.querySelector('.first_name');
let secondName = document.querySelector('.second_name');




let Monday = ['Жим гантелей лежа', 'жим лежа на наклонной скамье', 'отжимание от брусьев', 'французский жим штанги лежа'];
let Wednesday = ['Подтягивание на турнике', 'тяга горизонтального блока к поясу сидя', 'тяги гантели одной рукой в наклоне', 'сгибание рук со штангой стоя']

let Friday = ['жим ногами', 'разгибание ног', 'сгибание ног', 'армейский жим штанги стоя', 'подъем гантелей через стороны']

let counter = 0;
let nameDelete = 0;


plusBtn.addEventListener('click', function () {

	//counter
	counter += 1
	num.textContent = counter;

	//bcg change

	setTimeout(changeBackgroundPlus, 0);
	setTimeout(changeBackgroundPlus, 500);


})

cancelBtn.addEventListener('click', function () {

	//counter
	counter = 0
	num.textContent = counter;

	//bcg change
	setTimeout(changeBackgroundCancel, 0);
	setTimeout(changeBackgroundCancel, 500)

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
