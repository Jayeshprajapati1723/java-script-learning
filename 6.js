// functions and methods 
// it is basically predefined code by self and invole anytime anywhere in code 
// some value pass

function myfunction() {
    console.log("welcome to programe")
} // defination

myfunction() ;

// functions redundancy reduces 

// parameterised function
function add(a, b) { // parameter set krna jo arguments se fetch hote h
console.log(a+b) ;
} 

add(15,10) ;//argument pass krna 

// parameter are local variables 


//    << Arrow function >>
const sum= (a,b) =>{
    // console.log(a+b) ;
    return a+b ;
}
console.log(sum(20,30)) ;

// task-1 create a function take a string as an argument and return how many wovels in the string 

function ctw (strings) {
    ct =0 ;
    for(let i=0 ;i<strings.length ;i++) { 
    if(strings[i] == "a" ||strings[i]=="e"||strings[i]=="i"||strings[i]=="o"||strings[i]=="u") {
        ct++ ;
    }
     }
     console.log(ct ,"are wovels in the string",strings) ;
}

ctw("jayesh") ;

// forEach loop
// method asociate with object/data structure

// function is also passes a parameter in new function also we can return 
// array.forEach( (value, index, array) => {
//     // Aapka code yahan aayega
// });

let arr= ["ram","nam"] ;

arr.forEach((val) => {
    console.log(val.toUpperCase()) ;
} ) 

arr.forEach((val,indx) => {
    console.log(val.toUpperCase(),indx) ;
} ) 

arr.forEach((val,indx,arr) => {
    console.log(val.toUpperCase(),arr,indx) ;
} ) 

/*
RAM
NAM
RAM 0
NAM 1
RAM [ 'ram', 'nam' ] 0
NAM [ 'ram', 'nam' ] 1
*/

// forEach is a higher order callbakc and another function as a parameter

// practice*
//<for given array calcualte sqaure using for each
let num = [1,2,3,4,5] ;
num.forEach( (val) =>
{
console.log(val*val) ;
}
)

// Map zindagi asan for array
// map and foreach very similar but map return a new array 
// high order
console.log("using mapp") ;
num.map( (val) =>
{
     console.log(val*val) ;

}
)

// major diffrence bw foreach and map is map create a new array but in the for each give calculation and use for traversing 

// filter
let evenarr = num.filter((val) =>{
return val %2 ===0 ;
} )
console.log(evenarr) ;

let oddarr = num.filter((val) =>{
return val %2 !=0 ;
} )
console.log(oddarr) ;

// filter is a  method of coppy of filtered with exist arrya using some condition 

// Reduce 
// many inputs but some output
// previouus ko inital current second ko leta h or isme esa hota h man lete //
// ek arr = 1 2 3 4 5 ab ye kya krega reduce yha pr 1 ko res mtlb prev ya initaial man lega or cureenet ko 2 jisse kya hoga ki return ki condition h res+sum or ye hmesha res mtlb previous m store ho jata  h 
// res 1 + curr 2 ===> res =3
// next time res 3 h and curr 3 = res == 6
// next time res = 6 + curr ab 4 == 10 final anser of n no of sum is 10 
 let result =num.reduce ((res,curr) =>{
return res +curr ;
})
console.log(result) ;

// task *1 filter the marks in an marks array using filter 

let marks = [20,90,70,85,91,92,93] ;
let aboveninety = marks.filter(
    (val)  =>{
return val >=90 ;
    }
)
console.log(aboveninety) ;


// task*2
// take n inpput from user
// create array 1 to n 
// using redduce to calculate sum of n and product of n 
let input = prompt("enter n to calculate sum and product from 1 to n ") ;
let oneton = [] ;
for(let i=0 ;i<input ;i++) {
    oneton[i] = i+1 ; 
}
console.log("array create ",oneton) ;
let onetonsum =oneton.reduce((res,cur) => {
return  res +cur ;
}
)
 console.log(onetonsum) ;

 console.log("array product using reduce ") ;
let onetonproduct =oneton.reduce((res,cur) => {
return  res*cur ;
}
)
 console.log(onetonproduct) ;