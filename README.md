# Piper graph
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)

# Table of Contents
1. [Introduction](#introduction)
2. [Entity](#entity)
3. [Queries](#queries)
4. [Installation](#installation)

#### Introduction
> While blockchains and storage networks are critical components of the stack, data is rarely stored in a format that can be consumed directly in applications. Applications need to filter, sort, paginate, group, and join data before it can be fetched. Users don’t like looking at spinners and waiting for screens to load. If web3 is going to catch on we need to provide experiences that are as good or better than centralized alternatives.
\- [https://medium.com/graphprotocol/introducing-the-graph-4a281b28203e](https://medium.com/graphprotocol/introducing-the-graph-4a281b28203e)

Querying from a smart contract is never a good idea. It takes forever, plus the kind of database querying that we are so used to, is next to impossible to replicate on smart contracts. So what to do? Enter [The Graph](https://thegraph.com/), which allows you to create a GraphQL endpoint (with minimal code) by listening to the events emitted from your smart contract. You don't even have to store much data on the blockchain! Plus they even come with their own set of GraphQL resolvers that will solve most of your query problems! Isn't that amazing? 

**Piper Graph** is one such graph built for my dapp: [Piper](https://github.com/robin-thomas/piper.git)

#### Entity
Piper Graph supports 3 entities:

**Extension** - this entity is used to track of all latest updates for an extension.
```
type Extension @entity {
  id: ID!
  owner: Bytes! # address
  updated: BigInt! # uint32
  size: BigInt! # uint32
  version: String! # string
  category: String! # string
  name: String! # string
  hash: String! # string
  crx: String! # string
  iconURL: String! # string
  developer: String! # string
  overview: String! # string
}
```

**ExtensionVersion** - this entity is used to keep track of all version updates of each extension.
```
type ExtensionVersion @entity {
  id: ID!
  hash: String! # string
  version: String! # string
  crx: String! # string
  size: BigInt! # uint32
  updated: BigInt! # uint32
}
```

**ExtensionRating** - this entity is used to keep track of all ratings/reviews of an extension.
```
type ExtensionReview @entity {
  id: ID!
  hash: String! # string
  rating: BigInt! # uint32
  review: String! # string
  updated: BigInt! # uint32
}
```

#### Installation:
```
$ git clone https://github.com/robin-thomas/piper.git
$ git clone https://github.com/robin-thomas/piper-graph.git
$ cd piper
$ npm run init:graph
$ cd piper
```

Make necessary changes to the `schema.graphql` and `src/mapping.ts`. Then copy over all the files (except the `.git` folder and `.gitignore` file) to `piper-graph` directory.

```
$ cd piper-graph
$ yarn codegen
$ npm run deploy
```

License
----
MIT

**Free Software, Hell Yeah!**
