var productNames = ["Gold Ring", "Silver Necklace", "Diamond Earrings"];
var productPrices = [120, 85, 150];

// Step 2: Function runs when a button is clicked
function addToCart(index) {
  var name = productNames[index];
  var price = productPrices[index];

  // Step 3: Show message using alert
  alert("You added: " + name + " ($" + price + ")");

  // Step 4: Debug message in console
  console.log("DEBUG: " + name + " added to cart. Price: $" + price);
}
function addToCart(index) {
  var productNames = ["Gold Ring", "Silver Necklace", "Diamond Earrings"];
  var productPrices = [120, 85, 150];

  var name = productNames[index];
  var price = productPrices[index];

  // ✅ This is the alert that shows when button is clicked:
  alert("🛒 You added: " + name + "\nPrice: $" + price);
}