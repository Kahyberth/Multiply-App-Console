const fs = require("fs");
const color = require('colors');
const tabla = async ( base = 1, l, h ) => {
  try {
    let salida = '';
    let consola = '';
    for (let i = 1; i <= h; i++) {
      salida += `${base} x ${i} = ${(base * i)} \n`;
      consola += `${base.toString().green} ${'x'.red} ${i.toString().green} = ${(base * i).toString().italic.cyan} \n`;
    }
    
    fs.writeFileSync(`./output/tabla-${base}.txt`, salida);
    if ( l ) {
      console.log("==============".green);
      console.log(`Tabla del: ${base.toString().green}`.cyan);
      console.log("==============".green);
      console.log( consola );
    }
    return salida;
  } catch (err) {
    throw err;
  }

};

module.exports = {
  tabla,
};
