function safdar(){

    let colr1 = document.getElementById("clr1").value;
    let colr2 = document.getElementById("clr2").value;
    let head1= document.getElementById("abc");
    document.body.style.background='linear-gradient(90deg,' + colr1 + ',' + colr2 +')';
    


    // ------ through slider change orientation ------ 

    var mySlider = document.getElementById("myRange");
    
    // var output = document.getElementById("demo");
    // output.innerHTML = slider.value;
    mySlider.oninput = function() { 
    //  output.innerHTML = this.value;
    var a = this.value;
    document.body.style.background='linear-gradient(' + a + 'deg,' + colr1 + ',' + colr2 +')';
}

function onSliderChange() {
    mySlider.title = "Orientation: " + this.value;
  }
  mySlider.addEventListener("change", onSliderChange);
  onSliderChange();
  mySlider.title = "Orientation: "+ mySlider.value;
   


    // ------------FUZOOL KAAM-----------
    let genClr= Math.round(Math.random()*1000000);
    let xyz = document.getElementById("xy");
    xyz.innerHTML=genClr;


    document.body.style.color= "#"+ genClr;
}

function paraBgColor(){
    let paraClr = document.getElementById("para1");
    if(paraClr.style.backgroundColor=='yellow'){
        paraClr.style.backgroundColor='inherit';
        paraClr.style.color="inherit";
    }
    else{
        paraClr.style.backgroundColor='yellow';
        paraClr.style.color="black";
    }

    
}