function compareLoans() {
    // Get input values for Loan 1
    let loanAmount1 = parseFloat(document.getElementById('loanAmount1').value);
    let interestRate1 = parseFloat(document.getElementById('interestRate1').value);
    let tenure1 = parseFloat(document.getElementById('tenure1').value);

    // Get input values for Loan 2
    let loanAmount2 = parseFloat(document.getElementById('loanAmount2').value);
    let interestRate2 = parseFloat(document.getElementById('interestRate2').value);
    let tenure2 = parseFloat(document.getElementById('tenure2').value);

    // Ensure that all inputs are filled in properly
    if (isNaN(loanAmount1) || isNaN(interestRate1) || isNaN(tenure1) || 
        isNaN(loanAmount2) || isNaN(interestRate2) || isNaN(tenure2)) {
        document.getElementById('comparisonResult').innerHTML = "Please fill out all fields correctly.";
        return;
    }

    // Convert tenure from years to months
    let tenureMonths1 = tenure1 * 12;
    let tenureMonths2 = tenure2 * 12;

    // Convert annual interest rates to monthly rates
    let monthlyRate1 = (interestRate1 / 12) / 100;
    let monthlyRate2 = (interestRate2 / 12) / 100;

    // Calculate EMI for Loan 1
    let emi1 = (loanAmount1 * monthlyRate1 * Math.pow(1 + monthlyRate1, tenureMonths1)) / 
               (Math.pow(1 + monthlyRate1, tenureMonths1) - 1);

    // Calculate EMI for Loan 2
    let emi2 = (loanAmount2 * monthlyRate2 * Math.pow(1 + monthlyRate2, tenureMonths2)) / 
               (Math.pow(1 + monthlyRate2, tenureMonths2) - 1);

    // Calculate total interest payable for both loans
    let totalInterest1 = (emi1 * tenureMonths1) - loanAmount1;
    let totalInterest2 = (emi2 * tenureMonths2) - loanAmount2;

    // Display the comparison results
    document.getElementById('comparisonResult').innerHTML = `
        <h3>Comparison Results:</h3>
        <strong>Loan 1 EMI: ₹${emi1.toFixed(2)}</strong><br>
        <strong>Total Interest Payable (Loan 1): ₹${totalInterest1.toFixed(2)}</strong><br>
        <strong>Loan 2 EMI: ₹${emi2.toFixed(2)}</strong><br>
        <strong>Total Interest Payable (Loan 2): ₹${totalInterest2.toFixed(2)}</strong><br><br>
        <strong>${emi1 < emi2 ? "Loan 1" : "Loan 2"} is a better option based on EMI.</strong><br>
        <strong>${totalInterest1 < totalInterest2 ? "Loan 1" : "Loan 2"} will save you more in total interest payable.</strong>
    `;
}
