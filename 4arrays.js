//marks can hold 6 valus
let marks = Array(6);
let marksObtained = new Array(90, 90, 100, 99, 500, 600);


let marksObtained2 = [90, 99, 98]
console.log("second index" + marksObtained2[2]);

console.log(marksObtained2.length);

console.log(marksObtained2);
marksObtained2.push(100);
console.log(marksObtained2);


marksObtained2.pop();
console.log(marksObtained2);


marksObtained2.unshift(95);
console.log(marksObtained2);

console.log(marksObtained2.indexOf(90));

console.log(marksObtained2.includes(120));

console.log(marksObtained2);
console.log(marksObtained2.slice(1, 2)); // start inclusive , end excluding

console.log("-------------");
console.log(marksObtained2);

let totalmarks = 0;
for (let i = 0; i < marksObtained2.length; i++) {
    totalmarks = totalmarks + marksObtained2[i];
}

console.log("total marks " + totalmarks);



// reduce filter map
let marksVal = [95, 90, 99, 98];
let totalMarks1 = marksVal.reduce((sum, total) => sum + total, 0);


console.log("total marks " + totalMarks1);


let evenMarks = [];
for (let i = 0; i < marksVal.length; i++) {
    if (marksVal[i] % 2 == 0) {
        evenMarks.push(marksVal[i]);
    }
}

console.log(evenMarks);

let evenMarks2 = [];
evenMarks2 = evenMarks.filter(n=>n%2==0);
console.log(evenMarks2);

// map 
// lets add 1 in each value
console.log(evenMarks.map(n=>n+1));


// add 1 and then sum values
console.log(evenMarks.map(n=>n+1).reduce((sum,n)=>sum+n,0));

//sort string
let fruits = ["banana", "grapes","apple"]
console.log(fruits.sort());
// reverse
console.log(fruits.reverse());

// sort numbers
let numbers = [3, 5, 6, 1];
console.log(numbers.sort());

console.log(numbers.sort((a,b)=>a-b));
// reverse numbers
console.log(numbers.reverse());
console.log(numbers.sort((a,b)=>b-a));