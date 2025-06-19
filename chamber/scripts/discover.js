const container = document.getElementById('discover-cards');

// Load JSON data
fetch('data/attractions.json')
  .then(response => response.json())
  .then(data => {
    data.forEach((item, index) => {
      const card = document.createElement('div');
      card.classList.add('discover-card', `card${index + 1}`);
      card.style.gridArea = `card${index + 1}`;

      card.innerHTML = `
        <h2>${item.name}</h2>
        <figure>
          <img src="${item.image}" alt="${item.name}" loading="lazy" width="300" height="200" />
        </figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button onclick="location.href='${item.link}'">Learn More</button>
      `;

      container.appendChild(card);
    });
  });

// Visitor Message
const visitMsg = document.getElementById('visit-msg');
const now = Date.now();
const lastVisit = localStorage.getItem('lastVisit');

if (!lastVisit) {
  visitMsg.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const diff = now - parseInt(lastVisit);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  visitMsg.textContent = days < 1
    ? "Back so soon! Awesome!"
    : `You last visited ${days} day${days === 1 ? '' : 's'} ago.`;
}

localStorage.setItem('lastVisit', now);
