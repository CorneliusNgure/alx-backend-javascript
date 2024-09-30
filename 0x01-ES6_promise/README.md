## Tasks: ES6 Promises
### Task 0:
Return a Promise using this prototype function `getResponseFromAPI()`

#### Test Code:
```javascript
bob@dylan:~$ cat 0-main.js
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
true
bob@dylan:~$ 
```
