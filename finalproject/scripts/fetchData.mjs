export async function fetchData(url) {
    try {
        const response = await fetch(url);  // Fetching the data
        if (!response.ok) {
            throw new Error('Network response was not ok'); // If the response is not ok, throw an error
        }
        const data = await response.json();  // Parse the JSON response
        return data;  // Return the parsed data
    } catch (error) {
        console.error("Error fetching data:", error);  // Log any errors to the console
        return [];  // Return an empty array in case of an error
    }
}
