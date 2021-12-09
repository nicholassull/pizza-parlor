// Utility Functions

function Pizza(size) {
  this.size = size;
  this.toppings = []
}

Pizza.prototype.price = function() {
  let cost = 0;
  if (this.size === 1) {
    cost += 10;
  } else if (this.size === 2) {
    cost += 14;
  } else {
    cost += 18
  }
  this.toppings.forEach(function(topping) { 
    cost += 1;
  });
  return cost;
}