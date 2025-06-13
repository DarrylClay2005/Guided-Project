// script.js

// Generate random idea data
const ideas = [
    "Build a weather app using an API",
    "Create a to-do list with local storage",
    "Develop a quiz game with multiple categories",
    "Make a personal portfolio website",
    "Design a simple chat application"
];

// Function to display ideas in an ordered list
function displayIdeas() {
    const listContainer = document.getElementById('idea-list');
    listContainer.innerHTML = ""; // Clear previous list
    const ol = document.createElement('ol');
    ideas.forEach(idea => {
        const li = document.createElement('li');
        li.textContent = idea;
        ol.appendChild(li);
    });
    listContainer.appendChild(ol);
}

// Log ideas to the console
console.log("Randomly generated ideas:", ideas);

// Attach event listener to the button
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('show-ideas-btn');
    if (btn) {
        btn.addEventListener('click', displayIdeas);
    }
});