// Task 1 Customer Discounts If Statements//
let purchaseAmount = 200;
let finalAmont = purchaseAmount;
if (purchaseAmount> 100) { finalAmount = purchaseAmount*.9};
console.log ("discount applied");

// Task 2 Sales Report Loop //
let sales = [120,85,200,150,90];
let totalSales = 0;
for (let i = 0; i < sales.length; i++)
{totalSales += sales[i]}
console.log ('Total Sales: $$ {totalSales}');

// Task 3 Inventory Depletion While Loop //
let stock = 10;
while (stock > 0) {
    console.log(`Stock remaining: ${stock}`); 
stock--; }
console.log("Depletion");

// task 4 Customer Survey Do...While Loop //
let responses = 0;
do {
responses++;
 console.log (`responses Collected: ${responses}`);
}while (responses<3);

// Task 5 Employee Information For In Loop //
let Employee ={
    name: "Alice", 
    position : "manager", 
    salary: "75,000"
}; for (let key in Employee) { console.log (`${key}: ${Employee}[key]`)};

// Task 6 Product Listings for of Loop //
let products = ["laptop","mouse","keybored"];
for (let product of products) {console.log(`product:${product}`)}

// Task 7 Order Processing forEach() Method //
let orders = [ 101 ,102 ,103 ];
orders.forEach(order => {
    console.log (`Order Id:${order}`)
});

// Task 8 Tax Calculation Function Declaration //
function calculateTax (amount, taxrate)
{return amount * taxrate;
} console.log (`Tax Amount : $${calculateTax(100,.07)}`);

// Task 9 Discount Application Function Expressions //
const applyDiscount = function (price, discountpercentage)
{return price - (price * (discountpercentage/100))};
let discountedPrice = applyDiscount (120/15)
console.log (`Discounted price: $${discountedPrice}`)