import { useNavigate } from "react-router-dom";
import { Dropdown } from "antd";
import { User, Image, Role, Name } from "./styles";

const AuthUser = () => {
  const navigate = useNavigate();

  const onLogout = (e) => {
    e.preventDefault();

    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Dropdown
      menu={{
        items: [
          {
            key: "0",
            label: <a onClick={onLogout}>Log out</a>,
          },
        ],
      }}
    >
        <User>
            <Image src='https://loremflickr.com/cache/resized/7785_26474917243_e350c96dbe_c_640_480_nofilter.jpg' />
            <div>
                <Role>Admin</Role>
                <Name>Mai Anh Kha</Name>
            </div>
        </User>
    </Dropdown>
  );
};

export default AuthUser;
