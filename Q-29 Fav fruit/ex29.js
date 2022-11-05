/*
Favorite Fruit: Make a array of your favorite fruits, 
and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/

let favorite_fruits = ["apple","mango","peach"];

if(favorite_fruits.includes("apple")){
    console.log("Apples are love");
}

if(favorite_fruits.includes("mango")){
    console.log("Mangoes are love");
}

if(favorite_fruits.includes("peach")){
    console.log("Peach are love");
}

if(favorite_fruits.includes("grapes")){
    console.log("Yes to grapes");
}

if(favorite_fruits.includes("Kiwi")){
    console.log("Yes to Kiwi");
}