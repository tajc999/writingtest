
//Unit Tests:
//1. A function called "multiplication" that returns the product of the two input numbers.
Happy 
Expect multiplication(number, number) to be equal to number
Expect multiplication (2, 3) to be a number
Expect multiplication(2, 3) to be equal to 6
Expect multiplication(-1, -5) to be equal to 5

Unhappy
Expect multiplication(text, 3) to be an error
Expect multiplication(hello, -1) to be an error

//2. A function called "concatOdds" takes two arrays of integers as arguments. 
//It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.
//concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])

Happy
Expect concatOdds(intArr, intArr) to be intArr
Expect concatOdds([1, 2, 3], [4, 5, 6]) to be
[1, 3, 5]
Expect concatOdds([3, 5, 7], [8, 9, 10]) to be
[3, 5, 7]

Unhappy
It does not return a single array that only contains the odd numbers, in ascending order, from both of the arrays.
Expect concatOdds(intArr, floatArr) to be error


//Functional Tests:
//1. A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.

User proceeds to add items to thier cart
When they are ready to checkout, they are prompted to log in or proceed as a guest.
They proceed through the checkout button.
they are given recommended items
they are taken to the review page.
they enter payment information.
they are given the option remove items, add more items, or cancel the order within the next 24 hours.