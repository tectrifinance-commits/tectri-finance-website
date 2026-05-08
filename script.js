function calculateLoan() {

    const amount = parseFloat(document.getElementById("amount").value);

    const months = parseInt(document.getElementById("months").value);

    const category = document.getElementById("category").value;

    // Processing fee
    const processingFeeRate = 5;

    let interestRate;

    // Interest based on customer type
    if (category === "civil") {

        interestRate = 10;

    } else if (category === "noncivil") {

        interestRate = 15;

    } else {

        document.getElementById("result").innerHTML =
            "Please select loan category";

        return;
    }

    // Validation
    if (!amount || !months) {

        document.getElementById("result").innerHTML =
            "Please fill all fields";

        return;
    }

    // Interest calculation
    const interest =
        amount * (interestRate / 100) * months;

    // One-time processing fee
    const processingFee =
        amount * (processingFeeRate / 100);

    // Total repayment
    const total =
        amount + interest + processingFee;

    // Monthly installment
    const monthlyPayment =
        total / months;

    // Display results
    document.getElementById("result").innerHTML =
        `
        <h3>Loan Summary</h3>

        Loan Category: ${category === "civil" ? "Civil Servant" : "Business/Personal"}<br>

        Loan Amount: ZMW ${amount.toFixed(2)}<br>

        Duration: ${months} Month(s)<br>

        Interest Rate: ${interestRate}% per month<br>

        Interest Amount: ZMW ${interest.toFixed(2)}<br>

        Processing Fee (5%): ZMW ${processingFee.toFixed(2)}<br>

        Total Repayment: ZMW ${total.toFixed(2)}<br>

        Monthly Payment: ZMW ${monthlyPayment.toFixed(2)}
        `;
}
