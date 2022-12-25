

//PLUS
//======================================
const PLUS_COLORS = {
	default: 'default',
	green: 'green'
}

const CLASSES_BY_PLUS_COLORS = {
	[PLUS_COLORS.default]: 'btn-js-default',
	[PLUS_COLORS.green]: 'btn-js-plus_clicked',
}

const NEXT_COLORS = {
	[PLUS_COLORS.default]: PLUS_COLORS.green,
	[PLUS_COLORS.green]: PLUS_COLORS.default,
}

let currentColor = PLUS_COLORS.default;

function switchColor(node) {

	const currentClass = CLASSES_BY_PLUS_COLORS[currentColor];	//'btn-js_default'
	const nextColor = NEXT_COLORS[currentColor];	//PLUS_COLORS.green
	const nextClass = CLASSES_BY_PLUS_COLORS[nextColor]	//'btn-js-plus_clicked'

	node.classList.replace(currentClass, nextClass)//	'btn-js-default' => 'btn-js-plus_clicked'

	currentColor = nextColor

}




function changeBackgroundPlus() {
	switchColor(plusBtn);


}

//CANCEL
//============================================




const CANCEL_COLORS = {
	default: 'default',
	red: 'red'
}

const CLASSES_BY_CANCEL_COLORS = {
	[CANCEL_COLORS.default]: 'btn-js-default',
	[CANCEL_COLORS.red]: 'btn-js-cancel_clicked',
}

const NEXT_CANCEL_COLORS = {
	[CANCEL_COLORS.default]: CANCEL_COLORS.red,
	[CANCEL_COLORS.red]: CANCEL_COLORS.default,
}

let currentCancelColor = CANCEL_COLORS.default;

function switchColor2(node) {

	const currentClass = CLASSES_BY_CANCEL_COLORS[currentCancelColor];	//'btn-js_default'
	const nextColor = NEXT_CANCEL_COLORS[currentCancelColor];	//CANCEL_COLORS.red
	const nextClass = CLASSES_BY_CANCEL_COLORS[nextColor]	//'btn-js-cancel_clicked'

	node.classList.replace(currentClass, nextClass)//	'btn-js-default' => 'btn-js-cancel_clicked'

	currentCancelColor = nextColor

}




function changeBackgroundCancel() {
	switchColor2(cancelBtn);

}