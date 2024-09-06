let frutas = ['laranja','melancia','morango']

// let vegetal = ['batata doce','Cenoura','Milho' ]
// let feira = frutas.concat(vegetais)


let frutas_ =['laranja','Melancia','Morango','Uva','Caju']
let fruta_sel = frutas_.slice(1,3);

console.log(fruta_sel)

frutas_.splice(2,1,'Manga')

console.log(frutas)

let existe = frutas.includes('Morango');

console.log(existe);