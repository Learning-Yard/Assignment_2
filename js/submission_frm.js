var submit=document.getElementById('submit');
var f_name=document.getElementById('first_name');
var l_name=document.getElementById('last_name');
var p_no=document.getElementById('phone_no');
var email_idx = document.getElementById('email');
var password_e = document.getElementById('password');
var password_c = document.getElementById('confirm_password');
var office_number = document.getElementById('office_no');
var opt1 = document.getElementById("checkbox_sample18");
var opt2 = document.getElementById("checkbox_sample19");
var opt3= document.getElementById("checkbox_sample20");
var about_u = document.getElementById('about_you');
var rdio1 = document.getElementById('residence1');
var rdio2 = document.getElementById('residence2');
var valid = false;
// const month = document.getElementById('select_month');
// const day = document.getElementById('select_day');
// const year = document.getElementById('select_year');
// const setAge = document.getElementById('age');

submit.addEventListener('click',function(e){
    e.preventDefault();
    validateform();

});
function validateform(){  
	var f_nameval=f_name.value;
	var l_nameval=l_name.value;
	var email_val=email_idx.value;
	var password_wr=password_e.value;
	var password_cr=password_c.value;
	var phone = p_no.value;
	var office_num = office_number.value;
	var ab_u = about_u.value;
	var alphanum = /^[a-zA-Z0-9]+$/;
	var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var opt1 = document.getElementById("checkbox_sample18");
	var opt2 = document.getElementById("checkbox_sample19");
	var opt3= document.getElementById("checkbox_sample20");
	var rdio1 = document.getElementById('residence1');
	var rdio2 = document.getElementById('residence2');
	var valid = false;

// Name Validation
if (f_nameval===''){  
	document.getElementById('fname').innerHTML ="Please enter your first name.";
	// return false;
    }else {
		document.getElementById('fname').innerHTML ="";
	}
if (l_nameval===''){  
	document.getElementById('lname').innerHTML ="Please enter your last name.";
	// return false;
	}else {
		document.getElementById('lname').innerHTML ="";
	}
// Phone Number Validation
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
// Office Number Validation
if(isNaN(office_num)){
	document.getElementById('o_n').innerHTML ="Only Numbers allowed.";
	// return false;
}else {
	document.getElementById('o_n').innerHTML ="";
}
// Email Validation
if(email_val===''){
	document.getElementById('email_id').innerHTML ="Please enter your email id";
	// return false;
}else if (!email_val.match(mailformat)){
	document.getElementById('email_id').innerHTML ="Please enter valid email id";
	// return false;
}else {
	document.getElementById('email_id').innerHTML ="";
}
// Password Validation
if(password_wr===''){
	document.getElementById('p_w').innerHTML ="Please enter your password";
	// return false;
}else if((password_wr.length >12)||(password_wr.length < 8)){
	document.getElementById('p_w').innerHTML ="Please length should be in range 8-12";
	// return false;
}else if(password_wr!=(password_wr.match(alphanum))){
	document.getElementById('p_w').innerHTML ="Password should be alphanumeric";
	// return false;
}else {
	document.getElementById('p_w').innerHTML ="";
}
if(password_cr===''){
	document.getElementById('p_cw').innerHTML ="Please confirm your password";
	// return false;
}else if(password_wr!=password_cr){
	document.getElementById('p_cw').innerHTML ="Password doesn't match";
	// return false;
}else {
	document.getElementById('p_cw').innerHTML ="";
}
// About You Validation
if (ab_u===''){
	document.getElementById('a_u').innerHTML ="Enter something about you";
	// return false;
}else {
	document.getElementById('a_u').innerHTML ="";
}
// else{
// 	ValidateEmail();
// }
// Intrest Validation
if (!(opt1.checked) && !(opt2.checked) && !(opt3.checked))
{
	document.getElementById('intrest_r').innerHTML ="Provide atleast one interest";
	// return false;
}else {
	document.getElementById('intrest_r').innerHTML ="";
}
// Radio Validation
if ((!rdio1.checked) && (!rdio2.checked)){
	document.getElementById('g_d').innerHTML ="Please select your gender";
	// return false;
}else {
	document.getElementById('g_d').innerHTML ="";
}
// DOB & Age Calculation

    // Validate Date---------
	if ((month.value === 'month') && (day.value === 'day') && (year.value === 'year')){
        document.getElementById('umar').innerHTML ="Please Enter DOB";
        // return false;		
	}
    else if (month.value === 'month') {
        document.getElementById('umar').innerHTML ="Please Select Month";
        // return false;
    }
    else if (day.value === 'day') {
        document.getElementById('umar').innerHTML ="Please Select Day";
        // return false;
    }
    else if (year.value === 'year') {
        document.getElementById('umar').innerHTML ="Please Select Year";
        // return false;
    }else{
		document.getElementById('umar').innerHTML ="";
	}

    let monthVal = month.value;
    let dayVal = parseInt(day.value);
    let yearVal = parseInt(year.value); 

    // Months With 30 days---------------

    if (monthVal === 'april' || monthVal == 'june' || monthVal == 'sep' || monthVal == 'nov') {
        if (dayVal > 30) {
            document.getElementById('umar').innerHTML ="Invalid Day";
            return false;
        }
    }

    if (monthVal === 'feb') {
        let leapYear = false;

        if ( ( !(yearVal % 4) && yearVal % 100) || !(yearVal % 400) ) {
            leapYear = true;
        }
        
        // if Year is not a Leap year then day should not be greater than 28-----

        if ((leapYear == false) && dayVal >= 29) {
            document.getElementById('umar').innerHTML ="Invalid Date";
            return false;
        }

        // if Year is a Leap year then day should not be greater than 29-----

        if ((leapYear == true) && dayVal > 29) {
            document.getElementById('umar').innerHTML ="Invalid Date";
            return false;
        }
    }

    // calculate Age--------

    let monthIndex = ['jan','feb','march','april','may','june','july','aug','sep','oct','nov','dec'];

    //console.log(monthIndex.indexOf(monthVal)+1);
    let crrDate = new Date();
    let birthDate = new Date(yearVal,monthIndex.indexOf(monthVal),dayVal);
    //console.log(crrDate);
    //console.log(birthDate);

    let diffInMS = crrDate.valueOf() - birthDate.valueOf();
    //console.log(diffInMS);

    // ( 1000 * 60 * 60 * 24 * 365.25 ) MilliSec Pre Year
    let age = Math.floor(diffInMS / ( 1000 * 60 * 60 * 24 * 365.25 ) );
    //console.log(age);

    // (1000 * 60 * 60 * 24) MilliSec Per Day---
    let days = Math.floor((diffInMS % ( 1000 * 60 * 60 * 24 * 365.25 )) / (1000 * 60 * 60 * 24) ) ;

    //console.log(days);

    let months = Math.floor(days/30) / 100;

    //console.log(months);
    //ageValue = `${age}.${months}`;

    ageValue = age + months;
    //console.log(ageValue);
    
    setAge.value = ageValue;
    //console.log(setAge.value);
	if(ageValue<0){
		document.getElementById('age').innerHTML = "Invlaid DOB";
		// return false;
	}else if(ageValue<18){
		document.getElementById('age').innerHTML = "Not Eligible";
	}else if ((month.value !== 'month') && (day.value !== 'day') && (year.value !== 'year')){
		document.getElementById('age').innerHTML = ageValue+" "+"Years";
		// return true;
	}else if ((month.value === 'month') || (day.value === 'day') || (year.value === 'year')){
        document.getElementById('age').innerHTML = "";
    }
}