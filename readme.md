**less-module-structure**<br>
_Using <a href="https://github.com/evernote/less-build-structure">evernoteless</a>
and Gulp._

**Installation**
1) npm install
2) npm install -g gulp

**Usage**

1) Default configuration in gulpfile.js:
```js
var evernotelessConfig = {
    evernotelessCorePath: "./evernoteless",
    evernotelessBlangPage: "./evernoteless/blank-page",
    lessSrc: "./src/less"
};
```
For creating new less structure run:
```sh
gulp create-less-page --path hello
```
Ater gulp task generate evernoteless LESS structure in _lessSrc_ witn name "hello"

2) For creating in other directories configurate _evernotelessConfig_ in
_gulpfile.js_ and use _--path_ parameters:

Example:<br>
Configuration in gulpfile.js:
```js
var evernotelessConfig = {
    evernotelessCorePath: "./evernoteless",
    evernotelessBlangPage: "./evernoteless/blank-page",
    lessSrc: "./src/less/myapp"
};
```
Creating less path commands:
```sh
# create ./src/less/myapp/navbar with less structure
gulp create-less-page --path navbar

# create ./src/less/myapp/page/index with less structure
gulp create-less-page --path navbar/index
```

Links:
https://github.com/evernote/less-build-structure