let n= 5;
function star(a) {
    var String = "";
    for(i =1; i <= a; i++){
        for(j =1; j <= a; j++){
        String += "*";
    }
        String += "\n";
    
    }
   console.log(String);
}
star(n);
