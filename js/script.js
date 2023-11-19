// Function to scroll to the specified ID in the URL
  function targetSpecificId() {
    const search = new URLSearchParams(window.location.hash);
    const targetId = search.get('#');
    if (targetId) {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView();
        }
    }
}

// Call the function when the page is loaded
window.onload = targetSpecificId;


