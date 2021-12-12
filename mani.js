let mul = function (a){
    a = document.getElementById('first').value;
    let mul2 =  function(b){
         b = document.getElementById('middle').value;
         let mul3 = function (c){
          c = document.getElementById('last').value;
         let pro = document.getElementById('Result').value = a+b+c;
         console.log(pro);
         }
         return mul3;
     }
     return mul2;
 }
 mul()()();
 