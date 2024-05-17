import { useState, useEffect } from "react";
import axios from "axios";

const usersURL = "https://jsonplaceholder.typicode.com/users";

const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await axios.get(usersURL);
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };
    getUsers();
  }, []);

  const deleteUser = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  const updateUser = (id, payload) => {
    const updatedUsers = users.map((user) =>
      user.id === id
        ? {
            ...user,
            ...payload,
          }
        : user
    );

    setUsers(updatedUsers);
    console.log(id, payload);
  };

  const initialUser = {
    username: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  };

  const createUser = (payload) => {
    const newUser = {
      id: users.length + 1,
      ...payload,
      ...initialUser,
    };

    setUsers((prev) => [newUser, ...prev]);
  };

  return {
    users,
    deleteUser,
    updateUser,
    createUser,
  };
};
export default useUsers;
