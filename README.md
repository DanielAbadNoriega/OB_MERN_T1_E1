# Open Bootcamp: Node JS.

## Tema 1: Ejercicio.

[ ] 1. Replicar proyecto completo Node con TS y Express visto en el vídeo

- Subir el enlace al repositorio Github / Gitlab donde lo subas

- Crear un README.md explicando:

  - Las dependencias que has instalado y para qué sirve cada una de ellas.

    > Dependencias instaladas: \
    >
    > 1. **express:** framework de Node.js para aplicaciones API RESTful.
    > 2. **dotenv:** se utiliza para cargar variables de entorno desde un archivo .env en una aplicación Node.js.
    > 3. **nodemon:** se utiliza para actualizar la aplicación de Node.js cuando los archivos del directorio cambien.
    > 4. **typescript:** necesario para poder usar typescript dentro del proyecto.
    > 5. **@types/express:** contiene los tipos para Express.
    > 6. **@types/node:** contiene los tipos para Node.js.

  - Los scripts de NPM que hayas creado y para qué sirven cada uno de ellos.

```json
 "scripts": {
    "start:local": "node index.js", // ejecuta el servidor.
    "start:local": "npx nodemon index.js", // con npx ejecutamos las librerías internas dentro de nuestro proyecto.
    /* Para crear el archivo de configuración de typescript ejecutaremos:
    * npx tsc --init
    */
    "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "concurrently \"npx tsc --watch \"  \"nodemon -q dist/index.js \"",
  },
```

- Las variables de entorno que habrá que crear en el .env para cualquiera que lo descargue.

[ ] 2. Creación de rutas (endpoints del servidor):

- Ruta tipo GET que devuelva una Response 200 con un JSON con la siguiente estructura:

```json
   “data”: {

   “message”: “Goodbye, world”

   }
```

> - EXTRA: Investigar cómo leer parámetros de consulta por la URL
>
>   - Modificar la ruta “hello” para que reciba un parámetro query (?name=”Nombre”) y devuelva una Response 200 con un JSON con la siguiente estructura:
>
> ```json
>     “data”: {
>
>     “message”: “Hola, {nombre pasado por parámetro o “anónimo” en caso de que no exista >  el parámetro}”
>
>     }
> ```

[ ] 3. Instalar Postman y probar las dos rutas del proyecto
