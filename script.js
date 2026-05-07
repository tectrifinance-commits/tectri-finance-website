function calculateLoan() {

    const amount = parseFloat(document.getElementById("amount").value);

    const weeks = parseInt(document.getElementById("weeks").value);

    // Charges
    const weeklyInterestRate = 10;
    const serviceChargeRate = 2;

    if (!amount || !weeks) {

        document.getElementById("result").innerHTML =
            "Please fill all fields";

        return;
    }

    // Weekly interest
    const interest =
        amount * (weeklyInterestRate / 100) * weeks;

    // One-time service charge
    const serviceCharge =
        amount * (serviceChargeRate / 100);

    // Total repayment
    const total =
        amount + interest + serviceCharge;

    // Weekly installment
    const weeklyPayment =
        total / weeks;

    document.getElementById("result").innerHTML =
        `
        <h3>Loan Summary</h3>

        Loan Amount: ZMW ${amount.toFixed(2)}<br>
        Duration: ${weeks} Week(s)<br>
        Interest: ZMW ${interest.toFixed(2)}<br>
        Service Charge (2%): ZMW ${serviceCharge.toFixed(2)}<br>
        Total Repayment: ZMW ${total.toFixed(2)}<br>
        Weekly Payment: ZMW ${weeklyPayment.toFixed(2)}
        `;
}