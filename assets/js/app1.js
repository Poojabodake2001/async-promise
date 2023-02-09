let cl = console.log;
const blogsContainer = document.getElementById("blogsContainer")
let blogs = [
    {title: "Angular 15 Update", content: "It supports Satndalone Component"},
    {title: "ES6 - Promise", content: "ES6 gives us Promise to handle Async Operations"}
]

function cresteBlog (blog, callBackFun) {
    setTimeout(() => {
        blogs.push(blog);
        cl(blogs, 'New blog is created')
        callBackFun()
    }, 3000);
}
function fetchdata(){
    setTimeout(() => {
        cl(blogs, 'All blogs are fetched successfully !!!')
    },1000)
}
function templatingCard(arr){
    let result ='';
    arr.forEach(blog => {
        result += `
                <div class="card mb-4">
                    <div class="card-header">${blog.title}</div>
                    <div class="card-body">${blog.content}</div>
                </div>
            `
    });
    blogsContainer.innerHTML = result;
}