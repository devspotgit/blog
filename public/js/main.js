

import * as templates from "/js/templates.js"

const searchInput = document.querySelector(".search input")

const searchResult = document.querySelector(".search-result")

let timer = null

searchInput.addEventListener("input", e => {

    if(!e.target.value.trim()) {

        searchResult.innerHTML = ""

        if(timer) clearTimeout(timer)
    }

    else{

        if(timer) clearTimeout(timer)

        timer = setTimeout(() => {

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

        }, 2500)
    }
   
})

searchInput.addEventListener("focusout", ( ) => {

    searchResult.innerHTML = ""
})




