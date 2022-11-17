import { gql, useQuery } from "@apollo/client";
import { Card } from "antd";
import React from "react";
import { useParams } from "react-router-dom";

const getBook = gql`
  query get_Book($id: ID!) {
    book(id: $id) {
      id
      title
      author {
        name
      }
    }
  }
`;

export const BookDetailsPage = () => {
  const { loading, error, data } = useQuery(getBook, {
    variables: { id: useParams().id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  const { author, id, title } = data.book;

  return (
    <div className="card">
      <Card
        title={title}
        bordered={false}
        style={{
          width: 500,
        }}
      >
        <p>
          <b>Author: </b>
          {author.name}
        </p>
        <p>
          <b>Book id: </b>
          {id}
        </p>
      </Card>
    </div>
  );
};
