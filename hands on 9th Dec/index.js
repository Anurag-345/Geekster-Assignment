  function multiply(num1){
            return  function xyz(num2){
                  return  function pqr(bum3){
                       return num1*num2*bum3;
                   }
               }
           }

         document.querySelector('button').addEventListener('click',()=>{
            let num1 = document.getElementById('num1').value;
            let num2 = document.getElementById('num2').value;
            let num3 = document.getElementById('num3').value;
             
            let x= multiply(num1)(num2)(num3);
            console.log(x);
             
            let h1 = document.createElement('h1');
            h1.innerText=x;
            document.getElementById('output').appendChild(h1);
            document.getElementById('output').style.display="flex";

         });



