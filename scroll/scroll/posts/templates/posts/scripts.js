

//Start with First Post
let counter = 1;

//Load posts 20 at a time
const quantity = 20;

//WHen DOM loads, render the first 20 posts
document.addEventListener('DOMContentLoaded', load);

//If scrolled to bottom, load the next 20 posts
window.onscroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        load();
    }
};

document.addEventListener('click', event => {
    const element = event.target;
    if (element.className === 'hide') {
        element.parentElement.style.animationPlayState = 'running';
        element.parentElement.addEventListener('animationend', () => {
            element.parentElement.remove();
        });
    }
});

//Load next set of posts
function load() {
    //Set start and End post numbers, and update counter
    const start = counter;
    const end = start + quantity -1;
    counter = end + 1;

    //Get new posts and add posts
    fetch(`/posts?start=${start}&end=${end}`)
    .then(response => response.json())
    .then(data => {
        data.posts.forEach(add_post);
    })
};

//Add a new post with given contents to DOM
function add_post(contents) {
    //Create new post
    const post = document.createElement('div');
    post.className = 'post';
    post.innerHtml = `${contents} <button class="hide">Hide</button>`;

    //Add post to DOM
    document.querySelector('#posts').append(post);
};