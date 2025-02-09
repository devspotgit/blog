



window.addEventListener("ready", () => {

    const category_list = document.querySelector(".category-list")

    document.querySelector(".site-header > button").addEventListener("click", ()=>{
        if(category_list.hasAttribute("open"))
            category_list.removeAttribute("open")
        else category_list.setAttribute("open","")
    })
})


