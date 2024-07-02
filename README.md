## Database: articles
Note; to build database -> mongorestore command
Build Backend and Frontend in separate hosts to make it work togheter
-My name is Matias, mucho gusto! 👨🏽‍💻:arg

# BACKEND
Scripts:
1. Run "npm run start" to start the environment.
2. Run "npm run dev" in development to start the environment at that instance.

npm run test:dataJSON -> throw us information about the importing from data.json file.

**Big Scope Architecture.**
The architecture model is scoped in the following distribution

backend/
packages,
.env,
.gitignore
index (the main application)
config (.env configurations internals)

the following scope are the componentes:
/articles/
/functions/
/schemes/
/utils/

**/schemes/**
articles.dynamical.schema 
articles.structured.schema

articles.dynamical.schema: a dynamical option to develop the database, thought to secure workloads where is important to fully match the objects of data.json without knowing the content, or to large amounts of data and keys.

This option has vulnerabilities because of the lack of control in what data we receive, but could be worked in a next optimization to be validated.

articles.structured.schema: we specify the schema parameters knowing previously what information we recieve from the data.json. An optimization could be transform the keys into variable keys. NOTE: the data types are not completely matched, in case of need you could transform the data types of this fields ('url', 'urlToImage', 'publishedAt') into (Url, Url, Date)

**/utils/**
provion
/db/db.connect.conf.js

provision: we shortly manage our environment if it is secure to apply (or not) the provision of the schemes.

/db/db.connect.conf.js: we manage the connection to the database.

**/functions/**
manageDataFunction

manageDataFunction: we have a little function to import and export the data from data.json; wheter if it is in a secure environment or not. Is a global function, that print in console information about its executing.

**/articles/**
we have the MVC to the endpoint "/articles"

In development, the app will run on port 9000, try the endpoint
**"localhost:9000/api/articles"**


# FRONTEND

To build the frontend -> npm run build;
To start the frontend in a nodemon server (development)-> npm run dev;
To start the frontend -> npm run start;

We use Redux and Chakra UI as providers in the main.js
We use nodemon to build a permanent server on development
We use axios to manage API calls

The Application shows information from the **"http://localhost:9000/api/articles"** end-point ánd consume its data into a principal component called ArticleComponent, styled as a card with Chakra UI. It recieves a paramater signed "articles" that could be dynamical if its needed, it shows the item information on a view in App.jsx

We manage our redux reducers into a store to globally use certains functions and objects.
Developed in React.js and Node.js, with MongoDB.

# Documentation:
**Chakra UI:** https://v2.chakra-ui.com/getting-started
**Redux-Toolkit:**  https://redux-toolkit.js.org/
**MongoDB:** https://www.mongodb.com/docs/
**Mongoose:** https://mongoosejs.com/docs/
**Node.js:** https://nodejs.org/docs/latest/api/
**React.js:** https://legacy.reactjs.org/docs/getting-started.html 
**Express:** https://expressjs.com/

La segunda parte de la prueba tiene como objetivo evaluar tus capacidades y habilidades en React.

## Descripción de la tarea
La siguiente tarea consiste en crear una aplicación en React que consuma el endpoint `/articles` proporcionado por la API de NodeJS que creaste en el tarea anterior, para lograr eso tienes que: 

1.  **Consumir endpoint '/articles':** Desarrollar una aplicación en React que se consuma al endpoint `/articles` de la API de NodeJS.
2.  **Recuperar y mostrar los datos del endpoint:** Implementar interfaz de usuarios que muestre los datos.

## Requisitos

Asegúrate de cumplir con los siguientes requisitos al desarrollar la aplicación en React. 

1. La aplicación debe ser capaz de realizar solicitudes HTTP al endpoint `/articles` de la API de NodeJS.
2. Utilizar el método adecuado en React para realizar llamadas a la API.
4. Se debe de crear una vista donde se debe listar los datos obtenidos, puedes ver el [diseño acá](https://www.figma.com/design/QsD5eTs7WIiM9XiMsOcD3C/Design-Flutter---React--Node?node-id=0-1&t=ADIVGG0xYt97fBFt-1) .
5. Al darle click a un item de la lista se tiene que redireccionar al Url del campo llamado `url`. 

## Criterios de evaluación

Tu entrega será evaluada en base a los siguientes criterios:

1.  **Funcionalidad:** ¿La aplicación de React se conecta con éxito al endpoint `/articles` de la API de NodeJS y muestra los datos obtenidos?
2.  **Interfaz de Usuario:** ¿La interfaz de usuario es amigable y presenta los datos de manera clara y legible según el diseño?
3.  **Manejo de Datos:** ¿La aplicación en React maneja los datos de manera efectiva, sin errores ni inconsistencias?
4.  **Calidad de Código y Estructura:** ¿El código está organizado, sigue las mejores prácticas de React y es fácil de entender?
5.  **Manejo de Errores:** ¿La aplicación maneja adecuadamente los errores en caso de problemas de conectividad o de datos faltantes?
6.  **Bono:** Se considerarán funcionalidades adicionales o mejoras más allá de los requisitos básicos.

## Entrega

Una vez que hayas completado las tareas, sube tu codigo a un repositorio de GitHub con su documentación para su debida evaluación.

## Notas importantes

1. La carga de datos en la colección puede ser realizada de manera automatizada o manualmente utilizando herramientas gráficas y/o comandos.
2. Puedes utilizar librerias según tus criterios. 
3. Se tiene que completar todas tareas asignadas para la realizar la evaluación.

