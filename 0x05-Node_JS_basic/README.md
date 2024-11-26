## Tasks

---

### 0. Executing basic javascript with Node JS

In the file`0-console.js`, create a function named `displayMessage` that prints in `STDOUT` the string argument.
```bash
bob@dylan:~$ cat 0-main.js
const displayMessage = require('./0-console');

displayMessage("Hello NodeJS!");

bob@dylan:~$ node 0-main.js
Hello NodeJS!
bob@dylan:~$
```

---

### 1. Using Process stdin
Create a program named `1-stdin.js` that will be executed through command line:
- It should display the message `Welcome to Holberton School, what is your name?` (followed by a new line)
- The user should be able to input their name on a new line
- The program should display `Your name is: INPUT`
- When the user ends the program, it should display `This important software is now closing` (followed by a new line)
**Requirements:**
- Your code will be tested through a child process, make sure you have everything you need for that
```bash
bob@dylan:~$ node 1-stdin.js 
Welcome to Holberton School, what is your name?
Bob
Your name is: Bob
bob@dylan:~$ 
bob@dylan:~$ echo "John" | node 1-stdin.js 
Welcome to Holberton School, what is your name?
Your name is: John
This important software is now closing
bob@dylan:~$
```

---

### 2. Reading a file synchronously with Node JS

Using the database `database.csv` (provided in project description), create a function `countStudents` in the file `2-read_file.js`
    - Create a function named `countStudents`. It should accept a path in argument
    - The script should attempt to read the database file synchronously
    - If the database is not available, it should throw an error with the text `Cannot load the database`
    - If the database is available, it should log the following message to the console `Number of students: NUMBER_OF_STUDENTS`
    - It should log the number of students in each field, and the list with the following format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`
    - CSV file can contain empty lines (at the end) - and they are not a valid student!
```bash
bob@dylan:~$ cat 2-main_0.js
const countStudents = require('./2-read_file');

countStudents("nope.csv");

bob@dylan:~$ node 2-main_0.js
2-read_file.js:9
    throw new Error('Cannot load the database');
    ^

Error: Cannot load the database
...
bob@dylan:~$
bob@dylan:~$ cat 2-main_1.js
const countStudents = require('./2-read_file');

countStudents("database.csv");

bob@dylan:~$ node 2-main_1.js
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$
```

---