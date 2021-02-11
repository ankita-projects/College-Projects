let peopleInfo = [
    'ron', '044 123 345', 'lonelyspider@email.com', 
    'hermione', '0123-414-443', 'hermione@email.com', 
    'harry', '(0123) 123 4324', 'ginnyforever@email.com'
];

let emailArray = peopleInfo.filter((el)=>{
    return el.indexOf("@") != -1
})
console.log(emailArray);

let phoneNumArray = peopleInfo.filter((el)=>{
    return el.split(" ").some((el) => !Number.isNaN(parseInt(el))) 
})
console.log(phoneNumArray);
