


/* return the post object given the slug and the list of posts */

function getPost(slug, posts){

    for(let i=0; i<posts.length; i++)
        if(posts[i].slug == slug) return posts[i]
}

/* return the category object given the slug and the list of categories */

function getCategory(slug, categories){

    for(let i=0; i<categories.length; i++)
        if(categories[i].slug == slug) return categories[i]
}

/* return list of post that match the keyword */

function getSearchedPosts(keyword, posts){

    const list = []

    for(let i=0; i<posts.length; i++){
        const postKeywords = posts[i].title.split(" ")
        let j=0

        for(j; j<postKeywords.length; j++){
            const keywordParts = keyword.split(" ")
            let k=0

            for(k; k<keywordParts.length; k++)
                if(postKeywords[j].toLowerCase() == keywordParts[k].toLowerCase()) break

            if(k<keywordParts.length) break
        }

        if(j<postKeywords.length)
            list.push(posts[i])

    }

    return list
}


/* return list of post that match the category */

function getCategoryPosts(slug, posts){
    
    const list=[]

    for(let i=0; i<posts.length; i++)
        if(posts[i].category == slug) list.push(posts[i])

    return list
}




export { getPost, getCategory, getSearchedPosts, getCategoryPosts }









