// variables
const sendButton = document.querySelector('#enviar');
// inputs text
const emailInput = document.querySelector('#email');
const subjectInput = document.querySelector('#asunto');
const messageInput = document.querySelector('#mensaje');

eventListeners();
function eventListeners() {
	document.addEventListener('DOMContentLoaded', runApp);
	
	// textarea inputs form
	emailInput.addEventListener('blur', validateForm);
	subjectInput.addEventListener('blur', validateForm);
	messageInput.addEventListener('blur', validateForm);
}


// functions
function runApp (e) {
	// deshabilidar boton
	sendButton.disabled = true;
}

function validateForm (e) {
	if (e.target.value.length > 0) {
		console.log('Si tengo algo');
	} else {
		// emailInput.style.borderBottomColor = 'red';
		e.target.classList.add('border', 'border-red-500');
	}
}
