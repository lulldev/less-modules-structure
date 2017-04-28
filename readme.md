<h1>less-module-structure</h1>
Using <a href="https://github.com/evernote/less-build-structure">evernoteless</a>
and Gulp.

<h2>Installation</h2>
1) npm install<br>
2) npm install -g gulp

<h2>Usage</h2>
<strong>Create blank project:</strong>
```sh
gulp create-less-project --name=my_project
```
This task create new blank project in src (using lessSrc parameter in evernotelessConfig in gulpfile.js)

<strong>Creating pages:</strong>
```sh
gulp create-less-page --project=your_project --name=my_page
```
Ater gulp task generate custom evernoteless LESS page structure in src/less in
your project.

<strong>Creating local modules (for pages):</strong>
```sh
gulp create-less-module --project=my_project --page=my_page --name=my_module
```
This command create local module for page in project. All parameters are required.

<strong>Creating global module (for all project:</strong>
Blank project by default has a folder **global_modules**. If you call
_create-less-module_ without _--page_ - task generate global module.
```sh
gulp create-less-module --project=my_project --name=my_module
```

<h2>Links:</h2>
https://github.com/evernote/less-build-structure