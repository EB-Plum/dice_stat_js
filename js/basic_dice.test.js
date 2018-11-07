// import {d} from "basic_dice.js"
const {d} = require("./basic_dice.js")

let d2 = d(2)
let d4 = d(4)
let d6 = d(6)
let d_range = d(2,8,3)
let d_list = d([-1,1,1,2,2,3])

function sum_check(prob_table){
    let _sum = 0
    let error_margin = 0.000001
    Object.values(prob_table).forEach( val => _sum += val ) 
    if( Math.abs(_sum-1) > error_margin ){
        return console.log(`error(sum = ${_sum} )`)
    }
    return console.log(`pass(sum = ${_sum} )`)
}

sum_check( d4 )
console.table( d4 )
sum_check( d_range ) 
console.table( d_range )
sum_check( d_list )
console.table( d_list )