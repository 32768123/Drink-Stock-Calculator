function calculate() {
    // Define the max quantities for each drink
    const maxQuantities = {
        water: 36,
        limeWater: 12,
        // Add more drinks here
    };

    // Get the current quantities from the form
    const form = document.getElementById('drinkForm');
    const currentQuantities = {};
    for (let drink in maxQuantities) {
        currentQuantities[drink] = parseInt(form[drink].value) || 0;
    }

    // Calculate the needed quantities
    const neededQuantities = {};
    for (let drink in maxQuantities) {
        neededQuantities[drink] = maxQuantities[drink] - currentQuantities[drink];
    }

    // Display the results
    let resultHTML = '<h2>Needed Quantities</h2><ul>';
    for (let drink in neededQuantities) {
        resultHTML += `<li>${drink.charAt(0).toUpperCase() + drink.slice(1)}: ${neededQuantities[drink]}</li>`;
    }
    resultHTML += '</ul>';

    document.getElementById('result').innerHTML = resultHTML;
}
