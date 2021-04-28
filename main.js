let alphaNum = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine']
let vals = process.argv.slice(2)
var str=""
for (let i = 0; i < vals.length; i++) {
    const num = vals[i]
    for (let c of num) {
        var digit = parseInt(c);
        str = str.concat(alphaNum[digit])
    }
    str = str.concat(",")
}
str = str.substr(0,str.length-1)
console.log(str)