import { useState, useEffect } from "react";
import Table from "./components/Table";
import "./App.css";

type User = {
  id: string;
  name: string;
};

function App() {
  const [users, setUsers] = useState([] as User[]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:9000/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const addUser = async () => {
    try {
      const response = await fetch("http://localhost:9000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: inputValue }),
      });
      const newUser = await response.json();
      setUsers([...users, newUser]);
      setInputValue("");
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  console.log(users);
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline text-red-600 my-10">
        RecruitIT
      </h1>

      <Table />
    </div>
  );
}

export default App;
