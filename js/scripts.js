// Business Logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings
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

//User Logic
$(document).ready(function() {
  $("#order-form").submit(function(event) {
    let toppingArray = []
    const checkboxes = document.querySelectorAll("input[name='toppings']:checked");
    const size = parseInt($("#size-select").val());

    checkboxes.forEach((checkbox) => {
      toppingArray.push(checkbox.value);
    });
    let newPizza = new Pizza(size, toppingArray);
    let price = newPizza.price();

    $("#receipt-details").show();
    $("#total-span").html("$" + price + ".00");

    event.preventDefault();
  });
})