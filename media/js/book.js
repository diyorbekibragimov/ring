const newTitle = localStorage.getItem("bookName");
const bookId = localStorage.getItem("bookId");
const nameHeader = document.querySelector(".book-name");
const chapters = document.querySelector(".chapters");
const bookPoster = document.querySelector(".book-poster");

if(document.title != newTitle) {
    document.title = newTitle;
}
nameHeader.textContent = newTitle;
bookPoster.src = "../media/images/posters/book/" + `${bookId}.jpg`;

fetch("http://127.0.0.1:5000/get-book-chapters?book-id=" + bookId)
.then(response => response.json())
.then(data => {
    let docs = data["docs"];
    for(let i = 0; i < docs.length; i++) {
        let block = document.createElement("div");
        let p = document.createElement("p");

        block.className = "chapter-block";
        p.className = "chapter-name";

        p.textContent = docs[i]["chapterName"];

        block.appendChild(p);
        chapters.appendChild(block);
    }
})