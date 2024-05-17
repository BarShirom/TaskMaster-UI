import { useState, useEffect } from "react";
import axios from "axios";

const todosURL = "https://jsonplaceholder.typicode.com/todos";

const useTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const { data } = await axios.get(todosURL);
        setTodos(data);
      } catch (error) {
        console.error(error);
      }
    };
    getTodos();
  }, []);


  const updateTodo = (id, payload) => {
    const updatedUsers = todos.map((user) =>
      user.id === id
        ? {
            ...user,
            ...payload,
          }
        : user
    );

    setTodos(updatedUsers);
  };

  const createTodo = (userId, title) => {
    const newTodo = {
      completed: false,
      id: todos.length + 1,
      title,
      userId,
    };
    setTodos([newTodo, ...todos]);
  };

  return {
    todos,
    createTodo,
    updateTodo
  };
};

export default useTodos;
