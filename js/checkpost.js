var opt1 = document.getElementById("checkbox_sample18");
var opt2 = document.getElementById("checkbox_sample19");
var opt3= document.getElementById("checkbox_sample20");

function c_box(){
	var opt1 = document.getElementById("checkbox_sample18");
	var opt2 = document.getElementById("checkbox_sample19");
	var opt3= document.getElementById("checkbox_sample20");

    // Intrest Validation
if (!(opt1.checked) && !(opt2.checked) && !(opt3.checked))
{
	document.getElementById('intrest_r').innerHTML ="Provide atleast one interest";
	// return false;
}else {
	document.getElementById('intrest_r').innerHTML ="";
}
}