const { args } = require('./config/yargs');
const { tabla } = require('./helpers/multiplicar');
const color = require('colors');
console.clear();

  tabla ( args.b, args.l, args.h).then(() => {
      console.log( `El archivo se ha creado correctamente`.rainbow );
  }).catch((err) => {
      console.log( err );
  });
