document.addEventListener('DOMContentLoaded', function () {
    // Ensure the element with id 'currentyear' exists before setting textContent
    const currentYearElement = document.getElementById("currentyear");
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
    }
});
