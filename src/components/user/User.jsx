import { useState } from "react";
import "./user.css";
import OtherData from "../otherData/OtherData";

const User = ({ user, deleteUser, updateUser, setSelectedId, isSelected }) => {
  const [userData, setUserData] = useState({
    name: user.name,
    email: user.email,
  });

  const [otherData, setOtherData] = useState({
    street: user.address.street,
    city: user.address.city,
    zipcode: user.address.zipcode,
  });

  const isCompleted = user.todos.every((todo) => todo.completed === true);

  const handleSelect = () => {
    setSelectedId(user.id);
  };
  return (
    <div className="container">
      <div
        style={{
          borderColor: isCompleted ? "green" : "red",
          backgroundColor: isSelected ? "orange" : "transparent",
        }}
        className="userContainer"
      >
        <div className="userIdContainer">
          <label onClick={handleSelect}>ID:{user.id}</label>
        </div>

        <div className="inputsContainer">
          <div className="inputName">
            <label htmlFor="">Name:</label>
            <input
              type="text"
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />
          </div>

          <div className="inputEmail">
            <label htmlFor="">Email:</label>
            <input
              type="text"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </div>
        </div>

        <div className="buttonsContainer">
          <OtherData
            user={user}
            otherData={otherData}
            setOtherData={setOtherData}
          />

          <div className="updateAndDeleteContainer">
            <button
              onClick={() =>
                updateUser(user.id, {
                  ...userData,
                  address: { ...user.address, ...otherData },
                })
              }
            >
              Update
            </button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
