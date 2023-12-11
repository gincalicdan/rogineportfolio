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

const vibes = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let myVibe = () => {

    fetch(url)
    .then(data => data.json())
    .then(item =>{
        vibes.textContent = `${item.joke}`;
    });
}

btn.addEventListener("click", myVibe);
myVibe();


