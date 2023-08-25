document.addEventListener('DOMContentLoaded', function() {
    const convertBtn = document.getElementById('convertBtn');
    const inputTemp = document.getElementById('inputTemp');
    const inputUnit = document.getElementById('inputUnit');
    const result = document.getElementById('result');
  
    convertBtn.addEventListener('click', function() {
      const temp = parseFloat(inputTemp.value);
      const unit = inputUnit.value;
  
      if (unit === 'celsius') {
        const fahrenheit = (temp * 9/5) + 32;
        result.textContent = `${temp}°C is ${fahrenheit.toFixed(2)}°F`;
      } else if (unit === 'fahrenheit') {
        const celsius = (temp - 32) * 5/9;
        result.textContent = `${temp}°F is ${celsius.toFixed(2)}°C`;
      }
    });
  });
  
