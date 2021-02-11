var password_e = document.getElementById('password');
var password_c = document.getElementById('confirm_password');

function password_crc(){
    var password_cr=password_c.value;
    var password_wr=password_e.value;

    if(password_cr===''){
        document.getElementById('p_cw').innerHTML ="Please confirm your password";
        // return false;
    }else if(password_wr!=password_cr){
        document.getElementById('p_cw').innerHTML ="Password doesn't match";
        // return false;
    }else {
        document.getElementById('p_cw').innerHTML ="";
    }
}