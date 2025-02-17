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


//Task 3
const calculateServiceFee = (amount, serviceType) => {
    let feeRate = ServiceType === "Premium" ? 0.15 : serviceType === "Standard" ? 0.10 : 0.05;
    let serviceFee = amount * feeRate; //Service fee calculation
    
}

//Test Data
calculateServiceFee(200, "Premium"); // Expected output: "Service Fee: $30.00"
calculateServiceFee(500, "Standard"); // Expected output: "Service Fee: $50.00"


//Task 4
const calculateRentalCost = (days, carType, insurance = false) => {
    let dailyRate = carType === "Economy" ? 40 : carType === "Standard"? 60 : 100;
    let totalCost = days * dailyRate + (insurance ? days * 20 : 0);
    console.log(`Total Rental Cost: $$(totalCost)`); //Calculates the total rental cost

};

//Test Data
calculateRentalCost(3, "Economy", true); // Expected output: "Total Rental Cost: $180"
calculateRentalCost(5, "Luxury", false); // Expected output: "Total Rental Cost: $500"



//Task 5
constCalculateLoanPayment =(principal, rate, time) => {
    let totalPayment = principal + (principal * rate * time);
    console.log(`Total Payment: $${totalPayment.toFixed(2)}`); // Calculates the total payment

};


//Test Data
calculateLoanPayment(1000, 0.05, 2); // Expected output: "Total Payment: $1100.00"
calculateLoanPayment(5000, 0.07, 3); // Expected output: "Total Payment: $6050.00"



