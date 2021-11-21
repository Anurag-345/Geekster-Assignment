let n= 5;
function star(a) {
    var String = "";
    for(i =1; i <= 5; i++){
        for(j =1; j <= i; j++){
        String += "*";
    }
        String += "\n";
    
    }
   console.log(String);
}
star(n);

