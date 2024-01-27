let valores = [8,7,6,9,5,4,1,6]
// for ( let pos = 0; pos < valores.length;pos++){
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }
valores.sort()
for (let pos in valores) {
    console.log(` A posição ${pos} tem o valor ${valores[pos]}`)
}
let pos =valores.indexOf(8)
console.log(`O valor está na posição ${pos}`)