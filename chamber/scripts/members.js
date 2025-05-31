// Fetch member data from JSON
async function fetchMemberData() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    return data;
}

// Display members in grid or list view
function displayMembers(view) {
    const container = document.getElementById('member-container');
    container.innerHTML = ''; // Clear the container before displaying

    fetchMemberData().then(members => {
        members.forEach(member => {
            const card = document.createElement('li');
            card.classList.add(view); // Apply 'grid' or 'list' class based on view

            card.innerHTML = `
                <div class="member-card">
                    <img src="images/${member.image}" alt="${member.name}">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <p><a href="${member.website}" target="_blank">Website</a></p>
                    <p>Membership Level: ${getMembershipLevel(member.membershipLevel)}</p>
                </div>
            `;
            container.appendChild(card);
        });
    });
}

// Membership level mapping
function getMembershipLevel(level) {
    switch (level) {
        case 1: return 'Member';
        case 2: return 'Silver';
        case 3: return 'Gold';
        default: return 'Unknown';
    }
}

// Grid/List toggle functionality
document.getElementById('gridViewBtn').addEventListener('click', () => {
    displayMembers('grid');
});

document.getElementById('listViewBtn').addEventListener('click', () => {
    displayMembers('list');
});

// Initial load (default to grid view)
window.onload = function() {
    displayMembers('grid');
};
