
#!/bin/bash

source `dirname ${BASH_SOURCE[0]}`/template_parts.sh

function homeTemplate(){

    declare -n ref=$1

    echo "
        <!DOCTYPE html>
        <html>
            <head>
                <title>${ref[title]}</title>
            </head>

            <body>
                `header ${ref[title]}`
            
            </body>
        </html>
    "
}

function postTemplate(){

    declare -n ref=$1

    echo "
        <!DOCTYPE html>
        <html>
            <head>
                <title>${ref[title]}</title>
            </head>

            <body>
                `header ${ref[title]}`
            
            </body>
        </html>
    "
}

function categoryTemplate(){

    declare -n ref=$1

    echo "
        <!DOCTYPE html>
        <html>
            <head>
                <title>${ref[title]}</title>
            </head>

            <body>
                `header ${ref[title]}`
            
            </body>
        </html>
    "

}
