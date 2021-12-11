# _Title_

#### By _**Nick Sullivan**_

#### _Short description_

## Technologies Used

* __

## Description

__

## Setup Instructions

* _Open your terminal and navigate to the folder you'd like to download the files into._
* _Run the command below_
> git clone https://github.com/nicholassull/portfolio-landing
* _Open index.html_

## Specifications
```
Describe: Pizza()

Test: Create a new Pizza object with a size of 1.
Code: 
> newPizza(1)
> console.log(newPizza.size)
Expected Output: 1
```
```
Describe: Pizza.prototype.price()

Test: It should output a number according to the size of newPizza
Code: 
> newPizza.price()
Expected Output: 10

Test: It should increase the cost of the pizza by 1 for every topping in newPizza.toppings.
Code:
> newPizza.toppings = ["mushrooms", "onions"]; 
> newPizza.price();
Expected Output: 12
```
```
Describe: Pizza.prorotype.sizeName()

Test: It should return "Small", "Medium", or "Large" based on the size number of a Pizza object.
Code:
> newPizza.size = 1;
> newPizza.sizeName();
Expected Output: "Small"
```
## Known Bugs

* _No known bugs at this time._

## License

Copyright (c) _10/27/2021_ _by Nick Sullivan_


_Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:_

_The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software._

_THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE._