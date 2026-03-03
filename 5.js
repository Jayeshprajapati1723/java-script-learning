//array
let arr= [2,4,6,8,10] ;
let arr1= [2,"j","k"] ;
// merging of arrays using addition 
res = arr +arr1 ;
console.log (res) ;
 
// length properties
res = arr.length ;
console.log(res) ;

// acess using indexing
console.log(arr[0]) ;

// traversing using loop index
console.log("using loop ") ;
for(let i=0 ;i<arr.length ; i++) {
    console.log(arr[i],"\t") ; 
}

// using for of loop data mil gya
for(let i of arr) {
    console.log(i) ;
}

//arrays using calculate average
let marks = [1,2,3,4] ;
sum = 0 ;
for(let i =0 ;i<marks.length; i++) {
sum += marks[i] ;
}
let avg = sum/marks.length ;
console.log (avg) ;

// practice 2
console.log("mrp without discount ") ;
let mrp = [250,645,300,900,50] ;
for(let j= 0 ;j<mrp.length; j++) {
    console.log (mrp[j]) ;
}
let finalp= [] ;
for(let i= 0 ; i<mrp.length;i++) {
    finalp[i] = mrp[i]-mrp[i]*10/100;
}
console.log("after 10 percent discount ") ;
for(let j= 0 ;j<finalp.length; j++) {
    console.log (finalp[j]) ;
}
/*
mrp without discount
250
645
300
900
50
after 10 percent discount
225
580.5
270
810
45
*/

// push() add to end not immutable 
let veges = ["potato","tomato","cabatch","ginger"] ;
veges.push("lemon") ;
console.log(veges) ;

// pop
veges.pop() ;console.log("after pop \n",veges)

// array toString
console.log(mrp) ;
console.log(mrp.toString()) ;

// concat add one to other 
marvel= ["thor","jay"] ;
boll =["salman","jaye","amit"] ;
console.log(marvel.concat(boll)) ;

// unshift add in starting
console.log(marvel.unshift("jayeshji")) ;
console.log(marvel) ;

//shift  like a push delete from bigning
marvel.shift() ;
console.log(marvel) ;

// slice ending not including
let j=["raman","baman","chaman","kaman","naman"] ;
// j.slice(1,5);//one to four
console.log(j.slice(1,4)) ;

//splice original array change
//start ,how many delete (number) ,add =101
// add remove replace
j.splice(1,2,101,202) ;// it shows what remove form the array 
console.log(j) ;

// without removing add
j.splice(0,0,500) ;
console.log(j) ;

// delete only
j.splice(4,1) ;
console.log(j) ;

// replace
j.splice(4,1,500) ;
console.log(j) ;

// practice qsn on array method
let comp = ["bloomberg","mircosoft","uber","Google","IBM","Netflix"] ;
console.log(comp) ;
//task 1- remove company no1
comp.shift();
console.log(comp) ;

//task-2 remove uber and Add OLA IN its place
comp.splice(1,1,"ola");
console.log(comp) ;

// task-3 add amazon in the end 
comp.splice(5,0,"Amazon") ;
console.log(comp) ;
