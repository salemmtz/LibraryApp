import { gql, useQuery } from "@apollo/client";
import { Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const getBooks = gql`
  query get_Books {
    books {
      id
      title
      author {
        name
      }
    }
  }
`;

export const BooksPage = () => {
  const { loading, error, data } = useQuery(getBooks);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <>
      {data.books.map(({ id, title, author }) => (
        <div className="card" key={id}>
          <Card
            title={title}
            bordered={false}
            extra={<Link to={`/books/${id}`}>Details</Link>}
            style={{
              width: 500,
            }}
          >
            <p>
              <b>Author: </b>
              {author.name}
            </p>
          </Card>

          <br />
        </div>
      ))}
    </>
  );
};
