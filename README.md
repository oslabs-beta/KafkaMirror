# KafkaMirror

Kafka monitoring tool

## Routes

For additional detail on data returned from KafkaJS Admin API, refer to: [KafkaJS Admin](https://kafka.js.org/docs/admin)

### GET

- `/api/schema` **not implemented**
  - Fetches current schema from db
- `/api/topicList`
  - Fetches list of topics from admin api
  - Data returned as an array of strings
- `/api/allTopicMetadata`
  - Fetches metadata on all topics from admin api
  - Data returned as an object with property topics
  - TopicsMetaData Structure:

```js
      {
        topics: Array<TopicMetadata>,
      }
```

- TopicMetaData Structure:

```js
      {
        topic: String,
        partitions: Array<PartitionMetadata>,
      }
```

- PartitionMetaData Structure:

```js
      {
        partitionErrorCode: Number,
        partitionId: Number,
        leader: Number,
        replicas: Array<Number>,
        isr: Array<Number>,
      }
```

- `/api/groupList`
  - Fetches list of consumer groups from admin api
  - Data returned as an object with a property groups

```js
      {
        groups: [
          {
            groupId: String,
            protocolType: String,
          },
        ],
      }
```

- `/api/describeGroups`
  - Fetches metadata on all topics from admin api
  - Data returned as an object with a property groups

```js
      {
        groups: Array<GroupData>,
      }
```

- GroupData Structure

```js
[
  {
    errorCode: Number,
    groupId: String,
    members: [
      {
        clientHost: String,
        clientId: String,
        memberAssignment: Buffer,
        memberId: String,
        memberMetadata: Buffer,
      },
    ],
    protocol: String,
    protocolType: String,
    state: String,
  },
];
```

- `/api/describeCluster`
  - Fetches data on Kafka broker cluster
  - Data returned as an object with a property brokers, controller and ID

```js
     {
      brokers:
      [
        {
          nodeId: Number,
          host: String,
          port: Number
        }
      ],
      controller: Number,
      clusterId: String,
      }
```

### POST

- `/api/schema` **not implemented**
  - posts current schema to db

## Data Formats

### Graph 1

```js
const data = {
  brokers: [],
  clientId: String,
};
```

in kafka mirror access the kafka instance
using admin
get list of producers
send to client
