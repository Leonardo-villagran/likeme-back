# mi_repertorio

>"Tarea 3: Backend de likeme para el módulo: Backend con Node y Express (G27)"

## Características:

* El sistema corresponde a un programa que se ejecuta sobre Node js con Express en el puerto 3000, pero se pueden utilizar variables de entorno para definir el puerto.

* El programa contiene un archivo index.js en la carpeta src, el cual llama a distintas funciones para mostrar, agregar, actualizar y borrar posts de la base de datos a través de procesos de backend en node.

* Se utiliza base de datos llamada likeme, que posee una tabla llamada posts que almacena los datos de los post agregados.

* Se utiliza una carpeta llamada controllers para almacenar las funciones que contienen los callbacks.

* Luego de descargar, instalar las dependencias y módulos necesarios a través de los comandos:
```
npm install
```
* Se ejecuta el programa a través de los comandos:
```
npm run start
```
* Para ejecutar el programa en modo de producción (sin debugging) se ejecutan los comandos:
```
npm run dev
```

## Notas con respecto a la instalación del front proporcionado por Desafío Latam:

* No se pudo instalar las dependencias de forma directa por lo que se tuvo que utilizar los comandos:
```
npm install --legacy-peer-deps
```
* Luego de realizar la instalación de las dependencias, fue necesario realizar un cambio en el package donde se reemplazó lo siguiente:

Cambiar **"start": "react-scripts start"** por **"start": "react-scripts --openssl-legacy-provider start"**
Cambiar **"build": "react-scripts build"** por **"build": "react-scripts --openssl-legacy-provider build"**
