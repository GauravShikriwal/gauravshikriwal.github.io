// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Typing Effect
const text = "Data Science Engineer | AI & ML Specialist";
let index = 0;
function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-text").textContent += text[index];
        index++;
        setTimeout(typeEffect, 100);
    }
}
document.getElementById("typing-text").textContent = "";
setTimeout(typeEffect, 500);
