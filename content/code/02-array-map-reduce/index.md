---
template: code
title: 02 Array Map Reduce
slug: 02-array-map-reduce
cover: cover.png
draft: false
excerpt: array-map-reduce
category: JavaScript
type: snippet
tags:
- ''
---
# 02 - .map() & .reduce()

```javascript
const myArray = [1,2,3,4,5,6];
```

*Use .map() for applying a transformation on each elements*

```javascript
const mutipliedArray = myArray.map((element) => element*2);

console.info(mutipliedArray); // [ 2, 4, 6, 8, 10, 12 ]
```

*Use .reduce() for merging together each element of the array*

```javascript
const sumOfArray = myArray.reduce((previous, current) => previous+current);

console.info(sumOfArray); // 21
```

*These methods can be chained together*

```javascript
const sumOfMultipliedArray = myArray.map((el) => el*2).reduce((prev, cur) => prev+cur);

console.info(sumOfMultipliedArray); // 42
```
