var name = "fasih ur rasheed";
console.log(name.toLowerCase());
console.log(name.toUpperCase());

name = name.trim();
// to nullify inavlid output from user

name = name.toLowerCase();

var n_arr = name.split(" ");
console.log(n_arr);

var full_name_tc;
for (var i = 0; i < n_arr.length; i++) {
  //var title_case = n_arr[i].charAt(0).toUpperCase() + n_arr[i].slice(1); 
  n_arr[i] = n_arr[i].charAt(0).toUpperCase() + n_arr[i].slice(1);
  //console.log(title_Case);
} 

full_name_tc = n_arr.join(" ");
console.log(full_name_tc);
