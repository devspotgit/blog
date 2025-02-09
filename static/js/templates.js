

import {exp_capitalize, month_name, sort_post} from "/static/js/api.js"



function site_header(){
    return `
        <div class="site-header-wrapper">
            <div class="site-header">
                <button><i class="fa-solid fa-bars"></i></button>
                <a href="/">Blog</a>
                <form class="search" action="/">
                    <input type="text" name="search" placeholder="keywords...">
                    <button><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </div>
        </div>
    `
}


function site_footer(){
    return `
        <div class="site-footer">
            <p>Devspot - all rights reserved</p>
        </div>
    `
}

function category_list(_category_list){
    let categories = ""
    _category_list.forEach(category_item => {
        const category_title = exp_capitalize(category_item)
        categories += `<a href="/?category=${category_item}">${category_title}</a>`
    })
    return`
        <div class="category-list-wrapper">
            <div class="category-list">${categories}</div>
        </div>
    `
}


function post_header(post){
    const post_title = exp_capitalize(post.name)
    return`
        <div class="post-header-wrapper">
            <div class="post-header">
                <p>${post_title}</p>
                <p>${month_name[post.date.split("-")[1]-1]+" "+post.date.split("-")[0]+ ", "+post.date.split("-")[2]} </p>
            </div>
        </div>
    `
}


function search_header(keyword){
    return`
        <div class="search-header">
            <p>Search - ${keyword}</p>
        </div>
    `
}


function category_header(category){
    return`
        <div class="category-header">
            <p>Category - ${exp_capitalize(category)}</p>
        </div>
    `
}


function home_header(){
    return `
        <div class="home-header">
            <p>All Posts</p>
        </div>
    `
}


function post_card(post){
    const post_title = exp_capitalize(post.name)
    return `
        <div class="post-card">
            <a href="/?post=${post.name}">${post_title}</a>
            <p>${post.preview}</p>
            <a href="/?post=${post.name}">Read More</a>
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
        <div class="home-page">
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
        <div class="category-page">
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
        <div class="search-page">
            ${site_header()}
            ${category_list(_category_list)}
            ${search_header(keyword)}
            ${post_list(_post_list)}
            ${site_footer()}
        </div>
    `
}


export {home_page, category_page, search_page, post_page}




