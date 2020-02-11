# 2.3.2 - JS Fundamentals / Timing and delay

---

## [setTimeout()](https://www.w3schools.com/jsref/met_win_settimeout.asp)

```js
// Example
setTimeout(function(){
    console.log('HELLO');
}, 3000);
```

---

## [setInterval()](https://www.w3schools.com/jsref/met_win_setinterval.asp)

```js
// Example
const timmer = setInterval(function(){
    console.log('here');
}, 1000);
//stop the timmer
clearInterval(timmer);
```

---

💡 Always use `clearInterval` to stop your `setInterval` loop

This will require the `setInterval` to be declared.

```js
// Example

```

---


