const wmf = document.querySelector('#book-list li:nth-child(2) .name');
//console.log(wmf);
var books = document.querySelector('#book-list li .name');
//console.log(books);

books = document.querySelectorAll('#book-list li .name');
//console.log(books);

Array.from(books).forEach(function(book) {
    console.log(books);
});

//lesson 5
Array.from(books).forEach(function(book){
    book.textContent +='(book title)';
});

const bookList = document.querySelector('#book-list');
//bookList.innerHTML = '<h2>Books and more books...</h2>';
bookList.innerHTML += '<p>This is how you add HTML</p>';

//lesson6

const banner = document.querySelector('#page-banner');

console.log('#page-banner node type is:', banner.nodeType);
console.log('#page-banner node name is:', banner.nodeName);
console.log('#page-banner has child nodes:', banner.hasChildNodes());

const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);

//lesson8
const bookList = document.querySelector('#book-list');

console.log('book-list next sibling is:', bookList.nextSibling);
console.log('book-list next element sibling is:', bookList.nextElementSibling);

console.log('book-list previous sibling is:', bookList.previousSibling);
console.log('book-list previous element sibling is:', bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML += '<br />Too cool for everyone else!'

//lesson 9
var btns = document.querySelectorAll('#book-list .delete');
Array.from(btns).forEach(function(btn) {
    btn.addEventListener('click", function(e) {
        
        const li ') e.target.parentELement;
        
        li.parentNode.removeChild(li)
});
});

const link = document.querySelector('#page-banner a');

link.addEventListener('click', function(e)){
    e.preventDefault();
    console.log(navigation to', e.target.textContent,'was prevented');
    })
}

//lesson10

        
        const list = document.querySelector('#book-list ul');
    //delete books    
        list.addEventListener('click', function(e){
            if(e.target.parentELement;
        
        li.parentNode.removeChild(li);
}
});

//lesson11
//add book-list
const addForm + document.forms['add-book'];

addForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const value = addForm.querySelector('input(type="text"').value;
    console.log(value);
});

//hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
        list.style.display = "none";
    } else {
        list.style.display = "initial";
    }
});

//lesson12
//create elements
const li = document.createElement('li');
const bookName = document.createElement('span");
const deleteBtn = document.createElement('span');

//add content
deleteBtn.textContent = 'delete';
bookName.textContent = value;

//append to document
li.appendChild(bookName);
li.appendChild(deleteBtn);
list.appendChild(li);
});

//lesson16

//hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
        list.style.display = "none";
    } else {
        list.style.display = "initial";
    }
});

//filter books
const searchBar = document.forms['search-books'].querySelector('input')searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName9'li');
    Array.from(books).forEach(function(book) {
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    })
        
        

});