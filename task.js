// let num = 10

//     while ((num+7) < 100) {
//         num += 7;
//     }

// console.log(num);

// let n = 4
// let i = 0
// while (i < n) {
//     console.log("This is cycle");
//     i++;
// }


// let a = 100;
// while (a < 999) {
//     console.log(a);
//     a += 10;
// }


// Homework:

//  task-4

let a = 11;
let b = 0;

while (a < 100) {
    b += a;
    a += 2;    
}

console.log(b);




// task-5

let num = +prompt("Bir ədəd daxil edin:");
let sum = 0;
let i = 100;

while (i <= 999) {
    if (i % num === 0) {
        sum += i;
    }
    i++;
}

console.log(sum);