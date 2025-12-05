/* PART 1: EVENT HANDLING */

/* Dark Mode Toggle */
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

/* Counter Button */
let count = 0;
const countBtn = document.getElementById("countBtn");
const countDisplay = document.getElementById("count");

countBtn.addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;
});

/* PART 2: INTERACTIVE ELEMENTS */

/* Collapsible FAQ Section */
const questions = document.querySelectorAll(".faq-question");

questions.forEach(q => {
    q.addEventListener("click", () => {
        const answer = q.nextElementSibling;
        answer.classList.toggle("show");
    });
});

/* PART 3: FORM VALIDATION */

const form = document.getElementById("signupForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validate Name
    if (name.length < 3) {
        formMessage.textContent = "Name must be at least 3 characters.";
        formMessage.style.color = "red";
        return;
    }

    // Validate Email with Regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        formMessage.textContent = "Enter a valid email address.";
        formMessage.style.color = "red";
        return;
    }

    // Validate Password
    if (password.length < 6) {
        formMessage.textContent = "Password must be at least 6 characters.";
        formMessage.style.color = "red";
        return;
    }

    // Success
    formMessage.textContent = "Form submitted successfully!";
    formMessage.style.color = "green";

    form.reset();
});
