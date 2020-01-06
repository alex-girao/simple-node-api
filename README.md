# simple-node-api
Simple [Node](https://nodejs.org/en/) API sample

![](https://img.shields.io/github/stars/alex-girao/simple-node-api) ![](https://img.shields.io/github/forks/alex-girao/simple-node-api) ![](https://img.shields.io/github/tag/alex-girao/simple-node-api) ![](https://img.shields.io/github/release/alex-girao/simple-node-api) ![](https://img.shields.io/github/issues/alex-girao/simple-node-api)

## Quick Start

To start the application is very simple.

  Install dependencies by Node:
```bash
$ npm install
```
  or Install dependencies by Yarn:
```bash
$ yarn
```

  Start the server:

```bash
$ node index.js
```
## Features

  * List Artists
  * List Artist
  * Create Artist
  * Update Artist
  * Remove Artist

## Endpoints
#### List All
GET /artists/index
```bash
http://localhost:3000/artists/
```
#### List By index
GET /artists/:index
```bash
http://localhost:3000/artists/1
```
#### Remove
DELETE /artists/:index
```bash
http://localhost:3000/artists/2
```
#### Create
POST /artists
```bash
http://localhost:3000/artists/
```
Request Body 
```bash
{
	"name": "James Blunt"
}
```
#### Update
PUT /artists/:index
```bash
http://localhost:3000/artists/2
```
Request Body 
```bash
{
	"name": "Adele Laurie Blue Adkins MBE"
}
```

## License

  [MIT](LICENSE)