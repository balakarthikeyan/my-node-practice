/*
The heap is a memory segment used for storing objects, strings and closures. 

The heap is part of something bigger though: a running Node.js process store all its memory inside a Resident Set.

process is a global Node.js object which contains information about the current Node.js process, and it provides exactly what we were searching for: the memoryUsage() method.

memoryUsage returns an object with various information: rss, heapTotal, heapUsed, external:

- rss stands for Resident Set Size, it is the total memory allocated for the process execution
- heapTotal is the total size of the allocated heap
- heapUsed is the actual memory used during the execution of our process . external is, according to the documentation, the memory used by "C++ objects bound to JavaScript objects managed by V8"
*/

const arr = [1, 2, 3, 4, 5, 6, 9, 7, 8, 9, 10];
let arr = Array(1e6).fill("some string");
arr.reverse();
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);


const arr = [1, 2, 3, 4, 5, 6, 9, 7, 8, 9, 10];
arr.reverse();
const used = process.memoryUsage();
for (let key in used) {
  console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
}