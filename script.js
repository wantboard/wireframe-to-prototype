
function validateForm() {
	var name = document.forms["myForm"]["name"].value;
	var email = document.forms["myForm"]["email"].value;
	var foods = document.forms["myForm"]["foods"].value;

	if (name == "") {
		alert("Name must be filled out");
		return false;
	}

	if (email == "") {
		alert("Email must be filled out");
		return false;
	}

	if (!validateEmail(email)) {
		alert("Invalid email format");
		return false;
	}

	if (foods == "") {
		alert("Please select your favorite food");
		return false;
	}

	return true;
}

function validateEmail(email) {
	var re = /\S+@\S+\.\S+/;
	return re.test(email);
}
