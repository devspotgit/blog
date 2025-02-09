

import {category_list, post_list, exp_capitalize} from "/static/js/api.js"


import {home_page, category_page, search_page, post_page} from "/static/js/templates.js"


const param = new URLSearchParams (window.location.search)


if(param.has("post")){
    fetch("/post_list.json").then(resp =>{
        resp.json().then(all_post => {
            fetch("/post_content/"+param.get("post").split("-").join("_")+".html").then(resp => {
                resp.text().then(post_content => {
                    const categories = category_list(all_post)
                    const post = post_list(all_post, "post", param.get("post"))[0]
                    document.title = exp_capitalize(post.name)
                    document.body.innerHTML = post_page(post, categories, post_content) 
                    window.dispatchEvent(
                        new CustomEvent("ready", 
                            {
                                bubbles: true,
                            }
                        )
                    )
                })
            })
        })
    })

}
else if(param.has("category")){
    fetch("/post_list.json").then(resp =>{
        resp.json().then(all_post => {
            const categories = category_list(all_post)
            const posts = post_list(all_post, "category", param.get("category"))
            document.title = exp_capitalize(param.get("category"))
            document.body.innerHTML = category_page(param.get("category"), categories, posts)
            window.dispatchEvent(
                new CustomEvent("ready", 
                    {
                        bubbles: true,
                    }
                )
            ) 
        })
    })
}
else if(param.has("search")){
    fetch("/post_list.json").then(resp =>{
        resp.json().then(all_post => {
            const categories = category_list(all_post)
            const posts = post_list(all_post, "search", param.get("search"))
            document.title = exp_capitalize(param.get("search"))
            document.body.innerHTML = search_page(param.get("search"), categories, posts) 
            window.dispatchEvent(
                new CustomEvent("ready", 
                    {
                        bubbles: true,
                    }
                )
            )
        })

    })
}
else{
    fetch("/post_list.json").then(resp =>{
        resp.json().then(all_post => {
            const categories = category_list(all_post)
            document.title = "All Posts"
            document.body.innerHTML = home_page(all_post, categories)
            window.dispatchEvent(
                new CustomEvent("ready", 
                    {
                        bubbles: true,
                    }
                )
            )
        })

    })
}









