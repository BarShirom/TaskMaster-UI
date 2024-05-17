import { useState } from "react";
import "./newUser.css";

const NewUser = ({ createUser, setIsVisible }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="newUserContainer">
      <div className="newUserInputs">
        <div className="newUserInput">
          <label htmlFor="">Name:</label>
          <input
            value={user.name}
            type="text"
            name="name"
            onChange={handleChange}
          />
        </div>

        <br />
        <div className="newUserInput">
          <label htmlFor="">Email:</label>
          <input
            value={user.email}
            type="text"
            name="email"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="newUserBtn">
        <button onClick={() => setIsVisible(false)}>Cancel</button>
        <button onClick={() => createUser(user)}>Add</button>
      </div>
    </div>
  );
};

export default NewUser;
