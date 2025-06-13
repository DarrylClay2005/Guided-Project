// script.js

// Example ideas array
const ideas = [
    "Build a weather app",
    "Create a to-do list",
    "Design a portfolio website",
    "Develop a quiz game",
    "Make a recipe finder",
    "Create a budget tracker",
    "Build a chat application",
    "Develop a workout planner",
    "Make a language learning tool",
    "Create a meme generator"
];

// Populate dropdown on page load
window.onload = function() {
    const dropdown = document.getElementById('ideaCount');
    for (let i = 1; i <= 10; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        dropdown.appendChild(option);
    }
};

// Handle button click
document.getElementById('generateBtn').addEventListener('click', function() {
    const count = parseInt(document.getElementById('ideaCount').value, 10);
    const output = document.getElementById('ideasOutput');
    output.innerHTML = '';

    // Shuffle ideas and pick the requested number
    const shuffled = ideas.slice().sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, count);

    selected.forEach((idea, idx) => {
        const li = document.createElement('li');
        li.textContent = idea;
        output.appendChild(li);
    });
});

// Optional: Add simple fade-in animation
document.getElementById('generateBtn').addEventListener('click', function() {
    const output = document.getElementById('ideasOutput');
    output.style.opacity = 0;
    setTimeout(() => {
        output.style.transition = 'opacity 0.5s';
        output.style.opacity = 1;
    }, 100);
});

// Optional: Add hover effect to button
const button = document.getElementById('generateBtn');
button.addEventListener('mouseover', function() {
    button.style.backgroundColor = '#005f73';
});
button.addEventListener('mouseout', function() {
    button.style.backgroundColor = '';
});

// added comment to test commit