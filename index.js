// console.log(example);
// let example = "I'm the example!";    
// ReferenceError: example is not defined
// 1----------- 'undefined'
console.log(hello);                                   
var hello = 'world';                                 
// after hoising by the interpreter
// var hello;
// console.log(hello);  
// hello = 'world';
// --------------

// 2----------- 'magnet'
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// after hoising by the interpreter
// var needle;
// needle = 'magnet';
// console.log(needle);
// needle = 'haystack';

// 3----------- 'super cool'
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// after hoising by the interpreter
// var brendan;

// brendan = 'super cool';
// brendan = 'only okay';
// 4---------------- ''
var food = 'chicken';
console.log(food);//chicken
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// var food;
// food = 'chicken';

// 5---------------- TypeError: mean is not a function
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);//chicken
    var food = "fish";
    console.log(food);//fish
}
console.log(food);//fish
// var food
// food = "chicken";
// food = "fish";
// 6 ------------------- 
// undefined
// rock
// r&b
// disco
console.log(genre);//disco
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);//rock
    var genre = "r&b";
    console.log(genre);//r&b
}
console.log(genre);//r&b
// 7 --------------------
dojo = "san jose";
console.log(dojo);//san jose
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);//seattle
    var dojo = "burbank";
    console.log(dojo);//burbank
}
console.log(dojo);//san jose
//  var dojo
// 
// 
// 8 -------------- TypeError: Assignment to constant variable. { name: 'Chicago', students: 65, hiring: true }
console.log(makeDojo("Chicago", 65));//
console.log(makeDojo("Berkeley", 0));//"closed for now"
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
