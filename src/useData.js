import usePosts from "./api/usePosts";
import useUsers from "./api/useUsers";
import useTodos from "./api/useTodos";

const useData = () => {
  const { users, deleteUser, updateUser, createUser } = useUsers();
  const { todos, createTodo, updateTodo } = useTodos();
  const { posts, createPost } = usePosts();

  const getUser = (id) =>
    id ? database.find((user) => user.id === id) : undefined;

  const database = users.map((user) => {
    const userTodos = todos.filter((todo) => todo.userId === user.id);
    const userPosts = posts.filter((post) => post.userId === user.id);
    return { ...user, posts: userPosts, todos: userTodos };
  });

  return {
    database,
    deleteUser,
    updateUser,
    createTodo,
    createPost,
    createUser,
    updateTodo,
    getUser,
  };
};

export default useData;
