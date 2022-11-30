import { gql, useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Form, Input, Button, Select } from "antd";
import { getAuthors } from "../graphQl/getAuthors";

const create_book = gql`
  mutation CreateBook($title: String!, $authorId: ID!) {
    createBook(title: $title, authorId: $authorId) {
      id
      title
    }
  }
`;

export const BookForm = () => {
  const [createBook, { data: dataM, loading: loadingM, error: errorM }] =
    useMutation(create_book);
  const [book, setBook] = useState({});
  const [form] = Form.useForm();

  const { loading, error, data } = useQuery(getAuthors);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  const onFormLayoutChange = (event) => {
    setBook({ ...book, [event.target.id]: event.target.value });
    // console.log(event.target.value);
  };

  const onFormSelectChange = (value) => {
    setBook({ ...book, authorId: value });
    // console.log(value);
  };

  const onFinish = (event) => {
    createBook({ variables: { ...book } });
    console.log("Book created " + { dataM });
  };

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={onFinish}
      wrapperCol={{ span: 12, offset: 6 }}
    >
      <Form.Item label="Book title:" wrapperCol={{ span: 15 }}>
        <Input
          placeholder="The little prince"
          id="title"
          onChange={onFormLayoutChange}
        />
      </Form.Item>

      <Form.Item label="Author id:" wrapperCol={{ span: 15 }}>
        <Select
          showSearch
          placeholder="Select an author ID"
          options={data.authors.map(({ id }) => ({ label: id, value: id }))}
          onChange={onFormSelectChange}
        ></Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
