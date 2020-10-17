# ![alt text](https://cdn4.iconfinder.com/data/icons/Primo_Icons/PNG/128x128/calculator.png "icon") INTELI-GASTOS 9000 

INTELI-GASTOS 9000, es una aplicacion escrita en NodeJS con el enfoque de igualar los gastos realizados entre un grupo de personas.

##  Requisitos

Asegurate de tener instalado en tu computador [NodeJS](https://nodejs.org/en/)

##  Instalacion

```javascript
npm install
```
##  Uso

Para ejecutar la aplicacion, usa:
```javascript
npm start
```

Para correr las pruebas, usa:
```javascript
npm test
```

## Descripcion

- INTELI-GASTOS 9000 recibe como entrada un archivo en donde se tiene detallado los gastos realizados dentro de un grupo de personas.
- Puede existir varios gastos hechos por cada salida del grupo.
- El formato del archivo esta dado por un numero entero positivo que representa el numero de integrantes de personas, seguido por los gastos especificados por el signo "$" como se muestra en la imagen de abajo:

![alt text](https://i.ibb.co/qY5q907/Selection-034.png "Ejemplo de archivo para gastos")


- Cada miembro no tiene permitido gastar mas de $1000.00; si se da ese caso, INTELI-GASTOS 9000, automaticamente toma la cantidad maxima permitida por defecto en ese valor.
- La lectura del archivo de gastos se lo termina cuando lee el caracter cero "0".
