const group = document.querySelector(".groups");
const posts = document.querySelector(".posts");

function grabPosts(data, i) {
    // data[`group${i + 1}`].forEach(text => console.log(text));
    let template = data[`group${i + 1}`].forEach((content, i) => {
        let milk = content[`post${i + 1}`];
        console.log(milk.Title);
        return `
            <div>
            <h1>${milk.Title}</h1>
            </div>
        `
    });
    console.log(template);
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
    });
    // Appending List item element to unorded list element with classnames
    group.appendChild(li).classList.add("group", `group${i + 1}`);
}

// Using data for function above
data.forEach((data, i) => createGroups(data, i));