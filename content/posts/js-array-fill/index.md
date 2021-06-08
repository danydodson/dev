---
title: '[array].fill'
slug: js-array-fill
date: 2021-01-01
lastmod: 2021-01-01
cover: snap.png
draft: false
excerpt: Sample using js [array].fill method
category: code
type: js
tags:
  - Posts
---

# [array].fill


For creating post, please refer to this guide!

[https://gatsby-blog-mdx.now.sh/2020/05/3-create-post](https://gatsby-blog-mdx.now.sh/2020/05/3-create-post)


<!-- Headings -->

# H1 Heading

## H2 Heading

### H3 Heading

<!-- Texts -->

Here's some basic text

Here's some _italics_

Here's some **bold** text

Here's some **_bold italics_** text

Here's some ~~strikethrough~~ text

<!-- Link -->

[Click here](https://google.com)

<!-- Image -->

![](../images/somePhoto.jpeg)

<!-- Any HTML -->
<div style="color: pink"><span>Hello</span></div>

<!-- Lists - numbered -->

1. First
2. Second

<!-- Lists - unordered -->

- List
- List

<!-- blockquote -->

> Here is example of blockquote
>
> Est est ipsum tempor eu occaecat. Duis commodo laboris voluptate reprehenderit 

<!-- Nested blockquote -->

> > Cupidatat aute ea incididunt dolor mollit ipsum. Eu

> > > Cupidatat aute ea incididunt dolor mollit ipsum. 

<!-- Inline code -->

Here is `in-line code block` example

<!-- React Live Editor -->
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

<!-- Code block (highlight) -->

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

<!-- Code block with title -->

```js:title=example.js

const number 1234;

```

<!-- Code block with title -->

```js:title=example.js react-live

const handleClick = () => { 
  alert('Hello!') 
}

render(
  <button onClick={handleClick}>Click</button>
)

```


<!-- Diff -->

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

