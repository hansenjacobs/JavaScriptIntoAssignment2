function calculateGrossPay(form){

	let hoursWorked = Number(form.hoursWorked.value);
	let payRate = Number(form.payRate.value);
	let grossPay;
	
	//if(hoursWorked !== NaN && payRate !== NaN){
	if(isNumber(hoursWorked) && isNumber(payRate)){
		grossPay = hoursWorked * payRate;
		alert("Total Gross Pay $" + grossPay.toFixed(2));
	} else {
		grossPay = NaN;
		alert("Invalid input provided, check the inputs are both numbers and try again.")
	}
	return grossPay;

}

function isNumber(number){
	if(typeof number === Number && number !== NaN){
		return true;
	} else {
		return false;
	}
}