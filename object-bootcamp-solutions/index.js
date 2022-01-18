// Övning 2
let books = [
    { title: 'Alice in Wonderland', author: 'Lewis Carroll' },
    { title: "Hitchhiker's guide to the galaxy", author: 'Douglas Adams' },
    { title: 'Winnie the pooh', author: 'A.A Milne' },
    { title: 'The Red House Mystery', author: 'A.A Milne' }
];

//Övning 3
function findBook(bookTitle) {
    for(let book of books) {
        if(book.title == bookTitle) {
            return book;
        }
    }

    return null;
}

function findAuthor(bookAuthor) {
    let booksByAuthor = [];

    for(let book of books) {
        if(book.author == bookAuthor) {
            booksByAuthor.push(book);
        }
    }

    return booksByAuthor;
}

const foundBook = findBook('Winnie the pooh');
console.log(foundBook);
const foundBooks = findAuthor('A.A Milne');
console.log(foundBooks);


// Övning 4

/**
 * 1. Loopa ut vår sträng i en for-loop
 * 2. Om vi hittar tecknet för första gången lägg till det i objektet med värde 1
 * 3. Ifall vi redan har hittat första förekomsten av tecknet, addera med 1
 */

function letterFrequency(str) {
    let result = {};

    for(let char of str) {
        if(result[char] == undefined) {
            result[char] = 1;
        } else {
            result[char]++;
        }
    }

    console.log(result);
}

letterFrequency('christoffer');

