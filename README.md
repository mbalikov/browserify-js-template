browserify-js-templates
===============

Simple transform for Browserify that wraps (html) files into JS modules.
Default template file extension is .html

## Install

    npm install browserify-js-template

## Example
template.html:
```html

<div>
  <h1>Hello, <strong>${args.name}</strong></h1>
</div>
```

main.js:
```javascript

const template = require('./template.html');
console.log(template({ name: "World" }));
```

Create bundle
```
browserify ./main.js -t [ browserify-js-template --extensions .html ] -o ./bundle.js
```

