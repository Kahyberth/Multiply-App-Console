const  args = require('yargs').options({
    'b': {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'La base del número que se está multiplicando',
    }, 'l': {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Despliega una lista con los números multiplicados',
    }, 'h': {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Indica el limite que se quiere multiplicar',
    }
}).check( (argv, options) => {
    if ( isNaN( argv.b ) ) {
        throw 'La base debe de ser un número'
    } else if ( isNaN( argv.h ) ) {
        throw 'El limite debe de ser un número'
    }
    return true;
} ).argv;



module.exports = {
    args,    
}
