// Arrow Funtion

//old style
function fullname(fname, lname) { 
    return fname + ' ' + lname; 
}
fullname = fullname("Somboon", "Nontaganok");
// console.log(fullname);

//new style
fullname2 = (fname, lname) => {
    return fname + ' ' + lname;
}
setAge = (age) => "อายุ = " + age + " ปี"

console.log(fullname2("Somboon", "Nontaganok"));
console.log(setAge(58));