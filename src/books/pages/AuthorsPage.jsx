import { gql, useQuery } from "@apollo/client";
import { Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const getAuthors = gql`
  query get_Authors {
    authors {
      id
      name
      dateOfBirth
    }
  }
`;

export const AuthorsPage = () => {
  const { loading, error, data } = useQuery(getAuthors);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <>
      {data.authors.map(({ id, name, dateOfBirth }) => (
        <div className="card" key={id}>
          <Card
            title={name}
            bordered={false}
            extra={<Link to={`/authors/${id}`}>More..</Link>}
            style={{
              width: 500,
            }}
          >
            <p>
              <b>Author id: </b>
              {id}
            </p>
          </Card>

          <br />
        </div>
      ))}
    </>
  );
};
