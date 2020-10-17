# ![alt text](https://cdn4.iconfinder.com/data/icons/Primo_Icons/PNG/128x128/calculator.png "icon") INTELI-GASTOS 9000 

INTELI-GASTOS 9000, es una aplicacion escrita en NodeJS con el enfoque de igualar los gastos realizados dentro de un grupo de personas.

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

## Explicacion codigo fuente

- El script principal es el index.js, dentro de este archivo se realiza la mayor parte de la logica de ese app.
- El script principal index.js, hace uso de otro script que prepara la lectura del archivo "input".
- Dentro del index.js, la funcion que ejecuta todo el calculo se llama "setExpensesData" que recibe el archivo de gastos como parametro.
- Existen varias funciones puntuales que realizan diferentes tareas, como:
  - **setTotalTrips =>** se encarga de sumar 1 llevando la cuenta de cuantos viajes se han realizado.
  - **verifyExpenses =>** se encarga de validar que las cantidades no superen el monto de $1000.00.
  - **getTotal =>** retorna el gasto total por viaje.
  - **getAverage =>** retorna el promedio del gasto por viaje, en funcion del numero de integrantes.
  - **setLength =>** es una funcion que recibe un gasto individual, y dependiendo de la parte entera de dicho gasto, nos indica la longitud que se debe cortar         para tener la precision de los 2 digitos en la parte decimal del gasto individual enviado. 
  
    Por ejemplo, se tiene 1.99, la funcion nos retornaria el valor de 4, ya que estamos indicando que desde el numero "1" de la cantidad, debemos recorrer 4           espacios incluido la primera posicion para tomar la presicion de 2 digitos de la cantidad evaluada.
    
        1 . 9 9  ---> gasto
        1 2 3 4  ---> posicion
        
        
    En otro caso, si tenemos 999.1227..., la funcion nos retornaria 6, indicando los espacios que debemos recorrer incluyendo la primera posicion, dandonos como       resultado el valor de 999.12
    
    
       9 9 9 . 1 2 2 7 ---> gasto
       1 2 3 4 5 6     ---> posicion
       
       
       
       
       

  - **computeBalance =>** se encarga de calcular el dinero total para igualar los gastos por viaje del grupo de personas, recibe el arreglo de gastos por viaje y
    el promedio de dicho viaje.
  - **displayBalance =>** se encarga de desplegar el output del calculo por viaje.
  - **resetExpensesPerTrip =>** se encarga de encerar el arreglo donde se tiene todos los gastos por viaje.

## Realizado por
Andres Alban Carvallo
