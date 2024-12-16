const exercises = document.querySelectorAll('.page > div');
let a = [7, 23, 5, 64, 1, 35, 6, 3, 5, 2, -3, 3, 0, -12, 5];
let s = 'Web Masters';

// exercise 1
// Problem: Write a function that takes an array of numbers and returns new containing only the even numbers.

// method-1

function filterToEven(a){
    let temp = [];
    for(let i=0; i<a.length; i++){
        if(!(a[i] % 2))
            temp.push(a[i]);
    }
    return temp;
}

console.log('ex1');
console.log(filterToEven(a));

// method-2
const arrayToEven = a=>a.filter((elem)=> !(elem % 2));

console.log(arrayToEven(a));
console.log('-------------------------------');


exercises[0].innerHTML += `<p>the array : [${a}]</p>
<p>after filtering : [${filterToEven(a)}]</p>`


//---------------------------------------------------------------------------------------------------------------------

// exercise 2
//Problem: Write a function that takes an array of numbers and returns the largest number in array.

function findMax(a){
    let max = a[0];
    for(let i=0; i<a.length-1; i++)
        max = (max < a[i+1])? a[i+1] : max;
    
    return max;
}

console.log('ex2');
console.log( findMax(a));
console.log('-------------------------------');

exercises[1].innerHTML += `<p>the array : [${a}]</p>
<p>maximum element : ${findMax(a)}</p>`

//---------------------------------------------------------------------------------------------------------------------

// exercise 3
//Problem: Write a function that takes an array of numbers and returns the largest number in array.

function stringReverse(s){
    let temp = '';
    s.split('').forEach(elem => temp = elem + temp );
    return temp;
}

console.log('ex3');
console.log( stringReverse(s));
console.log('-------------------------------');

exercises[2].innerHTML += `<p>the string : ${s}</p>
<p>reversed string : ${stringReverse(s)}</p>`

//exercise 4
// Problem: Write a function that takes an array of numbers and returns new without duplicate numbers.

// method-1
function removeDuplicates(a){
    let temp = [];
    
    for(let i=0; i<a.length; i++){
        let found=false;
        for(let j=0; j<temp.length; j++){
            if(a[i] == temp[j]){
                found = true;
                break;
            }
        }
        if(!found)
            temp.push(a[i]);
    }
    
    return temp;
}

console.log('ex4');
console.log(removeDuplicates(a));

// method-2
const noDuplicates = a=>a.filter((elem, i)=>!a.slice(i+1).includes(elem));
console.log(noDuplicates(a));
console.log('-------------------------------');

exercises[3].innerHTML += `<p>the array : [${a}]</p>
<p>no duplicates : [${removeDuplicates(a)}]</p>`