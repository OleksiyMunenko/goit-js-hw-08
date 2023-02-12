import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');
const submitBtn = document.querySelector('button')
const KEY = "feedback-form-state";

form.addEventListener('input', throttle(savingData, 500));
submitBtn.addEventListener('click', onFormSubmit);

onSiteReload();


function savingData(form){
	const inputValue = {
	email: input.value,
	message: textarea.value,
	};	
 localStorage.setItem(KEY, JSON.stringify(inputValue));

};

function onSiteReload() {
	let savedData = localStorage.getItem(KEY);
	let parsedData = JSON.parse(savedData);
	if(parsedData !== null){
		input.value = parsedData.email;
		textarea.value = parsedData.message;
	}

}

function onFormSubmit(e) {
	e.preventDefault();
	console.log(`{email: ${input.value} message: ${textarea.value}}`);
	localStorage.removeItem(KEY);
	form.reset(); 	
}

