const textForm = document.querySelector('.js-form');
const greeting = document.querySelector('.js-greetings');
const input = textForm.querySelector('input');

const USER_LS = 'currentUser';
const SHOWING_CN = 'showing';

function saveName(text) {
	localStorage.setItem(USER_LS, text);
}
function handleSubmit(event) {
	event.preventDefault();
	const currentValue = input.value;
	paintGreeting(currentValue);
	saveName(currentValue);
}
function askForName() {
	textForm.classList.add(SHOWING_CN);
	textForm.addEventListener('submit', handleSubmit);
}
function paintGreeting(text) {
	textForm.classList.remove(SHOWING_CN);
	greeting.classList.add(SHOWING_CN);
	greeting.innerText = `Hello ${text}`;
}

function loadName() {
	const currentUser = localStorage.getItem(USER_LS);
	if (currentUser === null) {
		askForName();
	} else {
		paintGreeting(currentUser);
	}
}
function init() {
	loadName();
}

init();
