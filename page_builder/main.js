

import { page } from "/page_builder/templates.js"
import { getPost, getCategory, getSearchedPosts, getCategoryPosts } from "/page_builder/api.js"


fetch("/post_data.json")
.then(resp => resp.json())
.then(data => {
    
    if(location.pathname.split("/")[1] == "posts"){

        fetch("/post_content/"+location.pathname.split("/")[2]+".html")
        .then(res => res.text())
        .then(content => {

            const d = {}
            d.post = getPost(location.pathname.split("/")[2], data.posts)
            d.categories = data.categories
            d.content = content
            d.type = "post"

            document.body.innerHTML = page(d) 

            document.body.dispatchEvent(
                new CustomEvent("pageReady", {
                    bubbles: true
                })
            )
        })
    }

    else if(location.pathname.split("/")[1] == "categories"){

        const d = {}
        d.category = getCategory(location.pathname.split("/")[2], data.categories)
        d.posts = getCategoryPosts(location.pathname.split("/")[2], data.posts)
        d.categories = data.categories
        d.type = "category"

        document.body.innerHTML = page(d) 
        
        document.body.dispatchEvent(
            new CustomEvent("pageReady", {
                bubbles: true
            })
        )
    }

    else if(location.pathname.split("/")[1] == "search"){

        const params = new URLSearchParams(location.search)

        const d = {}
        d.posts = getSearchedPosts(params.get("keyword"), data.posts)
        d.categories = data.categories
        d.keyword = params.get("keyword")
        d.type = "search"
        
        document.body.innerHTML = page(d) 

        document.body.dispatchEvent(
            new CustomEvent("pageReady", {
                bubbles: true
            })
        )
    }
    else{

        const d = {}
        d.posts = data.posts
        d.categories = data.categories
        d.type = "home"

        document.body.innerHTML = page(d) 

        document.body.dispatchEvent(
            new CustomEvent("pageReady", {
                bubbles: true
            })
        )
    }

})






