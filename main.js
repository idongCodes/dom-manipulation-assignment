// get elements by ID
const mainHeader = document.getElementById('main-heading');
const para1 = document.getElementById('para1');
const para2 = document.getElementById('para2');
const clickMe = document.getElementById('btn');
const para4 = document.getElementById('para4');

// -- select boxes
const allBoxes = document.querySelectorAll('.card-body');

const box1 = allBoxes[0];
const box2 = allBoxes[1];
const box3 = allBoxes[2];
const box4 = allBoxes[3];
const box5 = allBoxes[4];


// change inner content
mainHeader.innerText = 'New DOM Layout';
mainHeader.classList.add('bg-success');

para1.innerText = 'The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.';

para2.innerText = 'The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.';

clickMe.addEventListener('click', () => {
    para4.innerText = 'The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.';
})

// change box bg colours
box1.classList.add('bg-danger');
box2.classList.add('bg-primary');
box3.classList.add('bg-warning');
box4.classList.add('bg-success');
box5.classList.add('bg-dark');
