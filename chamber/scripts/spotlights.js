async function fetchSpotlights() {
  const res = await fetch('data/members.json');
  const members = await res.json();

  const goldSilver = members.filter(m => m.membershipLevel === 2 || m.membershipLevel === 3);

  // Shuffle & take 2–3 randomly
  const shuffled = goldSilver.sort(() => 0.5 - Math.random());
  const spotlights = shuffled.slice(0, 3);

  const container = document.getElementById('spotlight-container');
  container.innerHTML = '';

  spotlights.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('spotlight-card');

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <p><a href="${member.website}" target="_blank">Visit Website</a></p>
      <p><strong>${getMembershipLevel(member.membershipLevel)} Member</strong></p>
    `;

    container.appendChild(card);
  });
}

function getMembershipLevel(level) {
  switch (level) {
    case 2: return 'Silver';
    case 3: return 'Gold';
    default: return 'Member';
  }
}

window.addEventListener('DOMContentLoaded', fetchSpotlights);
