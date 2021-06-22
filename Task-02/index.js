// function removeElementByIndex(str,j){
//     var str1 = str.substring(0,j);
//     var str2 = str.substring(j+1,str.length);
//     return str1.concat(' ',str2);
// }

// Find all unique characters and count them.

var freq = []
function printUniqueChar(str){
    for(var i=0;i<str.length;i++){
     freq[i]=1;
     for(var j=i+1;j<str.length;j++){
         if(str[i]===str[j]){
             freq[i]++;
             str = str.substring(0, j) +' '+ str.substring(j+1)
            }
     }
     if(str[i]!==' '){
         console.log(`${str[i]} - ${freq[i]}`)
     }
    }
}

var str = "hello all";
console.log(`Find all unique characters and count them. `);
console.log('\n');
printUniqueChar(str)

// Find the specific path from an URL.

// const url = new URL('http://next.com/toppers/mern/all')
// console.log(url.pathname.split('/'));
console.log('\n');

function subPath(link,num){
    const url = new URL(link)
    var urlArr = url.pathname.split('/');
    urlArr[0]=url.hostname
    console.log(urlArr[num-1])
}
console.log('Find the specific path from an URL.');
subPath('http://next.com/toppers/mern/all',4);
subPath('http://next.com/toppers/mern/all', 2);
console.log('\n');

// Print this series using one loop only
var n =6 ;
var size = (2*n)-1;
// console.log(size)
var arrSeries = []
// console.log(arrSeries.length)
for(var i=0;i<size;i++){
    if((i+1)<n){
        arrSeries.push(i+1);
    }
    else {
        arrSeries.push(n-((i+1)%n))
    }
}
console.log('Print this series using one loop only');
console.log(arrSeries);
console.log('\n');
// Find titleName from purchase array if found then store it’s quantity and createdAt data in One array.

const titleName = "Nima ইলেকট্রিক স্পাইস গ্রাইন্ডার";

const purchase = [
    {
        supplier: "Nur Alam",
        invoice_nm: "bastob_wEoDM",
        orderProductsInfo: [
            {
                title: "Nima ইলেকট্রিক স্পাইস গ্রাইন্ডার",
                qty: "550",
                p_rate: "250"
            },
            {
                title: "SQ11 Mini Camera",
                qty: "550",
                p_rate: "250"
            }
        ],
        createdAt: "2021-05-02T11:31:36.792+00:00"
    },
    {
        supplier: "Nur",
        invoice_nm: "bastob_wEoDM",
        orderProductsInfo: [
            {
                title: "Silicone Egg Sitter Cushion",
                qty: "550",
                p_rate: "250"
            },
            {
                title: "SQ11 Mini Camera",
                qty: "550",
                p_rate: "250"
            }
        ],
        createdAt: "2021-06-03T11:31:36.792+00:00"
    },
    {
        supplier: "alam",
        invoice_nm: "bastob_wEoDM",
        orderProductsInfo: [
            {
                title: "Nima ইলেকট্রিক স্পাইস গ্রাইন্ডার",
                qty: "100",
                p_rate: "250"
            }
        ],
        createdAt: "2021-06-03T11:31:36.792+00:00"
    }
]
var resultPurs = purchase.map(i=>i.orderProductsInfo.map(j=>{
    if(j.title===titleName){
        return {
                qty:j.qty,
                createdAt:i.createdAt
        }
    }
})).flat()
resultPurs = resultPurs.filter(function(ele){
    return ele!=undefined
})
// var resultPurs = purchase.map(i=>i.orderProductsInfo.filter(j=>j.title===titleName))
console.log(resultPurs);