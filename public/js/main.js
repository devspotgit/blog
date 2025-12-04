

import * as templates from "/js/templates.js"

const searchInput = document.querySelector(".search-input input")

const searchResult = document.querySelector(".search-result")

searchInput.addEventListener("input", e => {

    fetch("/search", {

        method:"POST",
        
        headers:{

            "Content-Type":"application/json"
        },

        body:JSON.stringify({

            text:e.target.value.trim()
        })
    })

    .then(res => res.json())

    .then(data => {

        searchResult.innerHTML = data.posts.map(post => templates.searchItem(post)).join(" ")
    })

    searchResult.innerHTML = "loading..."
})




