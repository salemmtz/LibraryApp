import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const create_book = gql`
  mutation CreateBook($title: String!, $authorId: ID!) {
    createBook(title: $title, authorId: $authorId) {
      id
      title
    }
  }
`;

export const BookForm = () => {
  const [createBook] = useMutation(create_book);
  const [book, setBook] = useState({});

  const handleOnChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    createBook({ variables: { ...book } });
    event.preventDefault();
    console.log("Book created");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label for="title">Title:</label>
      <input
        className="form-control"
        onChange={handleOnChange}
        type="text"
        name="title"
        id="title"
      />

      <div className="form-group">
        <label>Author id: {useParams().id}</label>
        <input
          className="form-control"
          onChange={handleOnChange}
          type="text"
          name="authorId"
        />
      </div>

      <hr />
      <input className="btn btn-primary" type="submit" value="Create" />
    </form>
  );
};
