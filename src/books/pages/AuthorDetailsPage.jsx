import { gql, useQuery } from "@apollo/client";
import { Card } from "antd";
import React from "react";
import { useParams } from "react-router-dom";

// Query for getting author by id
const getAuthor = gql`
  query get_Author($id: ID!) {
    author(id: $id) {
      id
      name
      dateOfBirth
      books {
        title
      }
    }
  }
`;

export const AuthorDetailsPage = () => {
  const { loading, error, data } = useQuery(getAuthor, {
    variables: { id: useParams().id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  const { id, name, dateOfBirth, books } = data.author;

  return (
    <div className="card">
      <Card
        title={name}
        bordered={false}
        style={{
          width: 500,
        }}
      >
        <p>
          <b>Author id: </b>
          {id}
        </p>
        <p>
          <b>Birthdate: </b>
          {dateOfBirth}
        </p>
        <ul>
          <b>Books: </b>
          <div className="books">
            {books.map((book) => (
              <li key={book.title}>{book.title}</li>
            ))}
          </div>
        </ul>
      </Card>
    </div>
  );
};
