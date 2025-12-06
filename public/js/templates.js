

import * as api from "/js/api.js"

function searchItem(post){

    return `
        <div class="search-item">
            <a href="/posts/${post.slug}">${api.getName(post.slug)}</a>
            <span>${api.getDate(post.date)}</span>
        </div>
    `
}

function spinner(){

    return `
        <div class="spinner">
            <span></span>
        </div>
    `
}

export { searchItem, spinner }


