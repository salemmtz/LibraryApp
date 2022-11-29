import { Layout } from "antd";
import { Sidebar } from "./Sidebar";

const { Sider, Content } = Layout;

export const Main = ({ children }) => {
  return (
    <Layout>
      <Sider
        width={200}
        style={{
          height: "785px",
          lineHeight: "75px",
          backgroundColor: "#f4f4f4",
        }}
      >
        <Sidebar />
      </Sider>
      <Layout>
        <Content
          style={{
            backgroundColor: "rgb(227, 227, 227)",
            paddingTop: "100px",
            paddingLeft: "220px",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
