let rand = Math.random()
let first, second, third;

if (rand<0.33) {
    first="crazy"
}
else if (rand<0.66 && rand>=0.33){
    first ="amazing"
}
else{
    first ="fire"
}

if (rand<0.33) {
    second="engin"
}
else if (rand<0.66 && rand>=0.33){
    second ="food"
}
else{
    second ="garments"
}

if (rand<0.33) {
    third="bors"
}
else if (rand<0.66 && rand>=0.33){
    third ="limited"
}
else{
    third ="hub"
}
console.log(`${first} ${second} ${third}`);