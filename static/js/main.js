


window.addEventListener("pageReady", () => {

    document.querySelector("form").addEventListener("submit", (e) => {
        
        e.preventDefault()
        const keyword = document.querySelector("input").value
        location.href = "/search/?keyword="+keyword
    })


    document.querySelector(".header div button").addEventListener("click", (e) => {
        document.querySelector(".side").setAttribute("sideopen","")
        document.querySelector(".header").setAttribute("sideopen","")

        if(document.querySelector(".post-list"))
            document.querySelector(".post-list").setAttribute("sideopen","")

        if(document.querySelector(".post-content"))
            document.querySelector(".post-content").setAttribute("sideopen","")

        if(document.querySelector(".post-header"))
            document.querySelector(".post-header").setAttribute("sideopen","")

        if(document.querySelector(".title"))
            document.querySelector(".title").setAttribute("sideopen","")

        document.querySelector(".footer").setAttribute("sideopen","")
        document.querySelector('[class$="page"]').setAttribute("sideopen","")
    })

    document.querySelector(".side button").addEventListener("click", (e) => {
        document.querySelector(".side").removeAttribute("sideopen")
        document.querySelector(".header").removeAttribute("sideopen")

        if(document.querySelector(".post-list"))
            document.querySelector(".post-list").removeAttribute("sideopen")

        if(document.querySelector(".post-content"))
            document.querySelector(".post-content").removeAttribute("sideopen")

        if(document.querySelector(".post-header"))
            document.querySelector(".post-header").removeAttribute("sideopen")

        if(document.querySelector(".title"))
            document.querySelector(".title").removeAttribute("sideopen")
       
        document.querySelector(".footer").removeAttribute("sideopen")
        document.querySelector('[class$="page"]').removeAttribute("sideopen")
    })



})



