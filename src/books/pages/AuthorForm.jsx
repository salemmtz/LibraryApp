import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Form, Input, Button } from "antd";

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
  const [form] = Form.useForm();

  const onFormLayoutChange = (event) => {
    setAuthor({ ...author, [event.target.id]: event.target.value });
    // console.log(event.target.value);
  };

  const onFinish = (event) => {
    createAuthor({ variables: { ...author } });
    console.log("Author created");
  };

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={onFinish}
      wrapperCol={{ span: 12, offset: 6 }}
    >
      <Form.Item label="Author name:" wrapperCol={{ span: 15 }}>
        <Input
          placeholder="Salem Martinez"
          id="name"
          onChange={onFormLayoutChange}
        />
      </Form.Item>

      <Form.Item label="Birthdate:" wrapperCol={{ span: 15 }}>
        <Input
          placeholder="YYYY-MM-DD"
          id="dateOfBirth"
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
