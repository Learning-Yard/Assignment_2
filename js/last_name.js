var l_name=document.getElementById('last_name');
var alpha = /^[a-zA-Z]+$/;

function last_name(){  
	var l_nameval=l_name.value;

    if (l_nameval===''){  
        document.getElementById('lname').innerHTML ="Please enter your last name.";
        // return false;
        }else if (!l_nameval.match(alpha)){
            document.getElementById('lname').innerHTML ="Only Characters allowed";
            // return false;
        }else if (l_nameval.length < 3){
            document.getElementById('lname').innerHTML ="Last Name should atleast have 3 character.";		
        }else {
            document.getElementById('lname').innerHTML ="";
        }
}