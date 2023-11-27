const fullName = document.getElementById("name");
const email = document.getElementById("email");
const select = document.getElementById("contact-kind");
const jobTitle = document.getElementById("job-title");
const website = document.getElementById("company-website");
const language = document.getElementById("coding-language");
const message = document.getElementById("message");
const form = document.getElementById("contact-form");

let valid = false;

const validNameLength = (input, min) => {
    const errorMessage = "Please enter at least " + min + " characters, first and last name.";
    if (input.value.trim().length >= min) {
        input.parentElement.classList.remove("invalid");
        input.nextElementSibling.innerText = "";
        return true;
    } else {
        input.parentElement.classList.add("invalid");
        input.nextElementSibling.innerText = errorMessage;
        return false;
    }
};

const validateEmail = (emailField) => {
    const errorMessage = "Please enter a valid email address.";
    const re = /\w+@\w+\.\w+/;
    if (re.test(emailField.value.trim())) {
        emailField.parentElement.classList.remove("invalid");
        emailField.nextElementSibling.innerText = "";
        return true;
    } else {
        emailField.parentElement.classList.add("invalid");
        emailField.nextElementSibling.innerText = errorMessage;
        return false;
    }
};

const validMessageLength = (input, min) => {
    const errorMessage = "Please enter at least " + min + " characters in your message.";
    if (input.value.trim().length > min) {
        input.parentElement.classList.remove("invalid");
        input.nextElementSibling.innerText = "";
        return true;
    } else {
        input.parentElement.classList.add("invalid");
        input.nextElementSibling.innerText = errorMessage;
        return false;
    }
};

const validateCodingLanguage = (select) => {
    const errorMessage = "Please select a coding language.";
    if (select.value !== "choose") {
        select.parentElement.classList.remove("invalid");
        select.nextElementSibling.innerText = "";
        return true;
    } else {
        select.parentElement.classList.add("invalid");
        select.nextElementSibling.innerText = errorMessage;
        return false;
    }
};

const validJobTitle = (input, min) => {
    const errorMessage = "Please enter a Job Title, must be at least " + min + " characters.";
    if (input.value.trim().length >= min) {
        input.parentElement.classList.remove("invalid");
        input.nextElementSibling.innerText = "";
        return true;
    } else {
        input.parentElement.classList.add("invalid");
        input.nextElementSibling.innerText = errorMessage;
        return false;
    }
};

const validateCompanyWebsite = (website) => {
    const errorMessage = "Please enter a valid URL.";
    const re = /https?\:\/\/.+\..+/;
    if (re.test(website.value.trim())) {
        website.parentElement.classList.remove("invalid");
        website.nextElementSibling.innerText = "";
        return true;
    } else {
        website.parentElement.classList.add("invalid");
        website.nextElementSibling.innerText = errorMessage;
        return false;
    }
};

const validateReasonForContacting = (select) => {
    const errorMessage = "Please select a reason for contacting us.";
    if (select.value !== "choose") {
        select.parentElement.classList.remove("invalid");
        select.nextElementSibling.innerText = "";
        return true;
    } else {
        select.parentElement.classList.add("invalid");
        select.nextElementSibling.innerText = errorMessage;
        return false;
    }
};

const clearValidationError = (input) => {
    input.parentElement.classList.remove("invalid");
    input.nextElementSibling.innerText = "";
};

const handleSelect = () => {
    const selectedValue = select.value;

    language.parentElement.classList.add("hidden");
    jobTitle.parentElement.classList.add("hidden");
    website.parentElement.classList.add("hidden");

    if (selectedValue === "job") {
        jobTitle.parentElement.classList.remove("hidden");
        website.parentElement.classList.remove("hidden");
    } else if (selectedValue === "talk") {
        language.parentElement.classList.remove("hidden");
    }
};

select.addEventListener("change", () => {
    handleSelect(select);
    validateReasonForContacting(select);
});

form.addEventListener("submit", (e) => {
    const selectedValue = select.value;

    clearValidationError(select);
    clearValidationError(jobTitle);
    clearValidationError(website);
    clearValidationError(language);
    clearValidationError(message)

    let validations = [
        validateReasonForContacting(select),
        validNameLength(fullName, 3),
        validateEmail(email),
        validMessageLength(message, 10)
    ];

    if (selectedValue === "job") {
        validations.push(
            validJobTitle(jobTitle, 3),
            validateCompanyWebsite(website)
        );
    } else if (selectedValue === "talk") {
        validations.push(
            validateCodingLanguage(language)
        );
    }

    if (validations.every(validation => validation)) {
        valid = true;
    } else {
        valid = false;
        e.preventDefault();
    }
});