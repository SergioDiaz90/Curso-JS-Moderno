// variables
const sendButton = document.querySelector('#enviar');

eventListeners();
function eventListeners() {
	document.addEventListener('DOMContentLoaded', runApp);
	
}


// functions
function runApp (e) {
	// deshabilidar boton
	sendButton.disabled = true;
}
