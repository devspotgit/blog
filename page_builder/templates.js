


function page(data){

    return `
        <input type="checkbox" id="box">
        <div class="page"> 
            <div class="transparent" onClick="(
                ()=>{
                    document.querySelector('#box').checked=false
                }
            )()"></div>
            <div class="header-wrapper">
                <div class="header">
                    <button class="side-open" onClick="(
                        ()=>{
                            document.querySelector('#box').checked=true 
                        }
                    )()"><i class="fa-solid fa-bars"></i></button>
                    <a class="site-name" href="/">Blog</a>
                    <form class="search">
                        <input class="search-input" placeholder="search posts..." type="text">
                        <button class="search-submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                </div>
            </div>

            <div class="side">
                <div class="side-header">
                    <button class="side-close" onClick="(
                        document.querySelector('#box').checked=false

                    )()"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <div class="categories">
                    ${(()=>{
                        let html =""
                        data.categories.forEach(category => {
                            html+='<a class="category" href="/categories/'+category.slug+'">'+category.title+'</a>'
                        })
                        return html
                    })()}
                </div>
            </div>

            <div class="main">
                <div class="${data.type == "post" ? "post-header" : "page-title"}">
                    ${
                        data.type == "post" ? '<span class="post-title">'+data.post.title+'</span> <span class="post-date">'+data.post.date+'</span>'
                        : data.type == "category" ? data.category.title 
                        : data.type == "search" ? data.keyword
                        : "All Posts"
                    }
                </div>

                <div class="${ data.type == "post" ? "post-content" : "post-list"}">
                    ${
                        data.type == "post" ? data.content
                        : (()=>{
                            let html =""
                            data.posts.forEach(post => {
                                html+=`
                                    <div class="post-card">
                                        <a class="post-card-title" href="/posts/${post.slug}">${post.title}</a>
                                        <span class="post-card-date">${post.date}</span>
                                        <p class="post-card-preview">${post.preview}</p>
                                        <a class="read-more" href="/posts/${post.slug}">Read More</a>
                                    </div>
                                `
                            })
                            return html
                        })()
                    }
                </div>
            </div>
            
            <div class="footer">Devspot</div>
            
        </div>
    `
}

export { page }




