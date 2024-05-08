

document.addEventListener('DOMContentLoaded', function() {
    const convertButton = document.querySelector('button');
    const resetButton = document.querySelectorAll('button')[1]; 
    const amountInput = document.getElementById('amountinput');
    const fromSelect = document.getElementById('optionbutton');
    const toSelect = document.querySelectorAll('select')[1]; 

    convertButton.addEventListener('click', function() {
        const amount = parseFloat(amountInput.value);
        const fromCurrency = fromSelect.value;
        const toCurrency = toSelect.value;

        const convertedAmount = convertCurrency(amount, fromCurrency, toCurrency);
    
        document.getElementById('result').textContent = `Converted amount: ${convertedAmount}`;
    });

    resetButton.addEventListener('click', function() {
        amountInput.value = '';
        fromSelect.selectedIndex = 0; 
        toSelect.selectedIndex = 0; 
        document.getElementById('result').textContent = '';
    });

    function convertCurrency(amount, fromCurrency, toCurrency) {
        
        const conversionRate = 85;
        let convertedAmount;

        if (fromCurrency === 'USA' && toCurrency === 'INDIA') {
            convertedAmount = amount * conversionRate;
        } else if (fromCurrency === 'INDIA' && toCurrency === 'USA') {
            convertedAmount = amount / conversionRate;
        } else {
           
            convertedAmount = amount;
        }

        return convertedAmount.toFixed(2); 
    }
});

