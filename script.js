// ==========================
// Part 1: Date Display
// ==========================

// Create a Date object for the current date.
let currentDate = new Date();

// Get the current month, day, and year.
// JavaScript months begin at 0, so 1 must be added to the month.
let currentMonth = currentDate.getMonth() + 1;
let currentDay = currentDate.getDate();
let currentYear = currentDate.getFullYear();

// Add a leading zero if the month is less than 10.
if (currentMonth < 10) {
    currentMonth = "0" + currentMonth;
} else {
    currentMonth = currentMonth.toString();
}

// Add a leading zero if the day is less than 10.
if (currentDay < 10) {
    currentDay = "0" + currentDay;
} else {
    currentDay = currentDay.toString();
}

// Create the final date message.
let dateMessage =
    "Today is " + currentMonth + "/" + currentDay + "/" + currentYear;

// Display the date on the webpage.
document.getElementById("dateOutput").textContent = dateMessage;


// ==========================
// Part 2: Number Conversion
// ==========================

// Create four separate string values.
let firstValue = "86";
let secondValue = "27";
let decimalValue = "14.75";
let invalidValue = "computer";

// Convert each value using Number().
let convertedFirst = Number(firstValue);
let convertedSecond = Number(secondValue);
let convertedDecimal = Number(decimalValue);
let convertedInvalid = Number(invalidValue);

// Check each converted value with Number.isNaN().
let firstIsNaN = Number.isNaN(convertedFirst);
let secondIsNaN = Number.isNaN(convertedSecond);
let decimalIsNaN = Number.isNaN(convertedDecimal);
let invalidIsNaN = Number.isNaN(convertedInvalid);

// Check each converted value with Number.isInteger().
let firstIsInteger = Number.isInteger(convertedFirst);
let secondIsInteger = Number.isInteger(convertedSecond);
let decimalIsInteger = Number.isInteger(convertedDecimal);
let invalidIsInteger = Number.isInteger(convertedInvalid);

// Create a separate result for each original value.
let firstResult =
    "<p>Original value: \"" + firstValue +
    "\" &rarr; Converted: " + convertedFirst +
    " &rarr; isNaN: " + firstIsNaN +
    " &rarr; isInteger: " + firstIsInteger + "</p>";

let secondResult =
    "<p>Original value: \"" + secondValue +
    "\" &rarr; Converted: " + convertedSecond +
    " &rarr; isNaN: " + secondIsNaN +
    " &rarr; isInteger: " + secondIsInteger + "</p>";

let decimalResult =
    "<p>Original value: \"" + decimalValue +
    "\" &rarr; Converted: " + convertedDecimal +
    " &rarr; isNaN: " + decimalIsNaN +
    " &rarr; isInteger: " + decimalIsInteger + "</p>";

let invalidResult =
    "<p>Original value: \"" + invalidValue +
    "\" &rarr; Converted: " + convertedInvalid +
    " &rarr; isNaN: " + invalidIsNaN +
    " &rarr; isInteger: " + invalidIsInteger + "</p>";


// Conditional statement that checks the invalid value.
let validationMessage;

if (Number.isNaN(convertedInvalid)) {
    validationMessage =
        "<p class=\"message\">The value \"" +
        invalidValue +
        "\" is not a valid number.</p>";
} else {
    validationMessage =
        "<p class=\"message\">This value is a valid number.</p>";
}

// Combine all conversion results into one string.
let conversionResults =
    firstResult +
    secondResult +
    decimalResult +
    invalidResult +
    validationMessage;

// Display the conversion results on the webpage.
document.getElementById("numberConversionOutput").innerHTML =
    conversionResults;


// ==========================
// Part 3: Math & Formatting
// ==========================

// Values for a simple price calculator.
let itemPrice = 24.99;
let quantity = 3;
let shippingCost = 5.00;
let taxRate = 0.095;

// Multiply the price by the quantity.
let subtotal = itemPrice * quantity;

// Calculate the tax.
let taxAmount = subtotal * taxRate;

// Add the subtotal, tax, and shipping to find the total.
let totalCost = subtotal + taxAmount + shippingCost;

// Format the monetary values to two decimal places.
let formattedSubtotal = subtotal.toFixed(2);
let formattedTax = taxAmount.toFixed(2);
let formattedTotal = totalCost.toFixed(2);

// Create a message based on the final total.
let totalMessage;

if (totalCost >= 80) {
    totalMessage = "The total purchase is $80 or more.";
} else {
    totalMessage = "The total purchase is less than $80.";
}

// Build the math results.
let mathResults =
    "<p>Item price: $" + itemPrice.toFixed(2) + "</p>" +
    "<p>Quantity: " + quantity + "</p>" +
    "<p>Subtotal: $" + formattedSubtotal + "</p>" +
    "<p>Tax: $" + formattedTax + "</p>" +
    "<p>Shipping: $" + shippingCost.toFixed(2) + "</p>" +
    "<p><strong>Total: $" + formattedTotal + "</strong></p>" +
    "<p class=\"message\">" + totalMessage + "</p>";

// Display the results on the webpage.
document.getElementById("mathOutput").innerHTML = mathResults;