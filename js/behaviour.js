function addPayEvent() {
    let paymentValue = document.getElementById("pay");
    let payBox = document.getElementById("payRate");
    let hiring = document.getElementById("queryType3");
    let comments = document.getElementById("queryType2");
    let questions = document.getElementById("queryType1");
    hiring.addEventListener('focusin', function() {
        payBox.hidden = false;
        paymentValue.required = true;
        paymentValue.value = 0;
    });
    comments.addEventListener('focusin', function() {
        payBox.hidden = true;
        paymentValue.required = false;
        paymentValue.value = -1; // -1 means not for hiring
    });
    questions.addEventListener('focusin', function() {
        payBox.hidden = true;
        paymentValue.required = false;
        paymentValue.value = -1; // -1 means not for hiring
    });
}

function setRequiredMarkup() {
    let requiredFields = document.querySelectorAll('.required');
    for (let field of requiredFields) {
        field.innerHTML += "*";
    }
}

function notEmpty(value) {
    if (value.trim().length == 0) { // check length of textarea
        alert("No input! Please enter your comments.\n");
        return false;
    }
     return true;

}

function isInput(input) {
    return input.value;
}

function formValidation() {
    let inputs = Array.from(document.querySelector("#contactForm").elements).filter(isInput); 
    // console.log(inputs);
    document.getElementById("contactForm").addEventListener('submit', function() {
        for (let input of inputs) {
            if (!notEmpty(input.value)) {
                input.value = "";
                input.focus();
                return false;
            }
        }
        return true;
    });
}

window.onload = function() {
    // Setting Date
    document.getElementById('date').innerHTML = (new Date).toDateString();
    // Setting Required fields markup
    setRequiredMarkup();
    // Dynamic Textbox
    addPayEvent();
    // Form Validation Event
    // formValidation();
}
