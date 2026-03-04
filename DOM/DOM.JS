let heading = document.getElementById("1") ;// VALUE RETURN
console.dir(heading ) ;// object h console.dir
// id not exist than null show in console


// by class
let headingclasss = document.getElementsByClassName("heading") ;
console.dir(headingclasss) ;
// it is like an array
//if id not exist than output is class empty

// tag using acess 
let tagpara = document.getElementsByTagName("p") ;
console.dir(tagpara) ;
// first and second para

// querry selector mordern it is thrice id , class ,tag 
let first =document.querySelector("p") ;//first matching element show 
console.dir(first) ;
// all elements k liye
let all =document.querySelectorAll("p") ;
console.dir(all) ;
//it gives nodelist

// querrySelector acces through claas
 let classfirstele= document.querySelector(".heading") ;
 console.dir(classfirstele) ;

 let classALL = document.querySelectorAll(".heading") ;
 console.dir(classALL) ;

 // properties of DOM 
 // TagName : return elements tag for elements node

 // 2 inner text properties shows that only text in the tags 

 //innertHTML returns the plain text or HTML contents in the elements text + tag both

 // text contents : reutrn textual contents even for hidden elements

 //practice 1 crate a heading2 with text "hello javascript "and append means last add "from sait college using js"

 //step 1 acess element 
 let acess = document.querySelector("h2") ;
 console.dir(acess) ;
 // properties innertext 
 acess.innerText =acess.innerText+" from sait college" ;

 // second q
 let divs= document.querySelectorAll(".box") ;
 console.dir(divs) ;
//  divs[0].innerText = divs[0].innerText + " it is healthy for health ";
//   divs[1].innerText = divs[1].innerText + " it is healthy for health ";
//  divs[2].innerText = divs[2].innerText + " it is healthy for health ";
for(let i = 0; i < divs.length; i++) {
    // Ye line browser mein text update karegi
    divs[i].innerText = divs[i].innerText + " it is healthy for health";
    
    // Aapka console check logic
    console.log(divs[i].innerText + " hello jayesh");
}
