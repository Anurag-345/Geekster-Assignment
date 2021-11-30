var divRef = document.querySelector('.inner');
var btn = document.querySelector("#btn");
var text = "";


btn.addEventListener('click',function(){
   for(var i= 1; i <=10;i++){  
    text += i +" " ;
    
    }
   
    divRef.innerHTML =text;
   
})



