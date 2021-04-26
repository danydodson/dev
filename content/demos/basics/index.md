# Syntax guide

### Headers

```markdown
# This is an <h1> tag

## This is an <h2> tag

### This is an <h3> tag

#### This is an <h4> tag

##### This is an <h5> tag

###### This is an <h6> tag
```

If you want to add `id` and class to the header, then simply append `{#id .class1 .class2}`. For example:

```markdown
# This heading has 1 id {#my_id}

# This heading has 2 classes {.class1 .class2}
```

This is a MPE extended feature.

### Emphasis
```markdown
*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

_You **can** combine them_

~~This text will be strikethrough~~
```

### Lists

#### Unordered List
```markdown
- Item 1
- Item 2
  - Item 2a
  - Item 2b
```
#### Ordered List
```markdown
1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b
```

### Images
```markdown
![GitHub Logo](logo.png)
Format: ![Alt Text](https://raw.githubusercontent.com/danydodson/dev/main/static/icons/favicon.png)
```

### Links
```markdown
https://github.com - automatic!
[GitHub](https://github.com)
```

### Blockquote
```markdown
As Kanye West said:
  > We're living the future so
  > the present is our past.
```

### Horizontal Rule

```markdown
Three or more...

---

Hyphens

---

Asterisks

---

Underscores
```

### Inline code

```markdown
I think you should use an `<addr>` element here instead.
```

### Fenced code block

```markdown
You can create fenced code blocks by placing triple backticks ``` before and after the code block.
```
#### Syntax Highlighting

You can add an optional language identifier to enable syntax highlighting in your fenced code block.

For example, to syntax highlight Ruby code:

```ruby
require 'redcarpet'

markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

```ruby
require 'redcarpet'

markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

### Code block class (MPE extended feature)

You can set `class` for your code blocks.

For example, to add class1 class2 to a code block

```javascript {.class1 .class}
function add(x, y) {
  return x + y
}
```
#### line-numbers

You can enable line number for a code block by adding line-numbers class.

For example:
```javascript {.line-numbers}
function add(x, y) {
  return x + y;
}
```

#### highlighting rows

You can highlight rows by add highlight attribute:

```javascript {highlight=10}
```
```javascript {highlight=10-20}
```
```javascript {highlight=[1-10,15,20-22]}
```

### Task lists

- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported

```markdown
- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item
```

### Tables

> Need to enable enableExtendedTableSyntax in extension settings to get it work.

You can create tables by assembling a list of words and dividing them with hyphens - (for the first row), and then separating each column with a pipe |:

First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column

### Extended syntax

### Table

colspan `>` or `empty cell`:
|  a  |  b  |
| --- | --- |
|  >  |  2  |
|  2  ||

rowspan `^`:
|  a  |  b  |
| --- | --- |
|  1  |  2  |
|  ^  |  4  |

### Emoji & Font-Awesome
This only works for markdown-it parser but not pandoc parser.
Enabled by default. You can disable it from the package settings.
:smile: :fa-car:
```markdown
:smile: :fa-car:
```

### Superscript
30^th^
```markdown
30^th^
```

### Subscript
H~2~O
```markdown
H~2~O
```

### Footnotes
Content [^1]
[^1]: Hi! This is a footnote
```markdown
Content [^1]
[^1]: Hi! This is a footnote
```

### Abbreviation
```markdown
_[HTML]: Hyper Text Markup Language
_[W3C]: World Wide Web Consortium
The HTML specification
is maintained by the W3C.
```

### Mark
==marked==
```markdown
==marked==
```

### CriticMarkup

CriticMarkup is disabled by default, but you can enable it from the package settings.
For more information about CriticMarkup, check CriticMarkup User's Guide.

There are five types of Critic marks:

* Addition ```{++ ++}```
* Deletion ```{-- --}```
* Substitution ```{~~ ~> ~~}```
* Comment ```{>> <<}```
* Highlight ```{== ==}{>> <<}```

> CriticMarkup only works with the markdown-it parser, but not the pandoc parser.
