

import {homePage, categoryPage, searchPage, postPage} from "/page_builder/templates.js"



fetch("/post_data.json")
.then(resp => resp.json())
.then(data => {

    const pageType = location.pathname.split("/")[1]

    if(pageType == "posts"){

        const slug = location.pathname.split("/")[2]

        fetch("/post_content/"+slug+".html")
        .then(res => res.text())
        .then(content => {
            document.body.innerHTML = postPage(data.posts, data.categories, slug, content) 
            document.body.dispatchEvent(
                new CustomEvent("pageReady", {
                    bubbles: true
                })
            )
        })
    }
    else if(pageType == "categories"){

        const slug = location.pathname.split("/")[2]
        document.body.innerHTML = categoryPage(data.posts, data.categories, slug) 
        document.body.dispatchEvent(
            new CustomEvent("pageReady", {
                bubbles: true
            })
        )
    }
    else if(pageType == "search"){

        const params = new URLSearchParams(location.search)
        document.body.innerHTML = searchPage(data.posts, data.categories, params.get("keyword")) 
        document.body.dispatchEvent(
            new CustomEvent("pageReady", {
                bubbles: true
            })
        )
    }
    else{

        document.body.innerHTML = homePage(data.posts, data.categories) 
        document.body.dispatchEvent(
            new CustomEvent("pageReady", {
                bubbles: true
            })
        )
    }

})






