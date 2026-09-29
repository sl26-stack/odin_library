const myLibrary = [
    {
        title: "The Hobbit",
        author: "JRR Tolkien",
        pages: 20,
        read: true,
    }, 
    {
        title: "Twilight",
        author: "Stephanie Meyer",
        pages: 150,
        read: true,
    }
];

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
    // this.info = function() {
    //     return this.name + " by " + this.author + ", " + this.pages + " pages, " + this.read
    // }
};

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
};

function displayLibrary(myLibrary) {
    const mainTable = document.createElement("table");
    const headerRow = document.createElement("tr");

    Object.keys(myLibrary[0]).forEach(bookKey => {
        const th = document.createElement("th");
        th.textContent = bookKey;
        headerRow.appendChild(th);
    });

    mainTable.appendChild(headerRow);
    
    myLibrary.forEach(book => {
        const row = document.createElement("tr");

        Object.values(book).forEach(bookAttr => {
            const cell = document.createElement("td");
            cell.textContent = bookAttr;
            row.appendChild(cell)
        });

        mainTable.appendChild(row);
    });

    document.getElementById("tableContainer").appendChild(mainTable);
};

// const form = document.getElementById("form");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();

//     const formData = new FormData(form);

//     const title = formData.get("title");
//     const author = formData.get("author");
//     const 

// })

displayLibrary(myLibrary);