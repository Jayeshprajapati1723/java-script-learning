// attributes of DOM
// tags with additional attributes like id ,class etc 
//src etc are knowns as atributes 
// get of attributes getAttribute method (pass the attributes )
let h1 = document.querySelector("h1") ;
console.dir(h1 ) ;
let id= h1.getAttribute("id") ;
console.log(id) ;

let divs = document.querySelector("div") ;
console.dir(divs) ;// querry se select kro

let name = divs.getAttribute("name") ;  // get attribute me pass kro kya : "name" jo attribute banaya tha jese id ya etc 
console.log(name)  ;


// setAttribute 
let idset= document.querySelector("h1") ;
console.log(idset) ;
//set attribute id =101 
console.log(idset.setAttribute("id","200")) ;

// for style attribute 
// style vlaues change krne k 
//node.style

// acess the div
let divss = document.querySelector("div") ;
console.log(divss) ;
//divss.style object ayega conosle pr krna h 
divss.style.backgroundColor= "red" ;
divss.style.height = "100px" ;
divs.style.width = "100px" ;

// new element insert 
// first create and than add
let newbtn = document.createElement("button") ;
newbtn.innerText ="click here " ;
console.log(newbtn) ;
// show on screen 
// .append (el) last  m
// first acess div
let acess = document.querySelector("div") ;
acess.append(newbtn) ; //add in last 

// fiirst m lane k liye 
acess.prepend(newbtn) ;

//node se phle div se phle mtlb
acess.before(newbtn) ;

//node khtm k bad 
acess.after(newbtn) ;

//2 example
let newheading= document.createElement("h1") ;
// new element bnne k bad 
//2 kaha krna h selct kro

//set kro 
h1.innerText= "hi this is js" ;
let select = document.querySelector("div") ;
select.append(newheading) ;

// delete bi kr skte h .remove se 

// practice 1 : create a button 
// new elemenent insert first create element
let newB = document.createElement("button") ;
newB.innerText = "CLICK ME" ;
newB.style.color = "white" ; newB.style.backgroundColor ="red" ;

document.body.prepend(newB) ;
