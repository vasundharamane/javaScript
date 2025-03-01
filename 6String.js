let day = "Monday";

//get lenght
console.log(day.length);

// get substring - start inclusing , end excluding
console.log(day.substring(1,
    4));
console.log(day.slice(1, 4));

// get array of Substring
let substr = day.slice(1, 4);
console.log(substr[0]);


// split string
// Mon       day
let splitDay = day.split("n");
console.log(splitDay[0]);
console.log(splitDay[1]);

//convert String to integer
let firstDate = '23';
let lastDate = '27';
console.log(lastDate - firstDate);

let diff = parseInt(lastDate) - parseInt(firstDate);
console.log(diff)

// convert number to stirng
console.log(diff.toString());

//concatenate two string
let str1 = "today";
let str2 = "is fun day";
console.log(str1 + " " + str2);


//indexof , know where char is present

console.log(str2.indexOf("fun"));

//count number of string repeated "day"
let string = "today is sunday";
let index = string.indexOf("day");
let count=0;
while (index != -1) {
    count = count + 1;
    index = string.indexOf("day",index+1);
}

console.log("count " + count);