//flat method
//task 1
let arr = [10,20,[30,40],50]
let result = arr.flat();
console.log(result);

//task2
let arr1 = [1,2,[3,4],[5,6]];
let result1 = arr1.flat();
console.log(result1);

//task3 
let arr2 = [1,2,[3,4,[5,6]]];
let result2 = arr2.flat(2)
// let result2 = arr2.flat(2);
console.log(result2);

//task4
let arr3 = [10, [20, [30, [40]]]];
// let result3 = arr3.flat(2);
// let result3 = arr3.flat(1);
let result3 = arr.flat(3);
console.log(result3);

// task5
let arr4 = [10,20,[30,40,[50,[60,70],80]]];
let result4 = arr.flat(Infinity);
console.log(result4)

//task6
let names = ["Aartii",["Rahul","Sachin"],"Rohit"];
let result5 = names.flat();
console.log(result5);

//task7
let names1 = ["Aartii",["Rahul","Sachin",["Rohit",["Anvii","Dipaa"]],"Dipikaa"]];
// let result6 = names1.flat(3);
// let result6 = names1.flat(2);
// let result6 = names.flat(1);
let result6 = names.flat();
console.log(result6)

//task8
let names2 = ["Aartii",["Rahul","Anvii",["Dipaa","Siyaa","Gitaa","Arun"]]];
// let result7 =names2.flat(2);
let result7 = names2.flat();
console.log(result7)

//task9
let arr5 = [
    [10,20],
    [30,40],
    [50,60]
];

let result8 = arr5.flat();
console.log(result8);

//task10
let students = [
    [
        { name: "Aarti", age: 20 },
        { name: "Rahul", age: 21 }
    ],
    [
        { name: "Sachin", age: 22 }
    ]
];

let result9 = students.flat();

console.log(result9);

//fill method

//task1
let number = [10,20,30,40,50]
let result10 = number.fill(100)
console.log(result);

//task2
let number1 = [10,20,30,40,50]
let result11 = number1.fill(100,2);
console.log(number1)

//task3
let number2 = [10,20,30,40,50]
let result12 = number2.fill(100,1,4)
console.log(result12)

//task4
let number3 = [10,20,30,40,20]
let result13 = number3.fill(50,0,3);
console.log(result13);

//task5
let number4 = [10,20,30,40,50,60]
let result14 = number4.fill(100,-3);
console.log(result14);

//task6
let names3 = ["Aarti", "Rahul", "Sachin", "Rohit"];
let result15 = names3.fill("student",1,3)
console.log(result13);

//task7
let names4 = [10,20,30,40,50];
let result16 = names4.fill(0)
console.log(result16);

//task8
let array = new Array(5)
let result17 = array.fill(10);
console.log(result17);

//task9
let result18 = new Array(5);
console.log(result18);

let result19 = new Array(6).fill(2);
console.log(result19);

//task10
let result20 = new Array(6).fill(0)
let result20Array = result20.map((_,i)=>{
    return i+1;
});
console.log(result20Array);

//task11
let result21 = new Array(4).fill(0);
let result21Array = result21.map((_,i)=>{
    return i+1;
});
console.log(result21Array);

//task12
let result22 = new Array(2).fill(0);
let result22Array = result22.map((_,i)=>{
    return i+5;
});
console.log(result22Array);

//task13
let result23 = new Array(4).fill(0);
let result23Array = result23.map((_,i)=>{
    return (i+1)*2;
});
console.log(result23Array);

//task14
let result24 = new Array(0).fill(0);
let result24Array = result24.map((_,i)=>{
    return i+1;
});
console.log(result24Array);

//task15
let result25 = new Array(5).fill(0);
let result25Array = result25.map((_,i)=>{
    return 5-i;
});
console.log(result25Array);


