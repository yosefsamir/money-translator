function convert() {
    var amount = document.getElementById("amount").value;
    var type = document.getElementById("type").value;

    if(isNaN(amount) || amount <= 0)
    {
        document.getElementById("result").innerHTML = "please enter validate money";
        return;
    }
    var convertedAmount;
    if (type === "USD") {
        convertedAmount = amount * 47.80;
    } else if (type === "EUR") {
        convertedAmount = amount * 52.05;
    }
    document.getElementById("result").innerHTML = "Converted Amount: " + convertedAmount.toFixed(2) + " " +  type;
}