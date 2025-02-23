

import { getPost, getCategory, getSearchedPosts, getCategoryPosts } from "/page_builder/api.js"



/* template parts */

function header(){

    return `
        <div class="header">
            <div>
                <button><i class="fa-solid fa-bars"></i></button>
                <a href="/">Blog</a>
            </div>
            <form>
                <input placeholder="search post..." type="text">
                <button><i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div>
    `
}


function side(categories){

    let html = ""

    categories.forEach(item => {
        html+=`<a href="/categories/${item.slug}">${item.title}</a>`
    })

    return `
        <div class="side">
            <button><i class="fa-solid fa-xmark"></i></button>
            <div class="categories">
                ${html}
            </div>
        </div>
    `
}


function title(name){

    return `
        <div class="title">
            <span>${name}</span>
        </div>
    `
}

function postHeader(post){

    return `
        <div class="post-header">
            <span>${post.title}</span>
            <span>${post.date}</span>
        </div>
    `
}


function postCard(post){

    return `
        <div class="post-card">
            <a href="/posts/${post.slug}">${post.title}</a>
            <span>${post.date}</span>
            <p>${post.preview}</p>
            <a href="/posts/${post.slug}">Read More</a>
        </div>
    `
}

function postList(posts){

    let html = ""

    posts.forEach(item => {
        html+=`${postCard(item)}`
    })

    return `
        <div class="post-list">
            ${html}
        </div>
    `
}


function postContent(content){

    return `
        <div class="post-content">
            ${content}
        </div>
    `
}


function footer(){

    return `
        <div class="footer">
            <span>Devspot - All Rights Resersed</span>
        </div>
    `
}




/* templates */

function homePage(posts, categories){

    return `
        <div class="home-page">
            ${header()}
            ${title("All Posts")}
            ${side(categories)}
            ${postList(posts)}
            ${footer()}
        </div>
    `
}


function postPage(posts, categories, slug, content){

    const post = getPost(slug, posts)
    
    return `
        <div class="post-page">
            ${header()}
            ${postHeader(post)}
            ${side(categories)}
            ${postContent(content)}
            ${footer()}
        </div>
    `
}


function categoryPage(posts, categories, slug){

    const category = getCategory(slug, categories)

    const categoryPosts = getCategoryPosts(slug, posts)

    return `
        <div class="category-page">
            ${header()}
            ${title(category.title)}
            ${side(categories)}
            ${postList(categoryPosts)}
            ${footer()}
        </div>
    `
}


function searchPage(posts, categories, keyword){

    const searchedPosts = getSearchedPosts(keyword, posts)

    return `
        <div class="search-page">
            ${header()}
            ${title(keyword)}
            ${side(categories)}
            ${postList(searchedPosts)}
            ${footer()}
        </div>
    `    
}



export { postPage, categoryPage, homePage, searchPage }




