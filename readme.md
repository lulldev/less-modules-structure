<h1>less-module-structure**</h1>
_Using <a href="https://github.com/evernote/less-build-structure">evernoteless</a>
and Gulp._

<h2>Installation</h2>
1) npm install
2) npm install -g gulp

<h2>Usage</h2>
<strong>Configuration:</strong>
```js
var evernotelessConfig = {
    // system config
    evernotelessCorePath: "./evernoteless",
    evernotelessBlankPage: "./evernoteless/blank-page",
    evernotelessBlankModule: "./evernoteless/blank-module",
    // users config
    lessSrc: "./src/less" // path to your less project
};
```

<strong>Creating pages:</strong>
```sh
gulp create-less-page --path=hello
```
Ater gulp task generate custom evernoteless LESS page structure in src/less.

<strong>Creating modules:</strong>
```sh
gulp create-less-page --page=hello --name=world
```
Ater gulp task generate evernoteless LESS structure in src/less/hello.

<h2>Links:</h2>
https://github.com/evernote/less-build-structure