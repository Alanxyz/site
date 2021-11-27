const blogs_element = document.getElementById('blogs');

fetch('../json/blogs.json')
    .then(response => response.json())
    .then(data => data.blogs.map(blog => {
        blogs_element.innerHTML += `<br><a href="${blog.link}">${blog.title}</a>`;
        console.log(blog.link)
    }));
