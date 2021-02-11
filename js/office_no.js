var office_number = document.getElementById('office_no');

function office(){
    var office_num = office_number.value;
    
    if(isNaN(office_num)){
        document.getElementById('o_n').innerHTML ="Only Numbers allowed.";
        // return false;
    }else {
        document.getElementById('o_n').innerHTML ="";
    }
}