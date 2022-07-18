# IMDB-API for REST

![Nest-JS](https://img.shields.io/badge/-NestJS-333333?style=for-the-badge&logo=nestjs&logoColor=61dbfb)
![Yarn](https://img.shields.io/badge/-Yarn-333333?style=for-the-badge&logo=yarn&logoColor=61dbfb)
![Git](https://img.shields.io/badge/-Git-333333?style=for-the-badge&logo=git&logoColor=61dbfb)
![Typescript](https://img.shields.io/badge/-Typescript-333333?style=for-the-badge&logo=typescript&logoColor=61dbfb)

**This repo contains the code for IMDB-API using OMDB API**

---

# **Tech-stack**

### Prerequisites

- git
- yarn/npm
- node
- nest-cli

### **Main**

---

- **Typescript**
- **Nest-JS**
- **Node**
- **Express**
- **UUID**

---

# **Scripts**

**clone the repo**

```bash
git clone https://github.com/Sam44323/IMDB-Rest.git
```

---

**Install the dependencies**

```bash
yarn
```

**Running the dev-server**

```bash
yarn start:dev
```

## **Available Routes**

---

## **IMDB**

---

--

GET

- /imdb?title=[movie-title] - returns the movie details

  - Require the movie-title
  - Requires a valid api-key for the user in the header

---

PATCH

- /imdb/?title/imdb_id=[movie-title] - updates the description for the movie

  - Require the title/imdb_id of the movie
  - Requires a valid api-key for the user in the header
  - description that needs to be updated with

---

GET

- /imdb/?year[search-year] - returns the movies for the given year with sorted popularity

  - Require the year
  - Requires a valid api-key for the user in the header

---

## **USER**

---

GET

---

- /user/- returns the validation for user-presence
  - Requires a valid api-key for the user in the header

---

POST

- /user/create - creates a new user and returns the api-key

---
