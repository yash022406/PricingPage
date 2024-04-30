const minutes = document.getElementById("minutes")
const price = document.getElementById('price')
const priceMap = {
    900: 3233,
    1200: 4651,
    1500: 5813,
    1800: 6975
  };
  console.log(minutes)
  minutes.addEventListener('change', function() {
    // Get the selected option value
    const selectedMinutes = parseInt(this.value);
  
    // Update the price based on the selected option
    const newPrice = priceMap[selectedMinutes];
    if (newPrice) {
        price.textContent = `INR ${newPrice}`;
    }
  });