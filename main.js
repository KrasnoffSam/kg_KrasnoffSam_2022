let alphaNum = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine']
let vals = process.argv.slice(2)
var str=""
for (let i = 0; i < vals.length; i++) {
    let num = vals[i]
    for (let j = 0; j < num.length; j++) {
        var digit = parseInt(num[j]);
        str = str.concat(alphaNum[digit])
    }
    str = str.concat(",")
}
str = str.substr(0,str.length-1)
console.log(str)