//string 
let str = "github best" ;
//internal << length >> 
 console.log(str.length ) ;

 // character acess 
 console.log(str[0]) ;

 //Template literals in the form of backtics
 let sentence = `this is a literal templates` ;

//  console.log("my name is " , name ,"last name " , lastname) ; this is very lengthy and time consuming now THE ENTRY OF LITERALS TEMPLATES WITH BACKSTICKS ` `
//let a object 
const prod = {
    price : 100 , name : "pen"
}
output = `product name is ${prod.name} and price is ${prod.price}`
console.log(output ) ;

// escape characters \n and \t 
console.log("name \n",prod.price) ;

console.log("name \t",prod.price) ;

/**
\n ::::name
        100
 \t :::: name     100
 */


//string methods : a block of code
// convert in uppercase
let string = "github" ;
 console.log(string.toUpperCase()) ;
 // GITHUB

 // 2.lowercase
 let n = "GITHUB" ;
 console.log(n.toLocaleLowerCase()) ;
 // github

 // 3.trim *removes the whitespaces*
 let a = " name  " ;
 console.log(a) ;
 console.log(a.trim()) ;

 // slice(start,end) end is not inclusive 
 console.log(string.slice(2,4));


// concat *add string*
let first = "apna"; let second = "desh" ;
let res = second.concat(first) ;
console.log(res) ;

res = first.concat(second) ;
console.log(res) ;

res = first + second ;
console.log(res) ;

/*
deshapna
apnadesh
apnadesh
*/

// replace method 
// search and replace only specific at first
let variable = "my hello my " ;
console.log(variable.replace("my","world")) ;
//world hello my

// replaceALL do all change 
console.log(variable.replaceAll("my","world")) ;

//characterAt() ;
let mother = "bharatMata" ;
console.log(mother.charAt(2)) ;

let fullname = prompt("enter full name here :") ;

output = `@${fullname}${fullname.length} `;
console.log(output ) ;