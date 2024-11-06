function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const conversionRate = 82.75; // Example conversion rate from USD to INR
    if (isNaN(amount) || amount <= 0) {
      document.getElementById("result").textContent = "Please enter a valid amount.";
    } else {
      const result = amount * conversionRate;
      document.getElementById("result").textContent = `${amount} USD = ₹${result.toFixed(2)} INR`;
    }
  }
  