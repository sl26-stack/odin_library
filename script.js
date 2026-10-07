const myLibrary = [];

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;

    if (!read) {
        this.read = "No";
    } else {
        this.read = "Yes";
    }

    this.id = crypto.randomUUID();
    console.log(Book)
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

    const removeCell = headerRow.cells[headerRow.cells.length - 1];
    removeCell.textContent = "";

    mainTable.appendChild(headerRow);
    
    myLibrary.forEach(book => {
        const row = document.createElement("tr");

        Object.values(book).forEach(bookAttr => {
            const cell = document.createElement("td");
            cell.textContent = bookAttr;
            row.appendChild(cell)
        });

        const lastCell = row.cells[row.cells.length - 1];

        const actionCell = document.createElement("td");

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove Book";
        removeBtn.className = "removeBtn";
        removeBtn.id = book.id;

        actionCell.appendChild(removeBtn);
        lastCell.replaceWith(actionCell);

        const readCell = document.createElement("td");

        const readChangeBtn = document.createElement("button");
        readChangeBtn.textContent = "Change Read Status";
        readChangeBtn.className = "readChangeBtn";
        readChangeBtn.id = book.id;

        readCell.appendChild(readChangeBtn);

        row.appendChild(readCell);

        mainTable.appendChild(row);
    });

    document.getElementById("tableContainer").replaceChildren(mainTable);
};

const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    addBookToLibrary(title, author, pages, read);
    displayLibrary(myLibrary);
    this.reset();
});

const tableContainer = document.getElementById("tableContainer")

tableContainer.addEventListener("click", function(event) {
    event.preventDefault();

    const buttonClicked = event.target;
    const buttonID = buttonClicked.id;
    const indexOfID = myLibrary.findIndex(book => book.id === buttonID);
    
    if (buttonClicked.className == "removeBtn") {
        myLibrary.splice(indexOfID, 1);

    } else if (buttonClicked.className == "readChangeBtn" && myLibrary[indexOfID].read == "Yes") {
        myLibrary[indexOfID].read = "No";

    } else if (buttonClicked.className == "readChangeBtn" && myLibrary[indexOfID].read == "No") {
        myLibrary[indexOfID].read = "Yes";

    };

    displayLibrary(myLibrary);
});

displayLibrary(myLibrary);