# Info
## You need to install the dependencies for it to work.
```
npm install
```

```
Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
      -b, --base     La base del número que se está multiplicando  [number] [required]
      -l, --listar   Despliega una lista con los números multiplicados [boolean] [default: false]
                                                      
      -h, --hasta    Indica el limite que se quiere multiplicar [number] [default: 10]
                                                          
```

## Examples of use

```
node app -b=5 -l -h=20
node app -b=3 -h=20
node app -b=4 -l
node app -b
```