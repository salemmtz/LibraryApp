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
      <Menu className="menu">
        <Menu.Item key="1">
          <NavLink to="/books">
            <span className="icon">
              <BookOutlined />
            </span>
            <span className="label menu-item"> Books</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="/authors">
            <span className="icon">
              <TeamOutlined />
            </span>
            <span className="label"> Authors</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to="/createBook">
            <span className="icon">
              <FileAddOutlined />
            </span>
            <span className="label"> Create book</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="4">
          <NavLink to="/createAuthor">
            <span className="icon">
              <UserAddOutlined />
            </span>
            <span className="label"> Create author</span>
          </NavLink>
        </Menu.Item>
      </Menu>
    </>
  );
};
