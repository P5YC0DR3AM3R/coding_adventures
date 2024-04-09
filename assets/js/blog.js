const modeSwap = document.querySelector('#modeSwap');
const container = document.querySelector('.container');

// set default mode to dark
let mode = 'dark';

// listen for click on toggle switch
modeSwap.addEventListener('click', function () {
  // toggle mode
  mode = (mode === 'dark') ? 'light' : 'dark';
  container.classList.toggle('light', mode === 'light');
});

// Retrieve saved blogs from local storage
const blogs = JSON.parse(localStorage.getItem('blogs')) || [];

// Display blogs in a table
const blogsContainer = document.getElementById('blogsContainer');
const table = document.createElement('table');

blogs.forEach(blog => {
    const row = table.insertRow();
    const nameCell = row.insertCell(0);
    const titleCell = row.insertCell(1);
    const contentCell = row.insertCell(2);

    nameCell.textContent = "Name: " + blog.name;
    titleCell.textContent = "Title: " + blog.title;
    contentCell.textContent = "Story: " + blog.content;
});

blogsContainer.appendChild(table);

console.log(table);



