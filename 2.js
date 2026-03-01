// day 2
// operators and conditional statements
// comments is a very important for any language to know what we do in our code and it is not executed 

// 1 arithmatic operaters
 let a = 6 ;let b = 5 ; 
 // add
 console.log (a+b) ;
// sub
 console.log (a-b) ;
 // product
 console.log (a*b) ;
 // div
 console.log (a/b) ;
// modular 
 console.log (a%b) ;

 // ---------urinary operator-------
 // post increment and decrement 
 a++ ; 
 console.log (a) ;
 a = a+1 ;
  console.log (a) ;
a-- ;
 console.log (a) ;
a= a-1 ;
 console.log (a) ;
// pre increment and decrement 
++a ;
 console.log (a) ;
--a ;
 console.log (a) ;

 // assignment operator 
 a = 10 ; // 10 assgin ho gya h 
  console.log (a) ;
 a += 20 ; // plus than assign 
  console.log (a) ;
 a -= 20 // min than assign
  console.log (a) ;

  // comparision operators 
   console.log (a==b) ;
    console.log (b==a) ;
     console.log (a<b) ;
 console.log (a>b) ;
  console.log (a!=b) ;

  // === triple strictor 
  //a===b ;

  // logical operator AND 

   console.log (a==b && b==a) ; // both true compolsoury
   // logical operator OR

      console.log (a==b || b==a) ; //NOT ALWAYS both true compolsoury IF ONE TRUE THAN RETURN TRUE WHEN BOTH FALSE THAT CONDITION RETURN FALSE 

      // NOT OPERATOR !
      let p = 10 ; let q = 20 ;
      console.log(  !(p>q)) ;// opposite of our condition 

//-------------conditional statement ------------------->
let age = 19 ;
// if 
if(age<18){
    console.log ("teenage") ;
}

// if-else
if(age == 18 || age > 18 ) {
    console.log ("adult") ;
} else {
    console.log("minor")
}

//  <syntax is basically Rules >
// else-if
if(age==10) {
    console.log ("child") ;
} else if(age >18) {
    console.log ("adult")
} else if(age >60) {
    console.log ("senior citizen") 
}

// ternary operator
console.log((a==b) ? "true":"false") ;

// MdN DOCS >> MORZILLA >> CONDITIONAL OPERATIORS >> READ


// << switch case basis on the mapping of input with output simaltaneously >>


// Prompt and alert 
// << prompt basically a way getting input from user "temporarily" >>

// << alert is pop on our website with "MESSAGE" >>

// >> PRACTICE 1 TAKE A INPUT USING PROMPT AND CHECK IT IS A multiple of 5 or not
let num = prompt("enter a number to check it is multiple of 5 or not ") ;
if(num % 5 == 0) {
    console.log ( num ,"yes it is multiple of 5") ;
} else {
    console.log ("NON multtiple of 5 ") ;
}

// second task 
// grade distribution on the basis of marks
let scr = prompt("enter marks of student") ;
if(scr>= 80  ) {
    console.log("A-grade") ;
} else if (scr >= 70) {
        console.log("B-grade") ;
}
else if (scr >= 60) {
        console.log("C-grade") ;
}
else if (scr >= 40) {
        console.log("D-grade") ;
}
else if (scr < 40 && scr >=33) {
        console.log("DD-grade") ;
}
else if (scr < 33) {
        console.log("FAIL") ;
}




 



