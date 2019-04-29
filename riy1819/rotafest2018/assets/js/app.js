const scriptURL = 'https://script.google.com/macros/s/AKfycbx02_qYPUm7HcZp3E60fn75R6_LKGD9Th8qvcji/exec'
const form = document.forms['rotafest2018_3190gottalentregistration']
form.addEventListener('submit', e => {
	e.preventDefault()
	fetch(scriptURL, {
			method: 'POST',
			body: new FormData(form)
		})
		.then(response => console.log('Success!', response))
		.catch(error => console.error('Error!', error.message))

	var x = document.getElementById("form-messages").value;
	document.getElementById("form-messages").innerHTML = "Thanks for registration, we will contact you shortly.";
	// Show alert
	setTimeout(function () {
		document.querySelector('.form-messages').style.display = 'block';
		form.reset();
	}, 500);

	// Hide alert after 3 seconds
	setTimeout(function () {
		document.querySelector('.form-messages').style.display = 'none';
	}, 5000);
})