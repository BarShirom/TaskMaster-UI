import { useState } from "react";
import "./todos.css";

const Todos = ({ id, createTodo, updateTodo, todos }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [isTodosVisible, setIsTodosVisible] = useState(false);

  return (
    <div className="todosContainer">
      <div className="todosUserIdAndAddBtn">
        <div className="todosUserId">Todos - User {id}</div>

        <div className="addTBtn">
          <button onClick={() => setIsTodosVisible(true)}>Add</button>
        </div>
      </div>

      {isTodosVisible ? (
        <div className="newTodoContainer">
          <div className="newTodoInput">
            <label htmlFor="">Title:</label>
            <input type="text" onChange={(e) => setTodoTitle(e.target.value)} />
          </div>
          <div className="newTodoBtnContainer">
            <div className="addNewTodoBtn">
              <button
                onClick={() => {
                  createTodo(id, todoTitle);
                  setIsTodosVisible(false);
                }}
              >
                Add
              </button>
            </div>
            <div className="cancelNewTodoBtn">
              <button onClick={() => setIsTodosVisible(false)}>Cancel</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="todosList">
          {todos?.map((todo) => {
            return (
              <div className="todoItem" key={todo.id}>
                <p>Title: {todo.title}</p>
                <p>Completed: {todo.completed ? "true" : "false"}</p>
                {!todo.completed && (
                  <button
                    onClick={() =>
                      updateTodo(todo.id, { ...todo, completed: true })
                    }
                  >
                    Mark Completed
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Todos;
