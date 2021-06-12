---
title: test-17
slug: test-17
date: 2021-01-01T00:00:00.000Z
lastmod: 2021-01-01T00:00:00.000Z
cover: snap.png
excerpt: test-17
category: code
draft: false
template: post
tags:
  - es6
---

# [array].fill

<Underline />


<Collapsable title='Post Guide' titleSize='1rem'>

<Info>

For creating post, please refer to this guide!

['snap.png']('snap.png')

</Info>

</Collapsable>

<Collapsable title='Resume' titleSize='1rem'>

<Resume />

</Collapsable>

<Collapsable title='Headings' titleSize='1rem'>

# H1 Heading
## H2 Heading
### H3 Heading

</Collapsable>

<Collapsable title='Texts' titleSize='1rem'>

Here's some basic text

Here's some _italics_

Here's some **bold** text

Here's some **_bold italics_** text

Here's some ~~strikethrough~~ text

</Collapsable>

<Collapsable title='Link' titleSize='1rem'>

[Click here](https://google.com)

</Collapsable>

<Collapsable title='Image' titleSize='1rem'>

![](../images/somePhoto.jpeg)

</Collapsable>

<Collapsable title='Any HTML' titleSize='1rem'>

<div style="color: pink"><span>Hello</span></div>

</Collapsable>

<Collapsable title='Lists - Numbered' titleSize='1rem'>

1. First
2. Second

</Collapsable>

<Collapsable title='Lists - Unordered' titleSize='1rem'>

- List
- List

</Collapsable>

<Collapsable title='Blockquote' titleSize='1rem'>

> Here is example of blockquote
>
> Est est ipsum tempor eu occaecat. Duis commodo laboris voluptate reprehenderit 

</Collapsable>

<Collapsable title='Nested Blockquote' titleSize='1rem'>

> > Cupidatat aute ea incididunt dolor mollit ipsum. Eu

> > > Cupidatat aute ea incididunt dolor mollit ipsum. 

</Collapsable>

<Collapsable title='Inline Code' titleSize='1rem'>

Here is `in-line code block` example

</Collapsable>

<Collapsable title='React Live Editor' titleSize='1rem'>

```jsx react-live

const handleClick = () => { 
  alert('Hello!') 
}

render(
  <button onClick={handleClick}>Click</button>
)

```

```js

const name = 'Ellis'

console.log(name)

```

</Collapsable>

<Collapsable title='Code Block (Highlight)' titleSize='1rem'>

```jsx

// highlight-start
import React, { Component } from 'react'

class Profile extends Component {
  // highlight-end

  render() {
    return <div></div> // highlight-line
  }
}

export default Profile

```

</Collapsable>

<Collapsable title='Code Block with Title' titleSize='1rem'>

```js:title=example.js

const number 1234;

```

</Collapsable>

<Collapsable title='Code Block with Title & React-Live' titleSize='1rem'>

```js:title=example.js react-live

const handleClick = () => { 
  alert('Hello!') 
}

render(
  <button onClick={handleClick}>Click</button>
)

```

</Collapsable>

<Collapsable title='Code Diff' titleSize='1rem'>

```diff
+ {
+ import React, { Component } from "react"
+
+ class SomeClass extends Component {
-  render() {
-    return (<div></div>)
-   }
+ }
+ export default SomeClass
```

</Collapsable>
