var guests = ["Talha", "Shakeel", "A.basit","Arsalan"];
var del_guests = guests.splice(1, 2, "Ashhar", "Zabrain");
for (var i of guests) {
    console.log("Dear " + i + ", I would love if you kindly accompany us on 24th this month for dinner at 9 PM")
}