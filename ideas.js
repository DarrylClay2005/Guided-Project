const ideas = [
    "Design an app that helps people swap skills locally.",
    "Create a website that generates daily writing prompts.",
    "Build a tool to visualize your mood using colors.",
    "Develop a browser extension that summarizes articles.",
    "Invent a game that teaches basic coding concepts.",
    "Make a platform for sharing quick cooking hacks.",
    "Create an AI that suggests music based on your weather.",
    "Design a planner that integrates with your favorite apps.",
    "Build a chatbot that helps with language learning.",
    "Develop a virtual pet that grows as you complete tasks."
];

// Function to get a random idea
function getRandomIdea() {
    const index = Math.floor(Math.random() * ideas.length);
    return ideas[index];
}

// Attach event listener to the button
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('get-idea-btn');
    const output = document.getElementById('idea-output');

    if (button && output) {
        button.addEventListener('click', () => {
            output.textContent = getRandomIdea();
        });
    }
});
// Export getRandomIdea for use in script.js
export { getRandomIdea };