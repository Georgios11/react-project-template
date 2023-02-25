import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NewUser = ({ getUser }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
  });
  const changeHandler = (event) => {
    getUser(
      setUser((prevState) => {
        return {
          ...prevState,
          [event.target.name]: event.target.value,
          id: uuidv4(),
        };
      })
    );
    // setUser(prevState=>{...prevState,[event.target.name]:event.target.value})
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(user);
    setUser({
      name: "",
      email: "",
      password: "",
      about: "",
    });
  };

  return (
    <section>
      <h2>Create User</h2>
      <form onSubmit={submitHandler}>
        <div>
          <div className="form__control">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              value={user.name}
              onChange={changeHandler}
            />
          </div>
          <div className="form__control">
            <input
              type="email"
              value={user.email}
              name="email"
              id="email"
              placeholder="Email"
              onChange={changeHandler}
            />
          </div>
          <div className="form__control">
            <input
              type="password"
              name="password"
              id="password"
              value={user.password}
              placeholder="Password"
              onChange={changeHandler}
            />
          </div>
          <div className="form__control">
            <textarea
              name="about"
              value={user.about}
              id="about"
              onChange={changeHandler}
            ></textarea>
          </div>
        </div>
        <button type="submit">Add User</button>
      </form>
    </section>
  );
};

export default NewUser;
