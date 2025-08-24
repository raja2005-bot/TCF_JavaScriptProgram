const shop = [
    {id:1, item:"bread", cost:10},
    {id:2, item:"egg", cost:5},
    {id:3, item:"Milk", cost:25}
];
let final = function(previousvalue, currentvalue)
{
    console.log(previousvalue);
    return (previousvalue+currentvalue.cost)
}

let TC = shop.reduce(final,10);
console.log(TC);