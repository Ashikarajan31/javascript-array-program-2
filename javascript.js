//Finding intersection of two arrays
const array1 = [1, 2, 3, 4];
const array2 = [2, 3, 5, 6];

const intersection = array1.filter(value => array2.includes(value));

console.log(intersection);


// comparing two arrays of equality
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const equalValues = (arr1. length === arr2. length) && arr1. every((value, index) => value === arr2[index]);
if (equalValues) {
console. log("The arrays have equal values.");
} else {
console. log("The arrays do not have equal values.");
}

//Array Merging
const fruits = ['apple', 'orange'];
const vegetable = ['tomato', 'potato'];

const all = [...fruits, ...vegetable];

console.log(all);


//creating the array of arrays
let arrayOfArrays = [
    [1, 2, 3],   
    [4, 5, 6],    
    [7, 8, 9]     
];
console.log(arrayOfArrays);
arrayOfArrays.forEach(innerArray => {
    innerArray.forEach(element => {
        console.log(element);
    });
});


//array deduplication 
var arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
function removeDuplicates(data){
    return data.filter((value,index)=>data.indexOf(value)===index);
}
console.log(removeDuplicates(arr));



