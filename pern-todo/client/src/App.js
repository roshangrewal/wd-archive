import React, { Fragment } from "react";
import "./App.css";

//components
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <Fragment>
      <div className="container">
        <h1 className="text-center mt-5">Pern Todo List</h1>
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;