# PhanTanMinh
The code challenge

# Problem 4: Three ways to sum to n
Provide 3 unique implementations of the following function in TypeScript.
- Comment on the complexity or efficiency of each function.

**Input**: `n` - any integer
*Assuming this input will always produce a result lesser than `Number.MAX_SAFE_INTEGER`*.

**Output**: `return` - summation to `n`, i.e. `sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15`.

**Advance** This feature does not yet describe the case `n < 1`, so assume that:
- returns -1 for n < 0
- return 0 for n = 0

## See resolved issue [here](./problem4/problem4.ts)
---

# Problem 5: A Crude Server
Develop a backend server with ExpressJS. Build a set of CRUD interface that allow a user to interact with the service using TypeScript

1. `POST /resources` Create a resource.
2. `GET /resources` List resources with basic filters.
3. `GET /resources/{resource_id}` Get details of a resource.
4. `PUT /resources/{resource_id}` Update resource details.
5. `DELETE /resources/{resource_id}` Delete a resource.

## Dependencies
- <b>Node.js</b> Ensure that you have installed Node.js and npm on your machine. You can download and install Node.js from the official website: https://nodejs.org.
- <b>npm</b>
- <b>Docker and Docker Compose</b>: Our project uses Docker and Docker Compose to run PostgreSQL easily and consistently across different environments. You need to install Docker and Docker Compose before running the project. Make sure Docker is configured and running on your machine. You can learn how to install Docker and Docker Compose from the official Docker website: https://docs.docker.com/get-docker/.
- <b>Colima</b>: We use Colima to manage Docker containers easily and flexibly. You can install Colima from their official website: https://colima.sh/.

## Package
- <b>Express and TypeScript</b>: We use ExpressJS and TypeScript to build the backend server. ExpressJS is a web framework for Node.js, while TypeScript is a statically typed superset of JavaScript. You can install Express and TypeScript via npm:
```bash
npm install express typescript @types/node @types/express
```

- <b>PostgreSQL</b>: PostgreSQL is a powerful open-source relational database management system. We use Docker and Docker Compose to run a simple PostgreSQL container for data storage. Configuration related to PostgreSQL is defined in the [docker-compose.yml](./docker-compose.yml) file.

## How to run on local
- colima start
- docker-compose up -d
- npm run start
---
