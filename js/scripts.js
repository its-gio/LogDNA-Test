const groupMarker = document.querySelector(".active-group");
const groups = document.querySelector(".groups");
const posts = document.querySelector(".posts");

function handleActiveGroup(liCoords) {
    const groupsCoord = groups.getBoundingClientRect();
    groupMarker.classList.add("active");
    const calcCoords = {
        top: (liCoords.top) - (groupsCoord.top / 1.7),
    }
    console.log(calcCoords.top);
    groupMarker.style.setProperty('top', `${calcCoords.top}px`);
}

function getContent(index) {
    console.log(index);
};


function grabPosts(data, i) {
    // data[`group${i + 1}`].forEach(text => console.log(text));
    const template = data[`group${i + 1}`].map((content, index) => {
        let Text = content[`post${index + 1}`];
        return `<div class="posts--list-item">
            <h5 class="posts--list-item__heading">${Text.Title}</h5>
            <p class="posts--list-item__content">${Text.Content.substring(0, 230)}...</p>
        </div>`;
    }).join('');
    posts.innerHTML = template;
}

// Adds a list item to unordered list with an image and h5 text
function createGroups(data, i) {
    // Creating elements {li, img, h5} and keeping track of index
    const li = document.createElement("li");
    const img = document.createElement("img");
    const groupNum = document.createElement("h5");
    const index = document.createTextNode(`⌘ ${i + 1}`);
    // Appends img with a class of group--image to list item
    li.appendChild(img).classList.add("group--image");
    // Appending h5 to list item element with the text
    li.appendChild(groupNum).appendChild(index);
    // Adding group--index class to appeneded h5
    li.appendChild(groupNum).classList.add("group--index");
    // Making callback function and adding event listener to list item
    li.addEventListener("click", function () {
        grabPosts(data, i);
        handleActiveGroup(li.getBoundingClientRect());
    });
    // Appending List item element to unorded list element with classnames
    groups.appendChild(li).classList.add("group", `group${i + 1}`);
}

// Using data for function above
data.forEach((data, i) => createGroups(data, i));