const newTitle = localStorage.getItem("characterName");
const characterId = localStorage.getItem("characterId");
const nameHeader = document.querySelector(".character-name");
const container = document.querySelector(".container");

if(document.title != newTitle) {
    document.title = newTitle;
}
nameHeader.textContent = newTitle;

fetch("http://127.0.0.1:5000/get-character?character-id=" + characterId)
.then(response => response.json())
.then(data => {
    let docs = data["docs"];
    for(let i = 0; i < docs.length; i++) {
        let block = document.createElement("div");
        let p = document.createElement("p");
        let span = document.createElement("span");

        block.className = "character-block";

        chapters.appendChild(block);
    }
})