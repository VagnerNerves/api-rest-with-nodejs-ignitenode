<p align="center">
  <!-- <img width="200px" alt="Node project for credit and debit transactions." title="Node project for credit and debit transactions. Logo" src="logo.svg" /> -->

  <h1 align="center">Node Project for credit and debit transactions.</h1>

  <!-- <p align="center">
    🔗 <a href="https://URLThisProject.com">https://URLThisProject.com</a> 🔗
  </p> -->

 Developed the project in Node.js with Fastify and Knex, where routes for transactions and sessions were created.

 Rules:

 - Functional Requirements:
    - [x] The user must be able to create a new transaction.
    - [x] The user must be able to get an account summary.
    - [x] The user must be able to list all transactions that have occurred.
    - [x] The user must be able to view a single transaction.

  - Business Rules:
    - [x] The transaction can be of type credit, which will add to the total value, or debit, which will subtract.
    - [x] It should be possible to identify the user between requests.
    - [x] The user can only view transactions that they have created.


</p>

## 🧭 Table of contents

- [🧭 Table of contents](#-table-of-contents)
- [👏 Learning and more Implementations](#-learning-and-more-implementations)
- [💡 Technologies Used](#-technologies-used)
- [📂 Folder Structure](#-folder-structure)
- [🚀 Running the Project](#-running-the-project)
  - [Back-end](#back-end)
- [📝 Routes](#-routes)
- [🌎 License](#-license)
- [✒ Author](#-author)

<!-- ## 🎥 Implementation Video

In the GitHub edit, drag the video that it already puts on github itself. -->

<!-- ## 🎨 Layout

Layout developed by [Name](https://www.instagram.com/urlName/)

[![Layout in Figma](https://github.com/VagnerNerves/default-readme/blob/main/assets/layout-in-figma.svg)](https://www.figma.com/files) -->

## 👏 Learning and more Implementations

- Learned to use Fastify and Knex.
- Learned to create migrations with Knex.
- Learned to create tests with Vitest.
- Learned to build the project and publish it.


## 💡 Technologies Used

- [x] [Nodejs](https://nodejs.org/)
- [x] [Fastify](https://fastify.dev/)
- [x] [Knex](https://knexjs.org/)
- [x] [TypeScript](https://www.typescriptlang.org/)
- [x] [Vitest](https://vitest.dev/)
- [x] [Zod](https://zod.dev/)
- [x] [tsup](https://github.com/egoist/tsup)

## 📂 Folder Structure

```plainText
Back-end
.
├── db                          # Contains Migrations Knex and DB.
├── src                         # Source files
│   ├── @types                  # Contains all global definitions of types and interfaces
│   ├── env                     # Contains configuration use env
│   ├── middlewares
│   ├── routes
│   ├── server                  # Aplication entry
.
.
├── test                        # Contains Test the route
.
.
└── README.md
```

## 🚀 Running the Project

### Back-end

Clone the project

```bash
  git clone https://github.com/VagnerNerves/api-rest-with-nodejs-ignitenode.git
```

Enter the project directory

```bash
  cd api-rest-with-nodejs-ignitenode
```

Install with dependencies

```bash
  npm install
```

Create the .env and .env.test files according to the examples in the folder.

Run the Knex migrations to create the database.

```bash
  npm run knex migrate:latest
```

Start the server

```bash
  npm run dev
```

<!-- ### Front-end Web

Clone the project

```bash
  git clone https://link-para-o-projeto
```

Enter the project directory

```bash
  cd my-project
```

Install with dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

### Mobile

Clone the project

```bash
  git clone https://link-para-o-projeto
```

Enter the project directory

```bash
  cd my-project
```

Install with dependencies

```bash
  npm install
```

Start the server

```bash
  npx expo start
```

- IOS:
```bash
  npx pod-install && npx react-native run-ios
```

- Android:
```bash
  npx react-native run-android
``` -->

## 📝 Routes

<!-- [![Run in Postman](https://github.com/VagnerNerves/default-readme/blob/main/assets/run-in-postman.svg)](https://app.getpostman.com/run-collection/link) -->
[![Run in Insomnia](https://github.com/VagnerNerves/default-readme/blob/main/assets/run-in-insomnia.svg)](https://insomnia.rest/run?label=API%20Rest%20With%20Nodejs%20IgniteNode&uri=https%3A%2F%2Fgithub.com%2FVagnerNerves%2Fapi-rest-with-nodejs-ignitenode%2Fblob%2Fmain%2F.github%2FProjectAPIRestWithNodejs_Insomnia_2023-09-18.json)

## 🌎 License

This project is under the MIT license. See the [LICENSE](https://choosealicense.com/licenses/mit/) file for more details.

## ✒ Author

<p align="center">
  <img width="200px" alt="Author Vagner Nerves" title="Author Vagner Nerves" src="https://github.com/VagnerNerves/default-readme/blob/main/assets/VagnerNerves.svg" />

  <h3 align="center">Vagner Nerves</h3>

  <p align="center">
    Made with love and hate 😅, get in touch!
  </p>
</p>

<div align="center">

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-1f6feb?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/vagnernervessantos/)](https://www.linkedin.com/in/vagnernervessantos/)
[![Gmail Badge](https://img.shields.io/badge/-vagnernervessantos@gmail.com-1f6feb?style=flat-square&logo=Gmail&logoColor=white&link=mailto:vagnernervessantos@gmail.com)](mailto:vagnernervessantos@gmail.com)
[![GitHub Badge](https://img.shields.io/badge/-GitHub-1f6feb?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/VagnerNerves)](https://github.com/VagnerNerves)

</div>



