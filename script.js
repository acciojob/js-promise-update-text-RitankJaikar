//your JS code here. If required.
// Function that returns a Promise that resolves after 1 second
function fetchMessage() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("Hello, world!");
		}, 1000);
	});
}

// Call the function and update the HTML element after the Promise resolves
fetchMessage().then((message) => {
	// Update the text content of the output element
	document.getElementById("output").textContent = message;
});