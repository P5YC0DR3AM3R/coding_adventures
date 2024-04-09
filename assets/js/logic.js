const modeSwap = document.querySelector('#modeSwap');
const container = document.querySelector('.container');
const darkpic = document.querySelector("#darkpic");
const lightpic = document.querySelector("#lightpic");
// set default mode to dark
let mode = 'dark';

// listen for click on toggle switch
modeSwap.addEventListener('click', function (params) {
  // if mode dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
    lightpic.removeAttribute('class', 'hidden');
    darkpic.setAttribute('class', 'hidden');
  }
  // if mode light, apply dark background
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
    lightpic.setAttribute('class', 'hidden');
    darkpic.removeAttribute('class', 'hidden');
  }
});

function handler (params) {
}

const button = document.getElementById("clickable");

document.getElementById('blogForm').addEventListener('submit', function(event) {
   // prevent form submission
  event.preventDefault();

  // get input values
  let name = document.getElementById('name').value;
  let title = document.getElementById('title').value;
  let content = document.getElementById('content').value;

  // Create a meatball object
  let meatball = {
      name: name,
      title: title,
      content: content
  };

  // Get existing blogs from local storage or initialize as an empty array
  let blogs = JSON.parse(localStorage.getItem('blogs')) || [];

  // Add the new meatball to the array
  blogs.push(meatball);

  // Save the updated array to local storage
  localStorage.setItem('blogs', JSON.stringify(blogs));

  // Redirect to a new page to display the blogs
  window.location.href = 'blog.html';
});
