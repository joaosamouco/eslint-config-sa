## eslint-config-sa
### ES6 + REACT RULES

My personal eslint config based on airbnb styleguide with some little changes
to fit my preferences, including `ES6` and `React` rules.

---

### HOW TO USE
```
npm install --save-dev eslint 		// Don't use global eslint
npm install --save-dev babel-eslint
npm install --save-dev eslint-plugin-react
npm install --save-dev eslint-config-sa
```

**Add to your .eslintrc**
```
{
  "extends": "eslint-config-sa"
}
```

---

### LIVE LINTING
#### Sublime Text
Install [SublimeLinter](http://www.sublimelinter.com/en/latest/) and [SublimeLinter-contrib-eslint](https://packagecontrol.io/packages/SublimeLinter-contrib-eslint) via the [Package Control](https://packagecontrol.io/).
![SublimeExample](http://i.imgur.com/TvfYDhN.png)

**PS:** I recommend using [babel-sublime](https://github.com/babel/babel-sublime) to better syntax highlight.

#### Atom
Install [linter](https://atom.io/packages/linter) and [linter-eslint](https://atom.io/packages/linter-eslint).
![AtomExample](http://i.imgur.com/klXpiJW.png)

```
apm install linter linter-eslint language-babel
```

**PS:** I recommend using [language-babel](https://atom.io/packages/language-babel) to better syntax highlighting.

---

### THANKS TO
[airbnb](https://github.com/airbnb/javascript)
