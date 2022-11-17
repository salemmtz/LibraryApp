import { Layout } from "antd";
import { Sidebar } from "./Sidebar";

const { Sider, Content } = Layout;

export const Main = ({ children }) => {
  return (
    <Layout>
      <Sider width={200}>
        <Sidebar />
      </Sider>
      <Layout>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};
