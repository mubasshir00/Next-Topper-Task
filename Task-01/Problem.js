// 1 Find all different values from two arrays. 

var arr1 = [10, 5, 6, 1, 8]
var arr2 = [6, 9, 1, 10, 12];
var newArr1 = arr1.filter((i) => arr2.indexOf(i) === -1)
var newArr2 = arr2.filter((i) => arr1.indexOf(i) === -1)
console.log(newArr1.concat(newArr2));

// 2 Find all common values from two arrays.

var newCommonArr = arr1.filter((i) => arr2.indexOf(i) !== -1)
console.log(newCommonArr);

// Find all common values from two arrays.


let arr = [
    {
        color: 'brown',
        permission: true,
        age: 27,
        numbers: [2, 7, 3, 9]
    },
    {
        color: 'brown',
        permission: true,
        age: 20
    },
    {
        color: 'brown',
        permission: true,
        age: 21
    },
    {
        color: 'blue',
        permission: true,
        age: 16,
        numbers: [10, 7, 13, 9]
    },
    {
        color: 'brown',
        permission: true,
        age: 15,
        numbers: [21, 7, 3, 18]
    },
]
// console.log(arr[3].numbers);
var newArrayofNumbers = arr.filter((i) => i.color === 'brown')

var totalAge = newArrayofNumbers.reduce(function (sum, item) {
    return sum = sum + item.age
}, 0
)
// console.log(newArrayofNumbers)
console.log(`Total : ${totalAge}`);
console.log(`Average : ${totalAge / newArrayofNumbers.length}`);


// Print all unique numbers in one array from numbers property.

var arrayforUnqueNumbers = arr.filter((e) =>
    e.numbers)
var tempArr = arrayforUnqueNumbers.map(item => item.numbers).flat()
var uniqueArray = tempArr.filter((value, index, item) =>
    item.indexOf(value) === index
)
console.log(uniqueArray);


// Change the permission to false whose color is blue.

arr.map((item) =>
    item.color === "blue" ? item.permission = "false" : null
);
console.log(arr)

