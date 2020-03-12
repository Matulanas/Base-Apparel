
var error_img = document.querySelector(".error-img");
var mail = document.querySelector(".mail");
var e_msg = document.querySelector(".e-msg");
var button = document.querySelector(".button");

button.addEventListener('click', (e) => {
	let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	let word = mail.value;
  if (!re.test(word)) {
  		error_img.style.display = 'block';
  		e_msg.style.display = 'block';
  		mail.style.border = '2px solid hsl(0, 93%, 68%)';
  	} else {
  		error_img.style.display = 'none';
  		e_msg.style.display = 'none';
  		email.style.border = '1px solid hsl(0, 80%, 86%)';
  	}
  });
