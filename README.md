# KafkaMirror

Kafka monitoring tool

## Routes

### GET

`/api/schema` - fetches current schema from db

### POST

`/api/schema` - posts current schema to db

## Data Formats

### Graph 1

```js
const data = {
  brokers: [],
  clientId: String,
};
```
