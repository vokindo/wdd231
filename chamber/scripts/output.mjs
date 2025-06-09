export function setTitle(course) {
  const title = document.querySelector("#courseName");
  title.textContent = `${course.code}: ${course.name}`;
}

export function renderSections(sections) {
  const sectionElement = document.querySelector("#sections");
  sectionElement.innerHTML = ""; // Clear previous render
  sections.forEach(section => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td>
    `;
    sectionElement.appendChild(row);
  });
}
