// variables
const sendButton = document.querySelector('#enviar');
const sendMail = document.querySelector('#enviar-mail');
// inputs text
const emailInput = document.querySelector('#email');
const subjectInput = document.querySelector('#asunto');
const messageInput = document.querySelector('#mensaje');

/** function for despatch events*/
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
	switch (e.target.type) {
		case 'email':
			if (e.target.value.length === 0) {
				e.target.classList.add('border', 'border-red-500');
				seeError('This field is required');
				break;
			} else if (e.target.value.indexOf('@') < 0) {
				e.target.classList.add('border', 'border-red-500');
				seeError('this email is not valid');
				break;
			} 
		case 'text':
			if (e.target.value.length === 0) {
				e.target.classList.add('border', 'border-red-500');
				seeError('this field cannot be empty');
			}
			break;
		case 'textarea':
			if (e.target.value.length === 0) {
				e.target.classList.add('border', 'border-red-500');
				seeError('this field cannot be empty');
			}
			break;
	};
}

function seeError(msn) {
	const messageError = document.createElement('p');
	messageError.textContent = msn;
	messageError.classList.add(
		'border', 'border-red-500', 
		'background-red-100', 'text-red-500', 
		'p-3', 'mt-5', 'text-center', 'error');

	const error = document.querySelectorAll('.error');
	if (error.length === 0){
		// sendMail.appendChild(messageError);
		sendMail.insertBefore(messageError, document.querySelector('.mb-10'));
	}
}
