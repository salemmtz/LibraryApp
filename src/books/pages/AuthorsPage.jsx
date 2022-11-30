import { gql, useQuery } from "@apollo/client";
import { Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { getAuthors } from "../graphQl/getAuthors";

export const AuthorsPage = () => {
  const { loading, error, data } = useQuery(getAuthors);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <>
      {data.authors.map(({ id, name, dateOfBirth }) => (
        <div key={id}>
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
