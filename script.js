// script.js

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the button and the container for the idea
    const button = document.getElementById('get-idea-btn');
    const ideaContainer = document.getElementById('idea-container');

    // Function to get a random idea from the ideas array
    function getRandomIdea() {
        // 'ideas' should be defined in ideas.js and loaded before this script
        if (Array.isArray(ideas) && ideas.length > 0) {
            const randomIndex = Math.floor(Math.random() * ideas.length);
            return ideas[randomIndex];
        }
        return 'No ideas available.';
    }

    // Handle button click
    button.addEventListener('click', () => {
        const idea = getRandomIdea();

        // Clear previous idea
        ideaContainer.innerHTML = '';

        // Create a box for the idea
        const ideaBox = document.createElement('div');
        ideaBox.className = 'idea-box';
        ideaBox.textContent = idea;

        // Add the idea box to the container
        ideaContainer.appendChild(ideaBox);
    });
});
/*
 * Link ideas.js by adding a script tag dynamically if not already present.
 */
if (!document.querySelector('script[src$="ideas.js"]')) {
    const script = document.createElement('script');
    script.src = 'ideas.js';
    document.head.appendChild(script);
}