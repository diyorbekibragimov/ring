const books = document.querySelector('.books');
const movies = document.querySelector('.movies');
const chapters = document.querySelector('.chapters');
const characters = document.querySelector('.characters');

fetch("http://127.0.0.1:5000/list-books")
.then(response => response.json())
.then(data => {
    let docs = data["docs"];
    for(let i = 0; i < docs.length; i++) {
        let block = document.createElement("div");
        let blockImage = document.createElement("img");

        blockImage.className = "book-cover"
        block.className = "book-block";
        
        blockImage.src = "../media/images/book-covers/" + `${i+1}.jpg`;

        let book_id = docs[i]["_id"]
        block.addEventListener("click", _ => {
            localStorage.setItem("bookId", book_id);
            localStorage.setItem("bookName", docs[i]["name"]);
            window.location.href = "book.html";
        })
        block.id = book_id

        let name = document.createElement("p");
        name.className = "book-name";
        name.textContent = docs[i]["name"];

        block.appendChild(blockImage);
        block.appendChild(name);
        books.appendChild(block);
    }
})

fetch("http://127.0.0.1:5000/list-movies")
.then(response => response.json())
.then(data => {
    let docs = data["docs"];
    for(let i = 0; i < docs.length; i++) {
        let block = document.createElement("div");
        block.className = "movie-block";
        
        let movie_id = docs[i]["_id"]
        block.addEventListener("click", _ => {
            localStorage.setItem("movieId", movie_id);
            localStorage.setItem("movieName", docs[i]["name"]);
            window.location.href = "movie.html";
        })
        block.id = movie_id

        let name = document.createElement("p");
        name.className = "movie-name";
        name.textContent = docs[i]["name"];

        block.appendChild(name);
        movies.appendChild(block);
    }
})

fetch("http://127.0.0.1:5000/list-characters")
.then(response => response.json())
.then(data => {
    let docs = data["docs"];
    for(let i = 0; i < docs.length; i++) {
        let block = document.createElement("tr");
        block.className = "character-block";

        let character_id = docs[i]["_id"]
        block.id = character_id
        
        neededData = ["name", "race", "gender"];
        for(let j = 0; j < 3; j++) {
            let td = document.createElement("td");
            if (j == 0) {
                td.addEventListener("click", _ => {
                    localStorage.setItem("characterId", character_id);
                    localStorage.setItem("characterName", docs[i][neededData[j]])
                    window.location.href = "character.html";
                })
            }
            td.textContent = docs[i][neededData[j]];
            block.appendChild(td);
        }

        characters.appendChild(block);
    }
})