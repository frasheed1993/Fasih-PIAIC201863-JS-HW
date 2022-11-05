/*
No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.
*/

let usernames = ["fasih","shakeel","talha","admin","osama"];


while(usernames.length != 0){
    usernames.pop(); // removing elements from array until it is empty. 
}

// once the array is empty, message alert. 
if(usernames.length == 0){
    console.log("We need to find some users!");
}