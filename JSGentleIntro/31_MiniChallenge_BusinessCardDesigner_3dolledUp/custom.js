// // .value grabs whatever is inputed by the user
function printCompany() {
    document.getElementById("outputCompany").innerHTML = inputCompany.value;
}

function printMessage() {
    document.getElementById("outputMessage").innerHTML = inputMessage.value;
}

function changeBg() {
    document.getElementById("card").style.backgroundColor = inputBg.value;
}

function changeText() {
    document.getElementById("card", "<hr>").style.color = inputText.value;
}

// "selected_id" is a new name just created here. the following 2 lines take the id and convert it into a class name. 
// the classnames of text-left, text-center, text-right are all bootstrap classes and will realign the text
function textAlign(selected_id) {
    document.getElementById("card").className = selected_id;
}

function printName() {
    document.getElementById("outputName").innerHTML = inputName.value;
}

function printJob() {
    document.getElementById("outputJob").innerHTML = inputJob.value;
}

function printEmail() {
    document.getElementById("outputEmail").innerHTML = "Email: " + inputEmail.value;
}

function printTelephone() {
    document.getElementById("outputTelephone").innerHTML = "Tel: " + inputTelephone.value;
}

// !inputName.value checks if there's NO input bc of the ! 
function formSubmit() {
	if (!inputName.value) {
		alert("Please enter your name.");
	}
}

// window.location.reload(); is a page refresh
function formReset() {
	window.location.reload();
}