const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    const card = document.createElement('section');
    const fullName = document.createElement('h2');
    const portrait = document.createElement('img');
    const dob = document.createElement('p');
    const pob = document.createElement('p');
    const children = document.createElement('p');
    const years = document.createElement('p');
    const death = document.createElement('p');

    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    dob.textContent = `Date of Birth: ${prophet.birthdate}`;
    pob.textContent = `Place of Birth: ${prophet.birthplace}`;
    children.textContent = `Children: ${prophet.numofchildren}`;
    years.textContent = `Years as Prophet: ${prophet.length}`;
    death.textContent = prophet.death ? `Date of Death: ${prophet.death}` : 'Still Living';

    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    card.appendChild(fullName);
    card.appendChild(portrait);
    card.appendChild(dob);
    card.appendChild(pob);
    card.appendChild(children);
    card.appendChild(years);
    card.appendChild(death);

    cards.appendChild(card);
  });
};

getProphetData();
