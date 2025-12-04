
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

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

export { getName, getDate }

