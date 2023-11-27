// TODO


const firstName = document.getElementById("first-name")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email")
const form = document.getElementById("connect-form")
const os = document.getElementById("operating-system")
const employees = document.getElementById("num-of-employees")
const select = document.getElementById("contact-kind")

let valid = false

const validLength = (input, min) => {
    const errorMessage = "Please enter at least " + min + " characters.";
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

select.addEventListener("change", () => handleSelect(select))



const handleSelect = (selectElement) => {
  const selectedValue = selectElement.value

  if (selectedValue == "business") {
    employees.parentElement.classList.remove("hidden");
    os.parentElement.classList.add("hidden")

  } else if (selectedValue == "technical") {
    os.parentElement.classList.remove("hidden")
    employees.parentElement.classList.add("hidden")
  } 
} 




form.addEventListener("submit", (e) => {

   if(
    validLength(firstName, 3) && 
    validLength(lastName, 3) && 
    validateEmail(email)
   ) {
    valid = true;
   } else {
    valid = false;
    e.preventDefault();
    console.log('Bad input')
   }
})
