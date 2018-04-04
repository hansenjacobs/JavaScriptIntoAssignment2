let hoursWorked = prompt("Total hours worked:");
let payRate = prompt("Pay rate:")
let grossPay;

grossPay = hoursWorked * payRate;

console.log('Total Gross Pay $' + grossPay.toFixed(2))