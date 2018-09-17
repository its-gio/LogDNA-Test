const group = document.querySelector(".groups");

// Adds a list item to unordered list with an image and h5 text
data.forEach((data, i) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const groupNum = document.createElement("h5");
    const index = document.createTextNode(`⌘ ${i + 1}`);
    li.appendChild(img).classList.add("group--image");
    li.appendChild(groupNum).appendChild(index);
    li.appendChild(groupNum).classList.add("group--index");
    group.appendChild(li).classList.add("group", `group${i + 1}`);
});