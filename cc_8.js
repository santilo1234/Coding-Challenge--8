//Task 1
function calculateSalary(baseSalary, bonus, taxRate){
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    console.log(`Net Salary: $${netSalary.tofixed(2)}`); //Calculates the net salary after adding the bonus
}

//Test Data
calculateSalary(5000, 500, 0.1); // Expected output: "Net Salary: $5000.00"
calculateSalary(7000, 1000, 0.15); // Expected output: "Net Salary: $6950.00"


//Task 2
const calculateDiscount= function(price, discountRate) {
    let finalPrice = price - (price * discountRate);
    console.log(`Final Price: $$(finalPrice.toFixed(2))`); //Calculates final price after discount


}

//Test Data
calculateDiscount(100, 0.2); // Expected output: "Final Price: $80.00"
calculateDiscount(250, 0.15); // Expected output: "Final Price: $212.50"