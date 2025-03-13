# JS101

## Part 1: App Entrypoint, Data and Variables 

JavaScript can be run in many environments, the most obvious being the web browser. In this context, its used to enhance your web pages by allowing fine-grained control over user interactivity. Node.js is an example of a non-browser environment for JavaScript. You can use Node to build a web server or even a shell utility / command-line application.  You can also run JavaScript on a microcontroller, which is yet a third kind of target.  It's important to remember that JavaScript is a language, not an implementation, so it describes at a high-level how a program works, but depends on many supporting layers of technology to actually achieve that.

In this course, we'll start with the most ubqutious and easy-to-set-up JavaScript environment, the browser.

### The `index.html` file

The app entrypoint for the browser is almost always an `index.html` file.  A bare-bones version of that looks like this:
```
<!doctype html5>
<html lang="en">
  <head>
    <style rel="stylesheet" href="style.css">
  </head>
  <body>
    <script src="index.js"></script>
  </body>
</html>

```

The `index.html` file is where we pull in all of our assets to be loaded and executed by the browser.  In other words, this is the home base for your web app.


### Variables



