function validasiRegistrasi(){
let name = document.getElementById("nameID")
let email = document.getElementById("emailID")
let psw = document.getElementById("passID")
let numb = document.getElementById("numbID")
let gmale = document.getElementById("radio-male")
let gfemale = document.getElementById("radio-female")
let checkbox = document.getElementById("agreeID") 

    if(allLetter(name)){
    if(ValidateEmail(email)){
    if(phoneNumb(numb)){
    if(validsex(gmale,gfemale)){
    if(passid_validation(psw,7,12)){
    if(radiocheck(checkbox)){
        alert("Your registration is success!")
    }
    }
    }
    }
    }
    }
    return false;
 }


 function allLetter(name){
    var letters = /^[A-Za-z]+$/;

    if(name.value.match(letters)){
    return true;
    }else{
    alert('Name must have alphabet characters only');
    fname.focus();
    return false;
    }
 }

 function ValidateEmail(email){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(mailformat)){
    return true;
    }else{
    alert("You have entered an invalid email address!");
    email.focus();
    return false;
    }
 }

function phoneNumb(numb){
    var numbers = /^[0-9]+$/;
    if(numb.value.match(numbers))
    {
    return true;
    }
    else
    {
    alert('Phone number must have numeric characters only');
    numb.focus();
    return false;
    }
}

function validsex(gmale,gfemale){
    x=0;

    if(gmale.checked){
        x++;
    }
    if(gfemale.checked){
        x++; 
    }
    if(x==0){
    alert('Select Male/Female');
        gmale.focus();
    return false;
    }else{
    return true;
    }
}

function passid_validation(psw,mx,my){
    var passid_len = psw.value.length;
    if (passid_len == 0 ||passid_len >= my || passid_len < mx)
    {
    alert("Password should not be empty / length be between "+mx+" to "+my);
    psw.focus();
    return false;
    }
    return true;
}

function radiocheck(agreeID){
    y =0;
    if(agreeID.checked){
        y++;
    }
    if(y==0){
        alert('You must agree first!');
        agreeID.focus();
        return false;
    }else{
        return true;
    }
}

