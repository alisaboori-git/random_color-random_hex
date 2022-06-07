function create_random_hex() {
    var random_num=Math.floor(Math.random()*16)
    var hex=random_num.toString(16)
    return(hex)
}


function create_random_color(params) {
    var color="#"
    for (let index = 0; index < 6; index++) {
        color+=create_random_hex()
    }
    return(color)
}