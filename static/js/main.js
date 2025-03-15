


window.addEventListener("pageReady", () => {

    document.querySelector("form").addEventListener("submit", (e) => {
        
        e.preventDefault()
        const keyword = document.querySelector(".search-input").value
        location.href = "/search/?keyword="+keyword
    })


})



