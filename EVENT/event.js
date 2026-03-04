// event kch click krke kam hona ya krana like sign up 
// we can handle event on html but it is very lengthy and time consuming 
// best way use .js isolated
// node.event =() =>{   //handle here code   }
// using js first allot id to element 

// now select 
let btn1 = document.querySelector("#b1") ;
console.dir(btn1) ;
// create functiion 
// btn1.onclick =() =>{
//     console.log("btn1 is clicked " ) ;
//     let a = 10 ;
//     a++ ;
//     console.log(a) ;
//      console.log(e) ;
//     console.log(e.type) ;// type of event mouseover
//     console.log(e.target) ;//target m kya tha jese yha div tag tha 
//     console.log(e.clientX,clientY) ;// POSITION 
// }



//event object 

let divs = document.querySelector("div") ;
console.dir(divs) ;
divs.onmouseover=  (e) =>{    console.log('your are inside of div tag');
}
divs.onmouseover=  (e) =>{    
    console.log(e) ;
    console.log(e.type) ;// type of event mouseover
    console.log(e.target) ;//target m kya tha jese yha div tag tha 
    console.log(e.clientX,e.clientY) ;// POSITION 
}

// EVENT LISTNERS 
// WORKS MUTLIPLE BEST THAN INLINE and function 

btn1.addEventListener("click", () =>{
    console.log("button was clicked ") ;
})
btn1.addEventListener("click", (evnt) =>{
    console.log("button was clicked second time ") ;
    console.log(evnt) ;
    console.log(evnt.type) ;
    console.log(evnt.target) ;
    console.log(evnt.clientX,evnt.clientY) ;
})
// first pass event and second pass the function
// event bhi print kra skte h  

// remove

//node.removeEventlisterners(evnet,callback) ;
// jise htana h use ek variable m store krlo or pass kr do 

