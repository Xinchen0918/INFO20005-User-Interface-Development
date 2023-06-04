var i = 0;
var slide = new Array();

slide[0] = "../images/Zero-Mode-24th-June_GRIFFIN-SIMM_Finals-41.jpeg";
slide[1] = "../images/Zero-Mode-Food_GRIFFIN-SIMM_Finals-47.jpeg";
slide[2] = "../images/Zero-Mode-Food_GRIFFIN-SIMM_Finals-55.jpeg";

function slide_pic(){
    var cur_pic = document.getElementById("slide-pic");
    if (i == slide.length-1){
        i = 0;
    }else{
        i += 1;
    }
    cur_pic.src = slide[i];
    return
}

function slide_pic_back(){
    var cur_pic = document.getElementById("slide-pic");
    if (i == 0){
        i = slide.length-1;
    }else{
        i -= 1;
    }
    cur_pic.src = slide[i];
    return
}

function scroll_down(){
    window.location.hash = "#menu"
}
