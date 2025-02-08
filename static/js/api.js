


function category_list(all_post){
    const _category_list = []
    for(let i=0; i<all_post.length; i++){
        let j=0
        for(j; j<_category_list.length; j++)
            if(all_post[i].category==_category_list[j]) 
                break
        if(j==_category_list.length) 
            _category_list.push(all_post[i].category)
        
    }
    return _category_list
}


function word_capitalize(word){
    const word_in = word.split("")
    const word_out = []
    word_out.push(word_in[0].toUpperCase())
    for(let i=1; i<word_in.length; i++)
        word_out.push(word_in[i])
    return word_out.join("")
}


function exp_capitalize(exp){
    const exp_in = exp.split("-")
    const exp_out = []
    for(let i=0; i<exp_in.length; i++)
        exp_out.push(word_capitalize(exp_in[i]))
    return exp_out.join(" ")
}


function most_recent_post(post_1_date, post_2_date){
    const _post_1_date = post_1_date.split("-")
    const _post_2_date = post_2_date.split("-")
    if(_post_1_date[2] > _post_2_date[2]) return 1
    else if(_post_1_date[2] < _post_2_date[2]) return 2
    else if(_post_1_date[1] > _post_2_date[1]) return 1
    else if(_post_1_date[1] < _post_2_date[1]) return 2
    else if(_post_1_date[0] > _post_2_date[0]) return 1
    else if(_post_1_date[0] < _post_2_date[0]) return 2
    else return 1
}


function sort_post(_post_list){
    for(let i=0; i<_post_list.length-1; i++){
        for(let j=0; j<_post_list.length-1-i; j++){
            if(most_recent_post(_post_list[j].date, _post_list[j+1].date) == 2){
                const post_list_item = _post_list[j]
                _post_list[j] = _post_list[j+1]
                _post_list[j+1] = post_list_item
            }
        }
    }

}


function post_list(all_post, filter, value){
    const _post_list = []
    if(filter == "category"){
        for(let i=0; i<all_post.length; i++)
            if(value == all_post[i].category)
                _post_list.push(all_post[i])
        return _post_list
    }
    else if(filter == "name"){
        for(let i=0; i<all_post.length; i++)
            if(value == all_post[i].name){
                _post_list.push(all_post[i])
                break
            }
        return _post_list
    }
    else if(filter == "search"){
        const _value = value.toLowerCase().split("")
        for(let i=0; i<all_post.length; i++){
            const post_name = all_post[i].name.split("-")
            for(let j=0; j<post_name.length; j++){
                const post_name_part = post_name[j].split("")
                if(post_name_part.length >= _value.length){
                    let k=0
                    for(k; k<_value.length; k++){
                        if(post_name_part[k] != _value[k])
                            break
                    }
                    if(k == _value.length){
                        _post_list.push(all_post[i])
                        break
                    }
                }
            }
        }
        console.log(_post_list)
        return _post_list
    }
}


const month_name = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


export {category_list, post_list, sort_post, exp_capitalize, month_name}





