const month = document.getElementById('select_month');
const day = document.getElementById('select_day');
const year = document.getElementById('select_year');
const setAge = document.getElementById('age');

function date_n_age_calci(){
// DOB & Age Calculation

    // Validate Date---------
	if ((month.value === 'month') && (day.value === 'day') && (year.value === 'year')){
        document.getElementById('umar').innerHTML ="Please Enter DOB";
	}
    else if (month.value === 'month') {
        document.getElementById('umar').innerHTML ="Please Select Month";
    }
    else if (day.value === 'day') {
        document.getElementById('umar').innerHTML ="Please Select Day";
    }
    else if (year.value === 'year') {
        document.getElementById('umar').innerHTML ="Please Select Year";
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
        }

        // if Year is a Leap year then day should not be greater than 29-----

        if ((leapYear == true) && dayVal > 29) {
            document.getElementById('umar').innerHTML ="Invalid Date";
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