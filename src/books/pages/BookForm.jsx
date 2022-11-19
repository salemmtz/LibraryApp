import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Form, Input, Button } from "antd";

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
  const [form] = Form.useForm();

  const onFormLayoutChange = (event) => {
    setBook({ ...book, [event.target.id]: event.target.value });
    // console.log(event.target.value);
  };

  const onFinish = (event) => {
    createBook({ variables: { ...book } });
    console.log("Book created");
  };

  return (
    <Form layout="vertical" form={form} onFinish={onFinish}>
      <Form.Item label="Book title:" wrapperCol={{ span: 10 }}>
        <Input
          placeholder="The little prince"
          id="title"
          onChange={onFormLayoutChange}
        />
      </Form.Item>

      <Form.Item label="Author id:" wrapperCol={{ span: 10 }}>
        <Input
          placeholder="123456789"
          id="authorId"
          onChange={onFormLayoutChange}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
