# Ejercicio 4.1

1. Comandos para instalar las dependencias 

```
  npm init
  npm i mongoose express dot env cors
  npm i morgan nodemon -D               <-- dependencia de desarrollo 
```

2. Creación de las carpetas .env y .gitignore

3. Modificación del archivo package.json

```
  ...
  "script": "nodemon index.js",
  ...
```

4. Implementación de morgan en su formato *tiny*

5. Creación del archivo test.http para realizar las pruebas de la api con el REST API CLIENT de VSCode.

```
|── index.js
├── package.json
├── package-lock.json
├── README.md
└── test.http
```