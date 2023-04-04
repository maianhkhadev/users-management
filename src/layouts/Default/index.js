import { Button } from "antd";
import { BorderLeftOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import AuthUser from "./AuthUser";
import {
  Layout,
  Header,
  Logo,
  Main,
  Sidebar,
  Content,
  Footer,
  MenuItem,
} from "./styles";

const DefaultLayout = ({ children }) => {
  
  return (
    <Layout>
      <Sidebar>
        <Logo>Green Academy</Logo>

        <Link to="/dashboard">
          <MenuItem>
            <BorderLeftOutlined /> <span>Dashboard</span>
          </MenuItem>
        </Link>

        <Link to="/students">
          <MenuItem>
            <UserOutlined /> <span>Students</span>
          </MenuItem>
        </Link>
      </Sidebar>

      <Content>
        <Header>
          <AuthUser />
        </Header>

        <Main>{children}</Main>

        <Footer>Powered by Kha</Footer>
      </Content>
    </Layout>
  );
};

export default DefaultLayout;
