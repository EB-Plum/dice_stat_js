function dice_number( num ){
    let dice_probabilty_table = {}
    let probability_per_face = 1/num
    for( let i = 1; i <= num ; i++ ){
        dice_probabilty_table[i] = probability_per_face
    }
    return dice_probabilty_table
}
function dice_range( start, end, gap=1){
    let dice_probabilty_table = {}
    let probability_per_face = 1 / ( Math.floor( ( Math.abs(end-start) ) / gap ) + 1 )
    for( let i = start; i <= end ; i = i+gap ){
        dice_probabilty_table[i] = probability_per_face
    }
    return dice_probabilty_table
}
function dice_list( elem_arr ){
    let dice_probabilty_table = {}
    let probability_per_face = 1/elem_arr.length
    for( let face of elem_arr ){
        if( dice_probabilty_table[face] == null ){
            dice_probabilty_table[face] = 0
        }
        dice_probabilty_table[face] += probability_per_face
    } 
    return dice_probabilty_table
}

function d(arg){
    if( arguments.length > 1 ){
        return dice_range.apply(this, arguments)
    }
    if( typeof(arg) == 'number' ){
        return dice_number(arg)
    }
    if( Array.isArray(arg) ){
        return dice_list(arg)
    }    
}

module.exports = {d}