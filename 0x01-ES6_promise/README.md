## Tasks: ES6 Promises
### Task 0: Keep every promise you make and only make promises you can keep
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

### Taks 1: Don't make a promise...if you know you can't keep it
Using the prototype below, return a `promise`. The parameter is a `boolean`.
```
getFullResponseFromAPI(success)
```
When the argument is:
- true
	- resolve the promise by passing an object with 2 attributes:
		- status: 200
		- body: 'Success'
- false
	- reject the promise with an error object with the message The fake API is not working currently
Try testing it out for yourself
```
bob@dylan:~$ cat 1-main.js
import getFullResponseFromAPI from './1-promise';

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 1-main.js 
Promise { { status: 200, body: 'Success' } }
Promise {
  <rejected> Error: The fake API is not working currently
    ...
    ...
bob@dylan:~$ 
```

### Task 2: Catch me if you can!
Using the function prototype below
```
function handleResponseFromAPI(promise)
```

Append three handlers to the function:
- When the Promise resolves, return an object with the following attributes
	- status: 200
	- body: success
- When the Promise rejects, return an empty `Error` object
- For every resolution, log `Got a response from the API` to the console

### Task 3: Handle multiple successful promises
In this file, import `uploadPhoto` and `createUser` from utils.js
Knowing that the functions in `utils.js` return promises, use the prototype below to collectively resolve all promises and log `body firstName lastName` to the console.
```
function handleProfileSignup()
```
In the event of an error, log `Signup system offline` to the console
```
bob@dylan:~$ cat 3-main.js
import handleProfileSignup from "./3-all";

handleProfileSignup();

bob@dylan:~$ 
bob@dylan:~$ npm run dev 3-main.js 
photo-profile-1 Guillaume Salva
bob@dylan:~$ 
```

