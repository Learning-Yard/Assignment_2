var f_name=document.getElementById('first_name');
var alpha = /^[a-zA-Z]+$/;

function first_name(){  
	var f_nameval=f_name.value;

    if (f_nameval===''){  
        document.getElementById('fname').innerHTML ="Please enter your last name.";
        // return false;
        }else if (!f_nameval.match(alpha)){
            document.getElementById('fname').innerHTML ="Numbers not allowed";
            // return false;
        }else if (f_nameval.length < 3){
            document.getElementById('fname').innerHTML ="Last Name should atleast have 3 character.";		
        }else {
            document.getElementById('fname').innerHTML ="";
        }
}