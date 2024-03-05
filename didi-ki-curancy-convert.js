// Fetch exchange rates from an API
const API_URL = 'https://api.exchangerate-api.com/v4/latest/';

async function getExchangeRates(baseCurrency) {
    const response = await fetch(API_URL + baseCurrency);
    const data = await response.json();
    return data.rates;
}

// Populate currency options
async function populateCurrencies() {
    const rates = await getExchangeRates('INR'); // Change base currency as needed
    const fromCurrencySelect = document.getElementById('from');
    const toCurrencySelect = document.getElementById('to');
    
    for (const currency in rates) {
        const option1 = document.createElement('option');
        option1.text = currency;
        fromCurrencySelect.add(option1);
        
        const option2 = document.createElement('option');
        option2.text = currency;
        toCurrencySelect.add(option2);
    }
    
    // Set default currencies
    fromCurrencySelect.value = 'INR';
    toCurrencySelect.value = 'USD';
}

populateCurrencies();

// Convert currency
function convert() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;
    
    getExchangeRates(fromCurrency).then(rates => {
        const exchangeRate = rates[toCurrency];
        const convertedAmount = amount * exchangeRate;
        document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`, alert("Thanku for convert Your courancy❤️");
        console.log(result);
    });
}


//focus amount input
window.onload = function() {
    document.getElementById("amount").focus();
  }
