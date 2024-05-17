import User from "../user/User";
import "./users.css";

const Users = ({
  filteredUsers,
  deleteUser,
  updateUser,
  updateTodo,
  createTodo,
  createPost,
  setSelectedId,
  selectedId,
}) => {
  return (
    <div className="container">
      <div className="users">
        {filteredUsers?.map((user) => {
          return (
            <User
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              updateUser={updateUser}
              updateTodo={updateTodo}
              createTodo={createTodo}
              createPost={createPost}
              setSelectedId={setSelectedId}
              isSelected={user.id === selectedId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Users;
