# INTELI-GASTOS 9000

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

INTELI-GASTOS 9000 recibe como entrada un archivo en donde se tiene detallado los gastos realizados dentro de un grupo de personas.
Puede existir varios gastos hechos por cada salida del grupo.
![alt text](https://ibb.co/7t4MVgj "Ejemplo de archivo para gastos")

Cada miembro no tiene permitido gastar mas de $1000.00; si se da ese caso, INTELI-GASTOS 9000, automaticamente toma la cantidad maxima permitida por defecto en ese valor.
La lectura del archivo de gastos se lo termina cuando lee el caracter cero "0".
