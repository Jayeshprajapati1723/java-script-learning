// loops using a code again and again 

// <<for loop >>
for(let i= 0 ; i<5 ; i++) {
    console.log("github is best ") ;
}

let sum =0 ;
for(i = 1 ; i<= 100; i++) {
    sum += i ;
}
console.log (sum) ;

// Note* = never create a infinite loops 

// << While loops >> 

let summ =  0 ;
let num = 0 ;
while( num <=5) {
summ += num ;
console.log ("github account is digital resume") ;
num ++ ;
}
console.log (summ) ;

// do while
i = 10 ;
do {
console.log ("jay") ;
i++ ;
} while(i<3) ; // run atleast 1 

i = 1 ;
do {
console.log ("jay") ;
i++ ;
} while(i<=3) ; // run 3 times 

// for-of loop
let sz = 0 ;
let str= "ramayana" ;
for(let i of str) {
    console.log ("i = " ,i) ;
sz++ ;
}
console.log (sz ,"length") ;
/*output >> of for-of loop
i =  r
i =  a
i =  m
i =  a
i =  y
i =  a
i =  n
i =  a */

// for-In / for-in only in objects
/**keys return krta h always  */
const student ={
    name : "jayesh" ,
    age : 21 ,
    isStudent : 1 
}
let totkeys =0 ;
for(let i in student){
console.log(i) ;
totkeys++ ;
}
console.log (totkeys,"total keys in object") ;

// keys with values
for(let i in student){
console.log( "keys= ",i,"values",student[i]) ;
totkeys++ ;
}
console.log (totkeys,"total keys in object") ;

/*
3 total keys in object
keys=  name values jayesh
keys=  age values 21
keys=  isStudent values 1*/


