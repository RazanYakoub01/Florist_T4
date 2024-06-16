# florist-website
## [Website](http://www.itgwebb.se/klass/webb2/christoffer/florist-celeber/)

## Definition of Done

### General
- Website published to the web
- All files listed in README.md
- Try not to commit files with known errors, the day before the deadline

### Code
- Code refactored
- Comments describing functions in JavaScript files
- Other comments if needed
- Reviewed by teammate
- Committed to GitHub
- Works well without JavaScript

### Tests
- Tests made
- Tests passed

## Development Environment

### IDE
- Visual Studio Code v1.59.1

### Extensions
- HTML CSS Support v1.10.2
- HTML Snippets v1.10.2
- JavaScript (ES6) code snippets v1.8.0
- ESLint v2.1.23

### Git
- GitHub
- Git-bash
- NTIG-Uppsala Organization
- Explanatory commit message

### Development Page
- [Page](http://www.itgwebb.se/klass/webb2/christoffer/dev/florist-celeber)
#### How to use DevPage
- Code to DevPage
- Pull code from DevPage to local
- Commit local to GitHub **git commit** (Do not use -m "")
- Tests will run in pre-commit on DevPage
- If errors in the validation, terminate commit in VIM, then **git reset --soft HEAD**
- If validation passes, write a message in VIM and commit
- Code will now be live

### Other
- Google Chrome v93.0.4577.63
- [Selenium Webdriver](https://pypi.org/project/selenium/) Python v.3.141.0
- Pre-commit hooks

## Programming Language
- English function names and variable names
- English comments
- Comments before functions
- If comment mid function write it 4 spaces after a semicolon
- camelCasing on functions, variable names, id, and more
- File name camelCasing

### HTML
#### Standard
- index.html
- Use ""
- External CSS
- External JavaScript
- Defer in script tag
- Language tag "sv"
- HTML Charset UTF-8
```
<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="ENTER PATH" defer></script>
    <link rel="stylesheet" href="ENTER PATH">
    <link rel="icon" type="image/png" href="ENTER PATH">
    <title>ENTER TITLE</title>
</head>
<body>

</body>
</html>
```

### CSS
#### Standard
- Use all browser's animation standards
- padding: 0px; on body tag
- margin: 0px; on body tag
- No position: absolute;

### JavaScript
#### Standard
- Use ' '
- Let/Const for variables
- Opening curly bracket at the end of a statement line
- Use one space before the opening bracket
- Place the curly closing bracket on a new line
- Arrays, every item new line
- Space around operands and after commas
- Always use 4 spaces for indentation of code blocks
- Avoid long lines
- Avoid global variables

## Other Specifications

- [Tabler Icons](https://tablericons.com/) MIT License
- [Bootstrap](https://github.com/startbootstrap/startbootstrap-agency) MIT License

# Documentation

## florist-celeber

#### index.html
- Main file that structures the website.

### kiruna
#### index.html
- Main file for subpage

### lulea
#### index.html
- Main file for subpage

### Favicon
- favicon.ico
- android-chrome-192x192.png
- android-chrome-512x512.png
- apple-touch-icon.png
- browserconfig.xml
- favicon-16x16.png
- favicon-32x32.png
- mstile-150x150.png
- safari-pinned-tab.svg
- site.webmanifest

### Assets
#### img
- Contains images for the website.

### CSS
#### styles.css
- All styles for the elements (Bootstrap).
#### style.css
- Our own CSS code.

### JavaScript
#### script.js
- Menu becomes readable on smaller resolutions by making it a drop-down menu.
- The header becomes smaller when scrolling downwards and it stays on top.
- Live opening hours feature

### Tests
#### main.py
- Runs all the tests

#### chrome.py
-creates tests for Chrome webdriver

#### firefox.py
-creates tests for Firefox webdriver

#### edge.py
-creates tests for Edge webdriver

#### opera.py
-creates test for Opera webdriver

#### screenshotTests.py
-takes screenshots in different resolutions on all web browsers

### Webdrivers
- chromedriver.exe
- geckodriver.exe
- operadriver.exe
- msedgedriver.exe 
- msedgedriver requieres the following addon
- py -m pip install msedge-selenium-tools selenium==3.141

### Pre-commit Tests for devpage
#### In .git/hooks/pre-commit
```
#!/bin/bash

start chrome "https://validator.nu/?doc=http%3A%2F%2Fwww.itgwebb.se%2Fklass%2Fwebb2%2Fchristoffer%2Fdev%2Fflorist-celeber" #HTML
start chrome "https://jigsaw.w3.org/css-validator/validator?uri=http%3A%2F%2Fwww.itgwebb.se%2Fklass%2Fwebb2%2Fchristoffer%2Fdev%2Fflorist-celeber%2Fcss%2Fstyle.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en" #CSS
start chrome "https://validator.w3.org/checklink?uri=http%3A%2F%2Fwww.itgwebb.se%2Fklass%2Fwebb2%2Fchristoffer%2Fdev%2Fflorist-celeber&hide_type=all&depth=&check=Check" #Links on the webpages
start chrome "https://codebeautify.org/jsvalidate?url=http://www.itgwebb.se/klass/webb2/christoffer/dev/florist-celeber/js/scripts.js" #JS
start chrome "https://validator.nu/?doc=http%3A%2F%2Fwww.itgwebb.se%2Fklass%2Fwebb2%2Fchristoffer%2Fdev%2Fflorist-celeber%2Fkiruna%2F" #HTML for kiruna-page
start chrome "https://validator.nu/?doc=http%3A%2F%2Fwww.itgwebb.se%2Fklass%2Fwebb2%2Fchristoffer%2Fdev%2Fflorist-celeber%2Flulea%2F" #HTML for lulea-page

```
