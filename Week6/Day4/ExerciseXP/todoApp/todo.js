//  Exercise 4: Todo List using ES6 module syntax

export class TodoList {
    #tasks = []

    addTask(description) {
    const task = {
        id: this.#tasks.length + 1,
        description,
        completed: false
    };
    this.#tasks.push(task);
    }

    markComplete(id) {
    const task = this.#tasks.find((t) => t.id === id);
    if (task) {
        task.completed = true;
    }
    }

    listTasks() {
     return this.#tasks.map(task => ({ ...task }));
    }
}
