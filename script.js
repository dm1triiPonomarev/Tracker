'use strict';
let name = document.querySelector('.name')
let num = document.querySelector('.number-js')
let plusBtn = document.querySelector('.bnt-js-plus')
let minusBtn = document.querySelector('.bnt-js-minus');

let counter = 0;
let nameDelete = 0;
let mass = ['Пресс','Плечи','Ноги',]
let del =['all']
name.textContent = `${mass[nameDelete]} (${nameDelete + 1} / ${mass.length })`;

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
	nameDelete += 1 ;
	if(nameDelete == mass.length ){
		nameDelete = 0
	}

	//counter
	counter = 0
	num.textContent = counter;

	//bcg change
	setTimeout(two,650);
	setTimeout(changeBackground2('firebrick'),3000)

	//
	name.textContent = `${mass[nameDelete]} (${nameDelete + 1} / ${mass.length })`;
	// if(name.textContent ==  null){
	// 	name.textContent = del[0]
	// }else{}
	
	

})


