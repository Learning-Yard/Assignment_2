var email_idx = document.getElementById('email');
var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

function email_ver(){
    var email_val=email_idx.value;
	var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    
    if(email_val===''){
        document.getElementById('email_id').innerHTML ="Please enter your email id";
        // return false;
    }else if (!email_val.match(mailformat)){
        document.getElementById('email_id').innerHTML ="Please enter valid email id";
        // return false;
    }else {
        document.getElementById('email_id').innerHTML ="";
    }
}