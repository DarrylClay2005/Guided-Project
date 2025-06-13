// script.js

// Example idea prompts (you can expand this list)
const ideaPrompts = [
    "Invent a new board game using only household items.",
    "Design a superhero with a unique, silly power.",
    "Create a story about a talking animal who saves the day.",
    "Imagine a new holiday and describe how people celebrate it.",
    "Write a poem about your favorite food.",
    "Draw a map of a fantasy island and name its landmarks.",
    "Come up with a new dance move and name it.",
    "Describe a gadget that would make life easier for students.",
    "Write a short script for a funny commercial.",
    "Invent a sport that combines two existing sports."
];

// Utility to get N random ideas from the list
function getRandomIdeas(min = 5, max = 10) {
    const count = Math.floor(Math.random() * (max - min + 1)) + min;
    const shuffled = ideaPrompts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, ideaPrompts.length));
}

// Function to display ideas
function displayIdeas(ideas) {
    const ideasContainer = document.getElementById('ideas-container');
    ideasContainer.innerHTML = '';
    const ul = document.createElement('ul');
    ideas.forEach(idea => {
        const li = document.createElement('li');
        li.textContent = idea;
        ul.appendChild(li);
    });
    ideasContainer.appendChild(ul);
}

// Event listener for the button
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('generate-ideas-btn');
    button.addEventListener('click', () => {
        const ideas = getRandomIdeas();
        displayIdeas(ideas);
    });
});
const ideasSection = document.getElementById('ideas-section');
const ideasContainer = document.getElementById('ideas-container');
if (ideasSection && ideasContainer) {
    ideasSection.style.textAlign = 'center';
    ideasContainer.style.display = 'inline-block';
}