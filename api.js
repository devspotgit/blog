const fs = require("fs")

const path = require("path")

const posts = JSON.parse(fs.readFileSync(path.join(__dirname, "posts.json"), "utf-8"))

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const postPerPage = 3

function getCategoryList(){

    const categoryList = []

    posts.forEach(post => {

        if(post.published){

            if(!categoryList.find( category => category == post.category)) categoryList.push(post.category)
        }
    })

    categoryList.push("all")

    return categoryList
}

function capitalize(text){

    const textArray = text.split("")

    let capitalizedText = ""

    textArray.forEach( (char, index) => {

        if(index == 0) capitalizedText += char.toUpperCase()

        else capitalizedText += char
    })

    return capitalizedText
}

function getName(text){

    const textArray = text.split("-")

    const capitalizedTextArray = textArray.map(item => capitalize(item))

    return capitalizedTextArray.join(" ")
}

function getDate(date){

    const dateArray = date.split("-")

    return month[+dateArray[1]] + " " + dateArray[2] + ", " + dateArray[0] 
}

function getCategoryPost(category){

    const postList = []

    posts.forEach(post => {

        if(category != "all"){

            if(post.category == category && post.published) postList.push(post)
        }
        else{

            if(post.published) postList.push(post)
        }
    })

    return postList
}

function latestPost(post1, post2){

    const date1 = post1.date.split("-")

    const date2 = post2.date.split("-")

    if(+date1[0] > +date2[0]) return 1

    else  if(+date1[0] < +date2[0]) return 2

    else  if(+date1[1] > +date2[1]) return 1

    else  if(+date1[1] < +date2[1]) return 2

    else  if(+date1[2] > +date2[2]) return 1

    else  if(+date1[2] < +date2[2]) return 2

    else return 1
}

function sortPost(postList){

    for(let i = 0; i<postList.length; i++){

        for(let j = 0; j<postList.length - 1 - i; j++){

            if(latestPost(postList[j], postList[j+1]) != 1){

                const temp = postList[j]

                postList[j] = postList[j+1]

                postList[j+1] = temp
            }
        }
    }
}

function getPost(slug){

    return posts.find(post => post.slug == slug)
}

function searchPost(text){

    const postList = []

    if(text){

        const textArray = text.split(" ")

        posts.forEach(post => {

            let found = false
    
            for(let i=0; i<post.searchWords.length; i++){

                if(found) break

                for(let j=0; j<textArray.length; j++){

                    if(post.searchWords[i].includes(textArray[j].toLowerCase()) && post.published) {
        
                        postList.push(post)

                        found = true
        
                        break
                    }
                }
            }
        })
    }

    return postList
}

function getFilename(slug){

    return slug.split("-").join("_")
}

module.exports = { getPost, getName, getFilename, getDate, getCategoryList, searchPost, sortPost, getCategoryPost, postPerPage }

