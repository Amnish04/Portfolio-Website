function addPayEvent() {
    let paymentValue = document.getElementById("pay");
    let payBox = document.getElementById("payRate");
    let hiring = document.getElementById("queryType3");
    let comments = document.getElementById("queryType2");
    let questions = document.getElementById("queryType1");
    hiring.addEventListener('focusin', function() {
        payBox.hidden = false;
    });
    comments.addEventListener('focusin', function() {
        payBox.hidden = true;
        paymentValue.value = 0; // -1 means not for hiring
    });
    questions.addEventListener('focusin', function() {
        payBox.hidden = true;
        paymentValue.value = 0; // -1 means not for hiring
    });
}

function setRequiredMarkup() {
    let requiredFields = document.querySelectorAll('.required');
    for (let field of requiredFields) {
        field.innerHTML += "*";
    }
}

function notEmpty(value) {
    if (value.trim().length == 0) { 
        alert("Please don't enter empty text!\n");
        return false;
    }
    return true;

}

/* Just checking for empty inputs (just spaces), rest is covered in HTML itself */
function formValidation() {
    let inputs = (document.querySelector("#contactForm").querySelectorAll("input[type='text'], textarea"));
    console.table(inputs);
    document.getElementById("contactForm").onsubmit = function() {
        let rv = true;
        for (let input of inputs) {
            if (!notEmpty(input.value)) {
                input.value = "";
                input.focus();
                rv = false;
            }
        }
        return rv;
    };
}

window.onload = function() {
    // Setting Date
    document.getElementById('date').innerHTML = (new Date).toDateString();
    // Setting Required fields markup
    setRequiredMarkup();
    // Dynamic Textbox
    addPayEvent();
    // Form Validation Event
    formValidation();
}