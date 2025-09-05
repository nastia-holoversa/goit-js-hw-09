const STORAGE_KEY = "feedback-form-state";
let formData = {
  email: "",
  message: ""
};
const form = document.querySelector(".feedback-form");
const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (savedData) {
    formData.email = savedData.email ? savedData.email.trim() : "";
  formData.message = savedData.message ? savedData.message.trim() : "";

  form.email.value = formData.email;
  form.message.value = formData.message;
}
form.addEventListener("input", (event) => {
  const target = event.target;

  if (target.name === "email" || target.name === "message") {
    formData[target.name] = target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
    }
    console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  formData = { email: "", message: "" };
  form.reset();
});