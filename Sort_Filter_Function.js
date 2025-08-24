let products = [ 
    {id:1, title:"Android phone", Cost:5000},
    {id:2, title:"Smart phone", Cost:7000},
    {id:3, title:"Iphone", Cost:70000},
    {id:4, title:"Solar phone", Cost:3500},
    {id:5, title:"Nokia phone", Cost:5000000}];
let final = products.sort((a,b) => a.Cost - b.Cost // ascending Order.
).sort((a,b) =>{
    if(a.title < b.title) return -1;
    if(a.title > b.title) return 1;
    return 1;
}).filter(value => value.Cost <= 8000
).map(value => value.title + " - ₹" + value.Cost
);console.log(final);