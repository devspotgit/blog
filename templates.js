const api = require("./api.js")

const fs = require("fs")

const path = require("path")



/* template parts */
function header(){

    return `
        <div class="header">
            <a href="/">Blog</a>
        </div>
    `
}

function footer(){

    return `
        <div class="footer">
            <a href="https://devspot.ca">Devspot</a>
        </div>
    `
}

function categoryList(category){

    return `
        <div class="category-list">
            ${
                api.getCategoryList().map(_category => {
                    if(category == _category) return `<a href="/categories/${_category}?page=1" selected>${api.getName(_category)}</a>`
                    else return `<a href="/categories/${_category}?page=1">${api.getName(_category)}</a>`
                }).join(" ")
            }
        </div>
    `
}

function search(){

    return `
        <div class="search">
            <input type="text" placeholder="Search...">
            <span><i class="fa-solid fa-magnifying-glass"></i></span>
            <div class="search-result"></div>
        </div>
    `
}

function postContent(post){

    const filename = api.getFilename(post.slug)

    const content = fs.readFileSync(path.join(__dirname, "post_content", filename+".html"), "utf-8")

    return `<div class="post-content">${content}</div>`
}

function title(type, data){

    return `
        ${
            type == "post" ? `
                <div class="title">
                    <a href="/categories/${data.category}?page=1">${api.getName(data.category)}</a>
                    <span><i class="fa-solid fa-chevron-right"></i></span>
                    <span>${api.getName(data.slug)}</span>
                </div>
            `:`
                <div class="title">
                    <a href="/categories/all?page=1">Home</a>
                    <span><i class="fa-solid fa-chevron-right"></i></span>
                    <span>${api.getName(data)}</span>
                </div>
            `
        }
    `
}

function postItem(post){

    return `
        <div class="post-item">
            <a href="/posts/${post.slug}">${api.getName(post.slug)}</a>
            <span>${api.getDate(post.date)}</span>
            <p>${post.preview}</p>
        </div>
    `
}

function postList(posts, page){

    const startIndex = (page - 1) * api.postPerPage

    const maxIndex = startIndex + api.postPerPage - 1 

    return `
        <div class="post-list">
            ${(()=>{
                let html = ""
                for(let i=startIndex; i<=maxIndex; i++){
                    if(posts[i]) html += postItem(posts[i])
                }
                return html
            })()}
        </div>
    `
}

function pagination(postList, category, page){

    let pages

    if(postList.length <= api.postPerPage) pages = 1

    else{

        const remainder = postList.length % api.postPerPage

        pages = ((postList.length - remainder) / api.postPerPage) + (remainder != 0 ? 1 : 0)
    }

    let left = ""

    let right = ""

    let next = ""

    let prev = ""

    if(pages > 1){

        for(let i=page-2; i<=page-1; i++){

            if(i>=1){

                left += `<a href="/categories/${category}?page=${i}">${i}</a>`
            }
        }

        for(let i=page+1; i<=page+2; i++){

            if(i<=pages){

                right += `<a href="/categories/${category}?page=${i}">${i}</a>`
            }
        }

        if(page + 1 <= pages) next = `<a next href="/categories/${category}?page=${page + 1}"><i class="fa-solid fa-chevron-right"></i></a>`

        if(page - 1 >= 1) prev =   `<a prev href="/categories/${category}?page=${page - 1}"><i class="fa-solid fa-chevron-left"></i></a>`

        

        return `
            <div class="pagination">
                ${prev}
                ${left}
                ${`<a href="/categories/${category}?page=${page}" current>${page}</a>`}
                ${right}
                ${next}
            </div>
        `
    }

    else return ""
}



/* full page templates */
function categoryPage(category, page){

    const posts = api.getCategoryPost(category)

    api.sortPost(posts)

    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" rel="stylesheet">
                <link href="/css/main.css" rel="stylesheet">
                <title>${api.getName(category)}</title>
            </head>
            <body>
                <div class="root">
                    ${header()}
                    ${categoryList(category)}
                    ${search()}
                    ${title("category", category)}
                    <div class="page-content"> 
                        ${postList(posts, page)}
                        ${pagination(posts, category, page)}
                    </div>
                    ${footer()}
                </div>
                <script type="module" src="/js/main.js"></script>
            </body>
        </html>
    `
}

function postPage(slug){

    const post = api.getPost(slug)

    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link href="/css/main.css" rel="stylesheet">
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" rel="stylesheet">
                <title>${api.getName(post.slug)}</title>
            </head>
            <body>
                <div class="root">
                    ${header()}
                    ${categoryList(post.category)}
                    ${search()}
                    ${title("post", post)}
                    ${postContent(post)}
                    ${footer()}
                </div>
                <script type="module" src="/js/main.js"></script>
            </body>
        </html>
    `
}



module.exports = { categoryPage, postPage }

