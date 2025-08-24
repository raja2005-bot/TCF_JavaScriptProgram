const numbers = [1,2,3,4,5,6,7,8,9];
isallowed = numbers.every((value,index,array) =>{
    return value%2;
});
isALlowed = numbers.some((value,index,array) =>{
    return value%2;
})
console.log(isallowed);
console.log(isALlowed);