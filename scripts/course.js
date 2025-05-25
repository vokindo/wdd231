const courses = [
    {
        name: "WDD 100 - Web Fundamentals",
        type: "WDD",
        completed: true,
        credits: 3,
        description: "Introduction to web development, HTML, CSS, and basic JavaScript.",
        startDate: "2023-01-15",
        instructor: "John Doe",
        location: "Room 101, Building A",
        duration: "8 weeks"
    },
    {
        name: "WDD 130 - Web Design Principles",
        type: "WDD",
        completed: false,
        credits: 4,
        description: "Learn design principles and how to create accessible websites.",
        startDate: "2023-03-01",
        instructor: "Jane Smith",
        location: "Room 202, Building B",
        duration: "10 weeks"
    },
    {
        name: "CSE 120 - Introduction to Computer Science",
        type: "CSE",
        completed: true,
        credits: 3,
        description: "Basic principles of computer science, algorithms, and programming.",
        startDate: "2022-09-05",
        instructor: "Mark Brown",
        location: "Room 303, Building C",
        duration: "12 weeks"
    },
    {
        name: "CSE 200 - Data Structures",
        type: "CSE",
        completed: false,
        credits: 4,
        description: "Study of data structures, algorithms, and their applications.",
        startDate: "2023-04-10",
        instructor: "Sarah Lee",
        location: "Room 404, Building D",
        duration: "14 weeks"
    }
];

function displayCourses(filteredCourses) {
    const courseContainer = document.getElementById('course-container');
    courseContainer.innerHTML = ''; 

    let totalCredits = 0;

    filteredCourses.forEach(course => {
        const div = document.createElement('div');
        div.classList.add(course.completed ? 'completed' : 'incomplete');
        div.classList.add('course-card');

        div.innerHTML = `
            <h3>${course.name}</h3>
            <p>${course.description}</p>
            <p><strong>Start Date:</strong> ${course.startDate}</p>
            <p><strong>Instructor:</strong> ${course.instructor}</p>
            <p><strong>Location:</strong> ${course.location}</p>
            <p><strong>Duration:</strong> ${course.duration}</p>
            <p><strong>Credits:</strong> ${course.credits}</p>
        `;
        
        courseContainer.appendChild(div);

        if (course.completed) {
            totalCredits += course.credits;
        }
    });

    document.getElementById('creditsCount').textContent = totalCredits;
}

document.getElementById('allCoursesBtn').addEventListener('click', function () {
    displayCourses(courses);
});

document.getElementById('wddCoursesBtn').addEventListener('click', function () {
    const wddCourses = courses.filter(course => course.type === 'WDD');
    displayCourses(wddCourses);
});

document.getElementById('cseCoursesBtn').addEventListener('click', function () {
    const cseCourses = courses.filter(course => course.type === 'CSE');
    displayCourses(cseCourses);
});

window.onload = function () {
    displayCourses(courses);
};

document.getElementById('completedCoursesBtn').addEventListener('click', function () {
    const completedCourses = courses.filter(course => course.completed);
    displayCourses(completedCourses);
});

document.getElementById('incompleteCoursesBtn').addEventListener('click', function () {
    const incompleteCourses = courses.filter(course => !course.completed);
    displayCourses(incompleteCourses);
});

document.getElementById('creditsFilterBtn').addEventListener('click', function () {
    document.getElementById('creditRange').style.display = 'block';
});

document.getElementById('applyCreditFilter').addEventListener('click', function () {
    const minCredits = parseInt(document.getElementById('minCredits').value, 10);
    const maxCredits = parseInt(document.getElementById('maxCredits').value, 10);

    const creditFilteredCourses = courses.filter(course => {
        return course.credits >= minCredits && course.credits <= maxCredits;
    });

    displayCourses(creditFilteredCourses);
});
