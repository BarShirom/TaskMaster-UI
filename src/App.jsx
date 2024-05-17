import "./App.css";
import Users from "./components/users/Users";
import useData from "./useData";
import { useState } from "react";
import Header from "./components/header/Header";
import NewUser from "./components/newUser/NewUser";
import Todos from "./components/todos/Todos";
import Posts from "./components/posts/Posts";

function App() {
  const {
    database,
    getUser,
    createUser,
    createTodo,
    createPost,
    updateUser,
    updateTodo,
    deleteUser,
  } = useData();

  const [search, setSearch] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const user = getUser(selectedId);
  const filteredUsers = database.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <div className="headerAndUsers">
        <Header
          search={search}
          setSearch={setSearch}
          isVisible={isVisible}
          setIsVisible={() => {
            setIsVisible(true);
            setSelectedId(null);
          }}
        />
        <Users
          filteredUsers={filteredUsers}
          deleteUser={deleteUser}
          updateUser={updateUser}
          updateTodo={updateTodo}
          createTodo={createTodo}
          createPost={createPost}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          search={search}
          setSearch={setSearch}
          createUser={createUser}
          setSelectedId={(id) => {
            setSelectedId(id);
            setIsVisible(false);
          }}
          selectedId={selectedId}
        />
      </div>

      {isVisible && (
        <NewUser createUser={createUser} setIsVisible={setIsVisible} />
      )}
      {selectedId && (
        <div className="todosAndPosts">
          <Todos
            createTodo={createTodo}
            updateTodo={updateTodo}
            id={selectedId}
            todos={user?.todos}
          />

          <Posts createPost={createPost} posts={user?.posts} id={selectedId} />
        </div>
      )}
    </div>
  );
}

export default App;
