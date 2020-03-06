









function calcMe(x) {
    console.log(x)
    document.getElementById("Ergebnis").innerHTML += x;
}

function clear(){
    document.getElementById("Ergebnis").innerHTML="";
}
function result(){
    
     document.getElementById("Ergebnis").innerHTML=eval;
     (document.getElementById("Ergebnis").innerHTML)
 }

// function that display value 
// function dis(val) 
//  { 
//      document.getElementById("result").value+=val 
// } 
  
// function that evaluates the digit and return result 
 function solve() 
 { 
    let x = document.getElementById("result").value 
    let y = eval(x) 
    document.getElementById("result").value = y 
} 
  
// function that clear the display 
 function clr() 
 { 
     document.getElementById("result").value = "" 
} 















