function validasiLogin(){
    var email = document.loginform.email.value;
    var psw = document.loginform.psw.value;

        if(email == ""){
            alert ("Your email need to be filled");
            return false;
        } else if (!validatemail()){
            return false;
        } else if (psw == ""){
            alert ("Your password need to be filled");
            return false;
        }
}

function validatemail() {
    var emailID = document.loginform.email.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
    
    if (atpos < 1 || ( dotpos - atpos < 2 )) {
       alert("Please enter correct email ID")
       document.loginform.email.focus() ;
       return false;
    }
    return( true );
 }