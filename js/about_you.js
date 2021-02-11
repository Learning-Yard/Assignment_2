var about_u = document.getElementById('about_you');

function about_uss(){
    var ab_u = about_u.value;
    // About You Validation
if (ab_u===''){
	document.getElementById('a_u').innerHTML ="Enter something about you";
	// return false;
}else {
	document.getElementById('a_u').innerHTML ="";
}
}