const groupMarker = document.querySelector(".active-group");
const groups = document.querySelector(".groups");
const posts = document.querySelector(".posts");
const postContent = document.querySelector(".post-content--text");

function handleActiveGroup(liCoords) {
    const groupsCoord = groups.getBoundingClientRect();
    groupMarker.classList.add("active");
    const calcCoords = {
        top: (liCoords.top) - (groupsCoord.top / 1.7),
    }
    groupMarker.style.setProperty('transform', `translate(0px, ${calcCoords.top}px)`);
}

function getContent(content, i) {
    // console.log(content[`post${i}`]);
    const Piece = content[`post${i}`];
    const post = `
    <div class="post-content--text__inner">
        <h3 class="post-content--text__content-header">${Piece.title}</h3>
        <h4 class="post-content--text__subtitle">${Piece.subTitle}</h4>
        <p class="post-content--text__para-1">${Piece.content}</p>
        <figure>
            <img src="${Piece.img}" alt="Trulli" style="width:100%">
            <figcaption>${Piece.imgTitle}</figcaption>
        </figure>
        <p class="post-content--text__para-2">${Piece.content2}</p>
    </div>
    `;
    postContent.innerHTML = post;
};


function grabPosts(data, i) {
    // data[`group${i + 1}`].forEach(text => console.log(text));
    // Makes sure there is nothing inside of posts list before grabbing new list
    posts.innerHTML = "";
    // Template for each item in posts list
    data[`group${i}`].forEach((content, count) => {
        let Text = content[`post${count + 1}`];
        const postListItem = document.createElement("div");
        postListItem.classList.add("posts--list-item");
        const preview = `
            <h5 class="posts--list-item__heading">${Text.title}</h5>
            <p class="posts--list-item__content">${Text.content.substring(0, 240)}...</p>
        `;
        postListItem.innerHTML = preview;
        postListItem.addEventListener("click", function () {
            getContent(content, count + 1);
        });
        posts.appendChild(postListItem);
    });
    console.log();
}

// Adds a list item to unordered list with an image and h5 text
function createGroups(data, i) {
    // Creating elements {li, img, h5} and keeping track of index
    const li = document.createElement("li");
    const img = document.createElement("img");
    const groupNum = document.createElement("h5");
    const index = document.createTextNode(`⌘ ${i}`);
    // Appends img with a class of group--image to list item
    li.appendChild(img).classList.add("group--image");
    // Appending h5 to list item element with the text
    li.appendChild(groupNum).appendChild(index);
    // Adding group--index class to appeneded h5
    li.appendChild(groupNum).classList.add("group--index");
    // Making callback function and adding event listener to list item
    li.addEventListener("click", function () {
        // Populates posts list
        grabPosts(data, i);
        // Moves active group marker when clicked
        handleActiveGroup(li.getBoundingClientRect());
    });
    // Appending List item element to unorded list element with classnames
    groups.appendChild(li).classList.add("group", `group${i}`);
}

// Using data for function above
data.forEach((data, i) => createGroups(data, i + 1));