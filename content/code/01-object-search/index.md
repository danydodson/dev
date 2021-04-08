---
template: code
title: Switch statement vs Object Search
slug: switch-statement-vs-object-search
cover: cover.png
draft: false
date: 0000-00-00
excerpt: object-search
category: js
type: snippet
tags:
- ''
---
# 01 - Switch statement vs Object Search

```js:title=switch.js
function handleSuccess(){}
function handleUnauthorized(){}
function handleNotFound(){}
function handleUnknownError(){}

const status = 200

// Switch statement
switch (status) {
  case 200:
    handleSuccess()
    break
  case 401:
    handleUnauthorized()
    break
  case 404:
    handleNotFound()
    break
  default:
    handleUnknownError()
    break
}
```
___Equivalent using object key search in O(1) time___

```js
const hashmap = {
  200: handleSuccess,
  401: handleUnauthorized,
  404: handleNotFound,
  default: handleUnknownError
}

const hashmapResult = hashmap.hasOwnProperty(status) ? hashmap[status] : hashmap.default

console.info(hashmapResult())
```