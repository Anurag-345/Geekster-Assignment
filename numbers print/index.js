var divRef = document.querySelector('.inner');
var btn = document.querySelector("#btn");
//

//  var text = " ";
 


btn.addEventListener('click',function(){
   for(var i= 1; i <=10;i++){  
    
    if(i%2 == 0){
       
        divRef.innerText += i;


    }
    
   
    }
    
    

})
// if(divRef.innerText  % 2 ==0){
//    divRef.style.color = "red";
// }



