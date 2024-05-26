import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deletedTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodos) => prevTodos.id != id)
    );
  };

  let upperCaseAll = () => {
    setTodos((todos) =>
      todos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };
  return (
    <div>
      <input
        value={newTodo}
        placeholder="add a task"
        onChange={updateTodoValue}
        // style={{ width: "250px", height: "2.1em" }}
      ></input>
      <br />
      <button
        onClick={addNewTask}
        // style={{
        //   width: "8em",
        //   height: "2.5em",
        //   margin: "1em",
        //   backgroundColor: "black",
        //   color: "white",
        //   border: "none",
        //   cursor: "pointer",
        // }}
        // className="bottm"
      >
        Add Task
      </button>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <h4
      // style={{ color: "white" }}
      >
        Task Todo
      </h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.task}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => deletedTodo(todo.id)}>delete</button>
          </li>
        ))}
      </ul>
      <br />
      <button onClick={upperCaseAll}>UpperCase All</button>
    </div>
  );
};

export default TodoList;
