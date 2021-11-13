//*****************div1******************
const pi=3.14;

// to calculate the volume 
var volume_cyl=()=>{
    let r=document.getElementById('radius').value;
    let h=document.getElementById('cyl-height').value;
    let a=document.getElementById('div-1_ans');
    let final_volume=pi*r*r*h;
    a.value="volume is :"+final_volume
}

// to calculate the surface area 
var surface_cyl=()=>{
    let r=document.getElementById('radius').value;
    let h=document.getElementById('cyl-height').value;
    let a=document.getElementById('div-1_ans');
    let surfacearea=(2*pi*r*h)+(2*pi*r*r);
    a.value="Surface area is :"+surfacearea
}

//**********************div 2**********************//

// to calculate power 
var power_calc=()=>{
    var c=document.getElementById('current').value;
    var v=document.getElementById('voltage').value; 
    let a=document.getElementById('div-2_ans');
    var power=c*v;
    a.value="Power is : "+ power
}

//*********************div3**************************//

// to calculate area of wall and number of buckets required

let wall=()=>{
    var bucket_paint_area=document.getElementById('bucket_area').value;
    var wall_width=document.getElementById('wall_width').value;
    var wall_height=document.getElementById('wall_height').value;
    var answer=document.getElementById('div-3_ans')
    var wall_area=wall_width*wall_height;
    var bucket_req=wall_area/bucket_paint_area;
    answer.value="You need to have "+bucket_req+" buckets of paint. "
}







