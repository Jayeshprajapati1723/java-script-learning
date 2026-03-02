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

//day 3
/* print all even numbers from 0 to 100  */
let ct = 0 ;
for(let i = 0 ; i<=100;i++) {
if(i%2==0) {
    console.log ("even no = " ,i) ;
    ct++ ;
}
}
console.log (ct ,"even numbers found ") ;

/*
6 total keys in object
even no =  0
even no =  2
even no =  4
even no =  6
even no =  8
even no =  10
even no =  12
even no =  14
even no =  16
even no =  18
even no =  20
even no =  22
even no =  24
even no =  26
even no =  28
even no =  30
even no =  32
even no =  34
even no =  36
even no =  38
even no =  40
even no =  42
even no =  44
even no =  46
even no =  48
even no =  50
even no =  52
even no =  54
even no =  56
even no =  58
even no =  60
even no =  62
even no =  64
even no =  66
even no =  68
even no =  70
even no =  72
even no =  74
even no =  76
even no =  78
even no =  80
even no =  82
even no =  84
even no =  86
even no =  88
even no =  90
even no =  92
even no =  94
even no =  96
even no =  98
even no =  100
51 even numbers found
*/

/**second task game 
 create a game by me which is very simple that game chooses a random no and ask from user in terms guessing those numbers and after he correct he is win 
*/
let gameno =25 ;
// for(let i = 1 ; i<=3 ; i++) {
//     guess = prompt("enter your guessing no ")
// if(gameno == guess) {
//     console.log("Win hureey......" ) 
//     break ;
// } else { 
//     console.log("try again")
//     if(i==3) {
//         console.log("out ") ;
//     }
// }
// }

guess = prompt("enter an no to pla game") ;
while(gameno != guess) {
guess = prompt("wrong guess try again :)") ;
}
    console.log("win") ;

