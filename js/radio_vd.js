var rdio1 = document.getElementById('residence1');
var rdio2 = document.getElementById('residence2');

function radio_bt(){
    var rdio1 = document.getElementById('residence1');
	var rdio2 = document.getElementById('residence2');

    // Radio Validation
if ((!rdio1.checked) && (!rdio2.checked)){
	document.getElementById('g_d').innerHTML ="Please select your gender";
	// return false;
}else {
	document.getElementById('g_d').innerHTML ="";
}
}