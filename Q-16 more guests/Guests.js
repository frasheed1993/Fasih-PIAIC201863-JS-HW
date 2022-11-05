var guests = ["Talha", "Shakeel", "A.basit","Arsalan"];
 guests.unshift("Osama");
 guests.push("Saood");
 guests.splice(2, 0, "Samad");
for (i of guests) {
    console.log("Dear " + i + ", I would love if you kindly accompany us on 24th this month for dinner at 9 PM");
}
