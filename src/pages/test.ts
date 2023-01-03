import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/todos/1';

type TodoInterface = {
  id: number;
  title: string;
  completed: boolean;
};

// eslint-disable-next-line import/no-mutable-exports
export let aaa: number = 5;

axios.get(url).then((response) => {
  const todo: TodoInterface = response.data;
  // const TodoInterface = response.data as TodoInterface; // Либо так

  aaa = todo.id;
  const id = todo.id;
  const title = todo.title;
  const finished = todo.completed;

  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  logTodo(id, title, finished);
});

export function logTodo(id: number, title: string, completed: boolean) {
  console.log(`
        Todo ID: ${id}
        Todo title: ${title}
        Is todo finished: ${completed}
    `);
}
