// 4>3 && 10 < 12 true
// 4>3 && 10 > 12 false
// 4>3 || 10 < 12 true
// 4>3 || 10 > 12 true
// !(4>3) false
// !(4<3) true
// !(false) true
// !(4>3 && 10 < 12) false
// !(4>3 && 10 > 12) true
// !(4 === "4") true

if(4>3 && 10 < 12){
    console.log(true)
}
if(4>3 && 10 > 12){
    console.log(false)
}
if(4>3 || 10 < 12){
    console.log(true)
}
if(4>3 || 10 > 12){
    console.log(true)
}
if(!(4>3)){
    console.log(false)
}
if(!(4<3)){
    console.log(true)
}
if(!(false)){
    console.log(true)
}
if(!(4>3 && 10 < 12)){
    console.log(false)
}
if(!(4>3 && 10 > 12)){
    console.log(true)
}
if(!(4 === "4")){
    console.log(true)
}