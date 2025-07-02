//  Exercise 4: Todo List using ES6 module syntax
import { TodoList } from "./todo.js";

const newList = new TodoList();
console.log(TodoList);

newList.addTask("Task 1");
newList.addTask("Task 2");
newList.addTask("Task 3");

newList.markComplete(1);

console.log(newList.listTasks());
