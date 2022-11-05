var guests = ["Talha", "Samad", "A.basit", "Saqib", "Zabrain", "Ashhar"];

var y = guests.splice(0,1);
console.log("Sorry Mr. " + y + " Dinner is cancelled");
var z = guests.splice(0,1);
console.log("Sorry Mr. " + z + " Dinner is cancelled");
var a = guests.splice(0,1);
console.log("Sorry Mr. " + a + " Dinner is cancelled");
var b = guests.splice(0,1);
console.log("Sorry Mr. " + b + " Dinner is cancelled");
for (i of guests) {
    console.log("Mr. " + i + " Hope you are joining us for dinner")
}
    guests.pop();
    guests.pop();
    console.log(guests);




