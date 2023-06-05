var i = 0;
var slide = new Array();
var information_arr = new Array();
const number_of_people = localStorage.getItem('number_of_people');
const Last_Name = localStorage.getItem('lastname');
const First_Name = localStorage.getItem('firstname');
const Mobile = localStorage.getItem('mobile');
const Email = localStorage.getItem('email');
const Company = localStorage.getItem('company');
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


function get_value(){
    var number_of_people = document.getElementById("people").value;
    return number_of_people;
}


function print_value(){
    console.log("Booking for " + number_of_people + " people");
}

function get_firstname(){
    
    var First_Name = document.getElementById("firstname").value;
    var Last_Name = document.getElementById("lastname").value;
    var Mobile = document.getElementById("mobile").value;
    var Email = document.getElementById("email").value;
    var Company = document.getElementById("company").value;

    information_arr[0] = First_Name;
    information_arr[1] = Last_Name;
    information_arr[2] = Mobile;
    information_arr[3] = Email;
    information_arr[4] = Company;
    return First_Name;
}

function get_lastname(){
    
    var First_Name = document.getElementById("firstname").value;
    var Last_Name = document.getElementById("lastname").value;
    var Mobile = document.getElementById("mobile").value;
    var Email = document.getElementById("email").value;
    var Company = document.getElementById("company").value;

    information_arr[0] = First_Name;
    information_arr[1] = Last_Name;
    information_arr[2] = Mobile;
    information_arr[3] = Email;
    information_arr[4] = Company;
    return Last_Name;
}

function get_mobile(){
    
    var First_Name = document.getElementById("firstname").value;
    var Last_Name = document.getElementById("lastname").value;
    var Mobile = document.getElementById("mobile").value;
    var Email = document.getElementById("email").value;
    var Company = document.getElementById("company").value;

    information_arr[0] = First_Name;
    information_arr[1] = Last_Name;
    information_arr[2] = Mobile;
    information_arr[3] = Email;
    information_arr[4] = Company;
    return Mobile;
}


function get_email(){
    
    var First_Name = document.getElementById("firstname").value;
    var Last_Name = document.getElementById("lastname").value;
    var Mobile = document.getElementById("mobile").value;
    var Email = document.getElementById("email").value;
    var Company = document.getElementById("company").value;

    information_arr[0] = First_Name;
    information_arr[1] = Last_Name;
    information_arr[2] = Mobile;
    information_arr[3] = Email;
    information_arr[4] = Company;
    return Email;
}


function get_company(){
    
    var First_Name = document.getElementById("firstname").value;
    var Last_Name = document.getElementById("lastname").value;
    var Mobile = document.getElementById("mobile").value;
    var Email = document.getElementById("email").value;
    var Company = document.getElementById("company").value;

    information_arr[0] = First_Name;
    information_arr[1] = Last_Name;
    information_arr[2] = Mobile;
    information_arr[3] = Email;
    information_arr[4] = Company;
    return Company;
}