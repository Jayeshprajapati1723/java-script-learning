// theme change white to dark and dark to white 
// selector lao 
let bt1 = document.querySelector("#bt1") ;
// create function pass krenge event and call back

// theme variable bna lu
let curr = "light" ; let chan = "dark" ;
bt1.addEventListener("click",()=> {
if(curr=== "light") {
    curr = chan ;
    console.log("dark") ;
    document.querySelector("body").style.backgroundColor="black";
      document.querySelector("body").style.color="white";
      alert("Theme changes sucessfully") ;
} else  { 
    curr = "light" ;
    console.log("white") ;
     document.querySelector("body").style.backgroundColor="white";
           document.querySelector("body").style.color="black";
      alert("Theme changes sucessfully") ;

}
}


)
