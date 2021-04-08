---
template: code
title: 03 Methods for Merging Arrays
slug: 03-methods-for-merging-arrays
cover: cover.png
draft: false
excerpt: merging arrays
category: JavaScript
type: snippet
tags: ""
---
# 03 - Methods for merging (aka concatenating) arrays

```javascript
const arr1 = ['a', 'b', 'c']
const arr2 = ['1', '2', '3']
```

__Using .concat()__
```javascript
console.info(arr1.concat(arr2))

// ["a","b","c","1","2","3"]
```

__Using spread operators__
```javascript
console.info([...arr1, ...arr2])

// ["a","b","c","1","2","3"]
```

__This works too:__
```javascript
console.info(['a', 'b', 'c', ...arr2])

// ["a","b","c","1","2","3"]
```

__Using Array.of__
```javascript
console.info(Array.of(...arr1, ...arr2))

// ["a","b","c","1","2","3"]
```

__With reduce__
```javascript
console.info(arr2.reduce(function(array,value) {
  array.push(value)
  return array
}, arr1))

// ["a","b","c","1","2","3"]
```