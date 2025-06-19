import { fetchData } from './fetchData.mjs';

document.getElementById('moodForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const mood = document.getElementById('mood').value;
    const moodHistory = JSON.parse(localStorage.getItem('moodHistory')) || [];
    moodHistory.push({ mood, date: new Date().toLocaleDateString() });
    localStorage.setItem('moodHistory', JSON.stringify(moodHistory));
    window.location.href = "progress.html"; // Redirect to progress page
});

// Fetch wellness tips and display them
fetchData('data/wellness-tips.json').then(data => {
    const wellnessContainer = document.getElementById('wellness-tips');
    data.forEach(tip => {
        const tipElement = document.createElement('div');
        tipElement.classList.add('wellness-tip');
        tipElement.innerHTML = `<h3>${tip.title}</h3><p>${tip.description}</p>`;
        wellnessContainer.appendChild(tipElement);
    });
});

// Display mood history in progress.html
const moodHistory = JSON.parse(localStorage.getItem('moodHistory')) || [];
const moodHistoryContainer = document.getElementById('moodHistory');
if (moodHistory.length > 0) {
    moodHistory.forEach(entry => {
        const entryElement = document.createElement('div');
        entryElement.classList.add('history-entry');
        entryElement.innerHTML = `<p>Mood: ${entry.mood} - Date: ${entry.date}</p>`;
        moodHistoryContainer.appendChild(entryElement);
    });
} else {
    moodHistoryContainer.innerHTML = "<p>No mood history available.</p>";
}

// JavaScript to toggle the hamburger menu visibility
document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('main-nav').classList.toggle('open');
});
