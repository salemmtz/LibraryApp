import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";

const create_author = gql`
  mutation CreateAuthor($name: String!, $dateOfBirth: Date!) {
    createAuthor(name: $name, dateOfBirth: $dateOfBirth) {
      name
      dateOfBirth
      id
    }
  }
`;

export const AuthorForm = () => {
  const [createAuthor] = useMutation(create_author);
  const [author, setAuthor] = useState({});

  const handleOnChange = (event) => {
    setAuthor({ ...author, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    createAuthor({ variables: { ...author } });
    event.preventDefault();
    console.log("Author created");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name:</label>
        <input
          className="form-control"
          onChange={handleOnChange}
          type="text"
          name="name"
        />
      </div>

      <div className="form-group">
        <label>Birthdate:</label>
        <input
          className="form-control"
          onChange={handleOnChange}
          type="text"
          name="dateOfBirth"
        />
      </div>

      <hr />
      <input className="btn btn-primary" type="submit" value="Create" />
    </form>
  );
};
