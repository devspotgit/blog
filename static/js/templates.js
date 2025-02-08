

import {exp_capitalize, month_name, sort_post} from "/static/js/api.js"



function site_header(){
    return `
        <div class="site-header">
            <a href="/">DevSpot - Blog</a>
            <form class="search" action="/">
                <input type="text" name="search" placeholder="keywords...">
                <button></button>
            </form>
        </div>
    `
}


function site_footer(){
    return `
        <div class="site-footer">Devspot - all rights reserved</div>
    `
}

function category_list(_category_list){
    let categories = ""
    _category_list.forEach(category_item => {
        const category_title = exp_capitalize(category_item)
        categories += `<a href="/?category=${category_item}">${category_title}</a>`
    })
    return`
        <div class="category-list">${categories}</div>
    `
}


function post_header(post){
    const post_title = exp_capitalize(post.name)
    return`
        <div class="post-header">
            <span>${post_title}</span>
            <span>${month_name[post.date.split("-")[1]-1]+" "+post.date.split("-")[0]+ ", "+post.date.split("-")[2]} </span>
        </div>
    `
}


function search_header(keyword){
    return`
        <div class="search-header">Search - ${keyword}</div>
    `
}


function category_header(category){
    return`
        <div class="category-header">Category - ${exp_capitalize(category)}</div>
    `
}


function home_header(){
    return `
        <div class="home-header">All Posts</div>
    `
}


function post_card(post){
    const post_title = exp_capitalize(post.name)
    return `
        <div class="post-card">
            <a href="/?name=${post.name}">${post_title}</a>
            <p>${post.preview}</p>
            <a href="/?name=${post.name}">Read More...</a>
        </div>
    `
}


function post_list(_post_list){
    sort_post(_post_list)
    let posts = ""
    _post_list.forEach(post_item => {
        posts += `${post_card(post_item)}`
    })
    return `
        <div class="post-list">${posts}</div>
    `
}


function post_content(_post_content){
    return `
        <div class="post-content">${_post_content}</div>
    `
}


function home_page(_post_list, _category_list){
    return`
        <div class="post-page">
            ${site_header()}
            ${category_list(_category_list)}
            ${home_header()}
            ${post_list(_post_list)}
            ${site_footer()}
        </div>
    `
}


function post_page(post, _category_list, _post_content){
    return`
        <div class="post-page">
            ${site_header()}
            ${category_list(_category_list)}
            ${post_header(post)}
            ${post_content(_post_content)}
            ${site_footer()}
        </div>
    `
}


function category_page(category, _category_list, _post_list){
    return`
        <div class="post-page">
            ${site_header()}
            ${category_list(_category_list)}
            ${category_header(category)}
            ${post_list(_post_list)}
            ${site_footer()}
        </div>
    `
}


function search_page(keyword, _category_list, _post_list){
    return`
        <div class="post-page">
            ${site_header()}
            ${category_list(_category_list)}
            ${search_header(keyword)}
            ${post_list(_post_list)}
            ${site_footer()}
        </div>
    `
}


export {home_page, category_page, search_page, post_page}




