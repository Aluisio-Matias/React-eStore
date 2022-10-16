![React_eStore](https://user-images.githubusercontent.com/91992866/196016456-d98c8eab-6e0c-4dd0-ab02-08cd80c90051.png)
___
The [React eStore] is a fake E-Commerce store with a fully functional shopping cart, user data stored in a database, authentication and password hashing just like a real application. Retrieving data from the [Fake Store API], a free online REST API that you can use for e-commerce or shopping websites. The payment system is using a free test account from [Stripe]. This is my  second capstone project for Springboard's Software Engineering career track. Here's a link to the project fully deployed project: [React eStore]
___
## Features
- Fully functional shopping cart that stores data in localstorage using Redux.
- All of the products are fetched from a REST API.
- User authentication with JSON Web tokens.
- Bcrypt password hashing.
- React front end design.
- Back End design with Express and NodeJS
- PostgreSQL database management system.
- Online payment system.
- Free images from [Freepik] and [Loren Picsum]

## Tech

React eStore uses multiple programming languages and many open source projects:

- JavaScript, [React], JSX and CSS
- [Redux]
- [Reactstrap] component library for [Bootstrap]
- [React Router]
- [Express]
- [NodeJS]
- [JSON Web Tokens]
- [bcrypt]
- [AXIOS]
- [PostgreSQL]
- [Fake Store API]

___

## Installation
Clone git repo:
```sh
gh repo clone Aluisio-Matias/React-eStore
```
To install the back-end server, first create the database by going into your directory and on the command line enter:
```sh
psql < eStore.sql
```
Inside the backend directoty install the package.json
```sh
npm install
```
To run the server:
```sh
node server.js
```
Or if you have nodemon installed just type:
```sh
nodemon
```
___
To install the front-end, go inside the directory and type in the command line:
```sh
npm install
```
In the project directory, you can run:
```sh
npm start
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser (preferably Google Chrome).

The page will reload when you make changes.\
You may also see any lint errors in the console.




[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job.) 
[React eStore]:<https://react-estore.surge.sh/>
[Fake Store API]:<https://fakestoreapi.com/>
[Stripe]:<https://stripe.com/>
[React]:<https://reactjs.org/>
[Reactstrap]:<https://reactstrap.github.io/>
[Bootstrap]:<https://getbootstrap.com/>
[Express]:<https://expressjs.com/>
[NodeJS]:<https://nodejs.org/>
[JSON Web Tokens]:<https://jwt.io/>
[bcrypt]:<https://www.npmjs.com/package/bcrypt>
[PostgreSQL]:<https://www.postgresql.org/>
[Fontawesome]:<https://fontawesome.com/>
[Redux]:<https://redux.js.org/>
[AXIOS]:<https://www.npmjs.com/package/axios>
[React Router]:<https://reactrouter.com/>
[Freepik]:<https://www.freepik.com/>
[Loren Picsum]:<https://picsum.photos/>
