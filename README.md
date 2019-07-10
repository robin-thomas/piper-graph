# Piper graph
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)

# Table of Contents
1. [Introduction](#introduction)
2. [Entity](#entity)
   * [Extension](#extension)
   * [ExtensionVersion](#extensionversion)
   * [ExtensionRating](#extensionrating)
3. [Queries](#queries)
   * [IS_EXTENSION_UPDATED](#is_extension_updated)
   * [GET_EXTENSION_BY_HASH](#get_extension_by_hash)
   * [GET_EXTENSIONS](#get_extensions)
   * [GET_EXTENSION_VERSIONS](#get_extension_versions)
   * [GET_EXTENSION_REVIEWS](#get_extension_reviews)
   * [SEARCH_EXTENSIONS](#search_extensions)
   * [GET_EXTENSIONS_BY_HASH](#get_extensions_by_hash)
4. [Installation](#installation)

# Introduction
> While blockchains and storage networks are critical components of the stack, data is rarely stored in a format that can be consumed directly in applications. Applications need to filter, sort, paginate, group, and join data before it can be fetched. Users don’t like looking at spinners and waiting for screens to load. If web3 is going to catch on we need to provide experiences that are as good or better than centralized alternatives.<br/><br/>
\- https://medium.com/graphprotocol/introducing-the-graph-4a281b28203e

Querying from a smart contract is never a good idea. It takes forever, plus the kind of database querying that we are so used to, is next to impossible to replicate on smart contracts. So what to do? Enter [The Graph](https://thegraph.com/), which allows you to create a GraphQL endpoint (with minimal code) by listening to the events emitted from your smart contract. You don't even have to store much data on the blockchain! Plus they even come with their own set of GraphQL resolvers that will solve most of your query problems! Isn't that amazing? 

**Piper Graph** is one such graph built for my dapp: [Piper](https://github.com/robin-thomas/piper.git)

# Entity
Piper Graph supports 3 entities:

### **Extension**
This entity is used to track of all latest updates for an extension.
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

### **ExtensionVersion**
This entity is used to keep track of all version updates of each extension.
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

### **ExtensionRating**
This entity is used to keep track of all ratings/reviews of an extension.
```
type ExtensionReview @entity {
  id: ID!
  hash: String! # string
  rating: BigInt! # uint32
  review: String! # string
  updated: BigInt! # uint32
  reviewer: Bytes! # address
}
```

# Queries:

### **IS_EXTENSION_UPDATED**
```
query Extension($hash: String!) {
  extension(hash: $hash) {
    hash
      updated
    }
  }
}
```

### **GET_EXTENSION_BY_HASH**
```
query Extension($hash: String!) {
  extension(hash: $hash) {
    hash
    developer
    iconURL
    category
    version
    crx
    overview
    updated
    size
    owner
    name
  }
}
```

### **GET_EXTENSIONS**
```
query Extensions($skip: Int!) {
  extensions(orderBy: updated, orderDirection: desc, first: 10, skip: $skip) {
    hash
    developer
    iconURL
    category
    version
    crx
    overview
    updated
    size
    owner
    name
  }
}
```

### **GET_EXTENSION_VERSIONS**
```
query ExtensionVersions($hash: String!) {
  extensionVersions(where: { hash: $hash }) {
    hash
    version
    crx
  }
}
```

### **GET_EXTENSION_REVIEWS**
```
query ExtensionReviews($hash: String!) {
  extensionReviews(where: { hash: $hash }) {
    hash
    rating
    reviews
    reviewer
  }
}
```

### **SEARCH_EXTENSIONS**
```
query SearchExtensions($rating: Int!, $category: String!, $name: String!) {
  extensions(where: { name_starts_with: $name, category: $category }) {
    hash
  }
  extensionReviews(where: { rating_gte: $rating }) {
    hash
  }
}
```

### **GET_EXTENSIONS_BY_HASH**
```
query Extension($hash: [String!]!) {
  extensions(where: { hash_in: $hash }) {
    hash
    developer
    iconURL
    category
    version
    crx
    overview
    updated
    size
    owner
    name
  }
}
```

You can see all the queries being used here: https://github.com/robin-thomas/piper/blob/master/components/utils/graphql/Query.js

# Installation:
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
