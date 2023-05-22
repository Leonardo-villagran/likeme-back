# Likeme

>Tarea 3: Backend de likeme para el módulo: Backend con Node y Express (G27)

## Características:

- El sistema corresponde a un programa que se ejecuta sobre Node.js con Express en el puerto 3000, pero se pueden utilizar variables de entorno para definir el puerto.

- Se genera un archivo llamado .env en el cual se definen variables de entorno para conectar con la base de datos.
  ```
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=postgres
   DB_PASSWORD=postgres
   DB_NAME=likeme
   ```
- El programa contiene un archivo `index.js` en la carpeta `src`, el cual llama a distintas funciones para mostrar, agregar, actualizar y borrar posts de la base de datos a través de procesos de backend en Node.

- Se utiliza una base de datos llamada `likeme`, que posee una tabla llamada `posts` que almacena los datos de los posts agregados.

- Existe una carpeta llamada `controllers` que almacena las funciones que contienen los `callbacks`.

## Instrucciones de instalación y ejecución:

1. Descarga el repositorio.
2. Abre una terminal en el directorio raíz del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias y módulos necesarios:
   ```
   npm install
   ```
4. Para ejecutar el programa en modo de desarrollo, utiliza el siguiente comando:
   ```
   npm run start
   ```
5. Si deseas ejecutar el programa en modo de producción (sin debugging), utiliza el siguiente comando:
   ```
   npm run dev
   ```

## Notas sobre la instalación del front proporcionado por Desafío Latam:

- Si has tenido problemas al instalar las dependencias de forma directa, prueba utilizando el siguiente comando:
   ```
   npm install --legacy-peer-deps
   ```
- Después de realizar la instalación de las dependencias, es necesario realizar un cambio en el archivo `package.json`. Reemplaza las siguientes líneas:

   Cambia `"start": "react-scripts start"` por `"start": "react-scripts --openssl-legacy-provider start"`

   Cambia `"build": "react-scripts build"` por `"build": "react-scripts --openssl-legacy-provider build"`

Con estos pasos, podrás instalar y ejecutar el proyecto de manera correcta.