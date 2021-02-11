var password_e = document.getElementById('password');

function password_wrc(){
    var password_wr=password_e.value;
	var alphanum = /^[a-zA-Z0-9]+$/;
	
    // Password Validation
if(password_wr===''){
	document.getElementById('p_w').innerHTML ="Please enter your password";
	// return false;
}
if((password_wr.length >12)||(password_wr.length < 8)){
	document.getElementById('p_w').innerHTML ="Please length should be in range 8-12";
	// return false;
}else if(password_wr!=(password_wr.match(alphanum))){
	document.getElementById('p_w').innerHTML ="Password should be alphanumeric";
	// return false;
}else {
	document.getElementById('p_w').innerHTML ="";
}
}