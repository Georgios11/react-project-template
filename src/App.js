import React, { useState } from "react";
import NewUser from "./NewUser";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const usersInitialData = [
    { id: uuidv4(), name: "Georgios", email: "gergios@gmail.com" },
    { id: uuidv4(), name: "Rania", email: "tyrania@gmail.com" },
  ];
  const [users, setUsers] = useState(usersInitialData);
  const getUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <div>
      <NewUser getUser={getUser} />
    </div>
  );
};

export default App;
