
var newDiv = document.querySelector('.new-div')
// new element function
function newElement(){

    // input box
    var inputRef = document.querySelector('input').value;
    
    // paragraph
    var newPara = document.createElement('p');
    newPara.append(inputRef);
    newPara.style.margin = "20px";
  
//    edit Button
    var editBtn = document.createElement('button');
    editBtn.innerHTML= "Edit";
    editBtn.style.margin = "20px";
    

    // Event to edit the paragraph
    editBtn.addEventListener('click',function(){newPara.contentEditable = true;})
    
    // upadte Button
    var updateBtn = document.createElement('button');
    updateBtn.innerHTML= "update";
    updateBtn.style.margin = "20px";

    updateBtn.addEventListener('click',function(){newPara.innerText = newPara.innerText;})
    

    var deleteBtn = document.createElement('button');
    deleteBtn.innerHTML= "Delete";
    deleteBtn.style.margin = "20px";
    
    // events to delete elements 
    deleteBtn.addEventListener('click',function(){newPara.remove();})
    deleteBtn.addEventListener('click',function(){editBtn.remove();})
    deleteBtn.addEventListener('click',function(){deleteBtn.remove();})


    
    
    document.querySelector('.new-div').appendChild(newPara);
   
    document.querySelector('.new-div').appendChild(editBtn);

    document.querySelector('.new-div').appendChild(updateBtn);

    document.querySelector('.new-div').appendChild(deleteBtn);




}