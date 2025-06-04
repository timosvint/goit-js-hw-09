const form = document.querySelector(`.feedback-form`)
const input = form.elements.email;
const textarea = form.elements.message;
const INFO = `User-data`;

const formData = {
    email: "",
    message: "",
}



const saveData = localStorage.getItem(INFO);
if (saveData) {
    const parseData = JSON.parse(saveData);
    formData.email = parseData.email || "";
    formData.message = parseData.message || "";

    input.value = formData.email;
    textarea.value = formData.message;

}
console.log(input.value)
console.log(textarea.value)

function inputListener(event) {
    formData[event.target.name] = event.target.value
    localStorage.setItem(INFO, JSON.stringify(formData))
    console.log(formData);
}

function buttonSubmit(event) {
    event.preventDefault();

    event.currentTarget.reset();
    localStorage.removeItem(INFO)
}

form.addEventListener(`input`, inputListener)

form.addEventListener(`submit`, buttonSubmit )
