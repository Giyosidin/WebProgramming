//1.Book Class
class Book{
    constructor(title,author,publisher,isbn){
        this.title = title
        this.author = author
        this.publisher = publisher
        this.isbn = isbn
    }
    //let book1 = new Book ('')
}

// 2. ui class: For UI 
class UI {

    // 2.1 dISPLAY books

    static displayBooks(){
        const books = [

            {
                title: "Book 1",
                author: 'bclee',
                publisher: 'Joongbu',
                isbn: '91922374',  
            },
            
            {
                title: "Book 1",
                author: 'bclee',
                publisher: 'Joongbu',
                isbn: '91722374',  
            },
            
            {
                title: "Book 1",
                author: 'bclee',
                publisher: 'Joongbu',
                isbn: '91922374',  
            },
            
            
        ]

        books.forEach( (book) => UI.addBookToList(book))
    }
    static addBookToList(book){
        const list = document.getElementById('book-list');
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.publisher}</td>
        <td>${book.isbn}</td>
        <td> <a href= "#" class="btn btn-danger btn-sm delete"> X </a></td>`
        
        list.appendChild(row);
    
    }

    //2.3 Delete book
    static deleteBook(target) {
        target.parentElement.parentElement.remove()
    } 

    //make <tr>
    //2.4
    static showAlert(message,className){
        const div = document.createElement('div')
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form')
        container.insertBefore(div,form)

        setTimeout(()=> document.querySelector(".alert").remove(), 2000)
    }
};

//3.1
document.addEventListener("DOMContentLoaded", UI.displayBooks)

// 3.2 Event add a book

document.querySelector('#book-form').addEventListener('submit', (e) =>{
e.preventDefault()

const title = document.querySelector("#title").value
const author = document.querySelector("#author").value
const isbn = document.querySelector("#isbn").value

if(title === '' || author === '' || isbn === '')
{
  //  alert ('Please type  all.... ')

}
else{
    const book = new Book(title, author, isbn);
    UI.addBookToList(book);
    

    UI.addBookToList(book);

    
    Store.addBook(book);
 
    UI.showAlert('책이 저장되었습니다', 'success');
 
     
    UI.clearFields();
}
});

//3.3
document.querySelector('#book-list').addEventListener('click', (e) =>{
    UI.deleteBook(e.target)
})
