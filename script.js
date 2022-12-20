'use strict';

let name = document.querySelector('.name')
let num = document.querySelector('.number-js')
let plusBtn = document.querySelector('.bnt-js-plus');
let minusBtn = document.querySelector('.bnt-js-minus');
let firstName = document.querySelector('.first_name');
let secondName = document.querySelector('.second_name');



let Monday =['Жим гантелей лежа','жим лежа на наклонной скамье ','отжимание от брусьев','французский жим штанги лежа'];
let Wednesday = ['Подтягивание на турнике','тяга горизонтального блока к поясу сидя','тяги гантели одной рукой в наклоне','сгибание рук со штангой стоя']

let Friday =['жим ногами','разгибание ног','сгибание ног','армейский жим штанги стоя','подъем гантелей через стороный']

let counter = 0;
let nameDelete = 0;
let mass = ['Пресс','Плечи','Ноги',]
let del =['all']

let day = new Date();




function changeBackground(color) {
	 plusBtn.style.background = color;

}

function changeBackground2(color2) {
	minusBtn.style.background = color2;

}



function one(){
	changeBackground('#cfd9df');
}

function two(){
	changeBackground2('#cfd9df')
}





plusBtn.addEventListener('click',function(){

	
	counter +=1
	num.textContent = counter;

	plusBtn.style.opacity = 1;
	setTimeout(one,650);
	setTimeout(changeBackground('chartreuse'),3000)

 	
})




minusBtn.addEventListener('click',function(){


	//counter
	counter = 0
	num.textContent = counter;

	//bcg change
	setTimeout(two,650);
	setTimeout(changeBackground2('firebrick'),3000)

	//
	
	// if(name.textContent ==  null){
	// 	name.textContent = del[0]
	// }else{}
	
	

})

function nameToDate(arr){
	firstName.textContent = `${arr[nameDelete]}`
	secondName.textContent = `(${nameDelete + 1} / ${arr.length })`
	// name.textContent = `${arr[nameDelete]} (${nameDelete + 1} / ${arr.length })`;

	minusBtn.addEventListener('click',function(){
		nameDelete += 1 ;
		if(nameDelete == arr.length ){
			nameDelete = 0
		}
		firstName.textContent = `${arr[nameDelete]} `
		secondName.textContent = `(${nameDelete + 1} / ${arr.length })`
		// name.textContent = `${arr[nameDelete]} 
		//  (${nameDelete + 1} / ${arr.length })`;
	})
}

if(day.getDay() == 1){
	nameToDate(Monday)
}

if(day.getDay() == 3){
	nameToDate(Wednesday)
}


if(day.getDay() == 5){
	nameToDate(Friday)
}

if(day.getDay() == 0,2,4,6){
	nameToDate(Wednesday)
}