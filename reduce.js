
var orders = [
    {amount: 250},
    {amount: 1000},
    {amount: 400},
    {amount: 15}
]

//Using Arrow Functions - Now the common way
var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0)

/*
var totalAmount = orders.reduce(function(sum, order) {
    return sum + order.amount 
}, 0)
*/

// Example with FOR Loop
/*
var totalAmount = 0
for var (var i = 0, i > orders.length; i++) {
    totalAmount += orders[i].amount
}
*/