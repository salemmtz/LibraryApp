import { Menu } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  BookOutlined,
  UserAddOutlined,
  TeamOutlined,
  FileAddOutlined,
} from "@ant-design/icons";

export const Sidebar = () => {
  return (
    <>
      <div className="brand">BooksApp</div>
      <hr />
      <Menu
        className="menu"
        style={{ marginLeft: "20px", backgroundColor: "#f4f4f4" }}
      >
        <Menu.Item
          key="1"
          style={{
            backgroundColor: "#fff",
            marginBottom: "10px",
            display: "inline - flex",
            width: "140px",
            boxShadow: "0 4px 6px rgb(0 0 0 / 12%)",
          }}
        >
          <NavLink to="/books">
            <span>
              <BookOutlined />
            </span>
            <span> Books</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item
          key="2"
          style={{
            backgroundColor: "#fff",
            marginBottom: "10px",
            display: "inline - flex",
            width: "140px",
            boxShadow: "0 4px 6px rgb(0 0 0 / 12%)",
          }}
        >
          <NavLink to="/authors">
            <span>
              <TeamOutlined />
            </span>
            <span> Authors</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item
          key="3"
          style={{
            backgroundColor: "#fff",
            marginBottom: "10px",
            display: "inline - flex",
            width: "140px",
            boxShadow: "0 4px 6px rgb(0 0 0 / 12%)",
          }}
        >
          <NavLink to="/createBook">
            <span>
              <FileAddOutlined />
            </span>
            <span> Create book</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item
          key="4"
          style={{
            backgroundColor: "#fff",
            marginBottom: "10px",
            display: "inline - flex",
            width: "140px",
            boxShadow: "0 4px 6px rgb(0 0 0 / 12%)",
          }}
        >
          <NavLink to="/createAuthor">
            <span>
              <UserAddOutlined />
            </span>
            <span> Create author</span>
          </NavLink>
        </Menu.Item>
      </Menu>
    </>
  );
};
