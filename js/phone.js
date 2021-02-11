var p_no=document.getElementById('phone_no');

function phone_no(){
    var phone = p_no.value;
if(phone===''){
	document.getElementById('p_n').innerHTML ="Please enter your phone number.";
	// return false;
}else if((phone.length > 10) || (phone.length < 10)){
	document.getElementById('p_n').innerHTML ="Phone Number should be exactly 10 digits only.";
	// return false;
}else if(isNaN(phone)){
	document.getElementById('p_n').innerHTML ="Only Numbers allowed.";
	// return false;
}else {
	document.getElementById('p_n').innerHTML ="";
}
}