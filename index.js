function init() {

    const booksListDiv = document.getElementById("booksList") // create the books list container
    booksListDiv.style.border = "1px solid black"
    booksListDiv.style.background = "pink"
    booksListDiv.style.textAlign = "center"

    for (let index = 0; index < books.length; index++) {
        const currentBook = books[index];
        const bookContainerDiv = document.createElement("div") // create the single book container
        bookContainerDiv.id = `book_${index}`
        bookContainerDiv.className = "book-card"
        const bookTitleH3 = document.createElement("h3") // create header for title
        bookTitleH3.innerText = currentBook.title // insert the title from the Data into UI 

        const bookTitleH4 = document.createElement("h4") // create header for title
        bookTitleH4.innerText = currentBook.author
        bookTitleH4.style.background = "green"

        const bookCountryP = document.createElement("p");
        bookCountryP.innerText = "Country: " + currentBook.country;

        const bookImage = document.createElement("img");
        bookImage.src = currentBook.imageLink;
        bookImage.alt = currentBook.title + " Image";
        bookImage.style.maxWidth = "200px";
        bookImage.onerror = function() {
            console.error("Error loading image for", currentBook.title);
        };
        
        const bookLanguageP = document.createElement("p");
        bookLanguageP.innerText = "Language: " + currentBook.language;

        const bookLinkA = document.createElement("a");
        bookLinkA.href = currentBook.link;
        bookLinkA.innerText = "More Info";
        bookLinkA.target = "_blank";

        const bookPagesP = document.createElement("p");
        bookPagesP.innerText = "Pages: " + currentBook.pages;

        const bookYearP = document.createElement("p");
        bookYearP.innerText = "Year: " + currentBook.year;


        const button = document.createElement("button");
        button.innerText = "Select"
        button.addEventListener("click", function () {
            bookContainerDiv.style.background = "yellow"
        })

        const buttonDelete = document.createElement("button");
        buttonDelete.innerText = "🗑️"

        buttonDelete.addEventListener("click", function () {
            bookContainerDiv.remove()
        })

        bookContainerDiv.append(bookTitleH3, bookTitleH4, bookCountryP, bookImage, bookLanguageP, bookLinkA, bookPagesP, bookYearP, button, buttonDelete);

        booksListDiv.append(bookContainerDiv)
    }

}


init();