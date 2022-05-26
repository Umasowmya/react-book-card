import './App.css';
import React, { useState, useEffect } from 'react';
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import AddTodo from "./MyComponents/AddTodo";
import About from "./MyComponents/About";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }

  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am on delete", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }


  const addTodo = (title, desc) => {
    console.log("added", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }

    setTodos([...todos, myTodo]);



  }

  const [todos, setTodos] = useState(initTodo)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (

    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" render={()=>{
            return(
              <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
            
          </Route>

          <Route exact  path="/about">
              <About />
          </Route>
            
          1
        </Switch>
        <Footer />
      </Router>
    </>
  );

}


export default App;
