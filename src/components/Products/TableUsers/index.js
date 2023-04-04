import { Table, Button, Space } from "antd";
import { Country, Image } from "./styles";

const TableCities = (props) => {
  const columns = [
    {
      title: "Thành phố",
      dataIndex: "name",
      key: "name",
      width: "25%",
    },
    {
      title: "Quốc gia",
      dataIndex: "country",
      key: "country",
      width: "25%",
      render: (_, item) => {
        return (
          <Country>
            <Image src={item.countryFlag} />
            <div>
              <h6>{item.country}</h6>
              <div>{item.countryCode}</div>
            </div>
          </Country>
        );
      },
    },
    {
      title: "Dân số",
      dataIndex: "population",
      key: "population",
      align: "center",
      width: "25%"
    },
    {
      title: "",
      dataIndex: "actions",
      width: "25%",
      render: (text, item) => {
        return (
          <Space>
            <Button
              disabled={props.itemLoading}
              onClick={() => {
                props.onEdit(item.id);
              }}
            >
              Edit
            </Button>
            <Button
              disabled={props.itemLoading}
              onClick={() => {
                props.onDelete(item.id);
              }}
            >
              Delete
            </Button>
          </Space>
        );
      },
    },
  ];

  return (
    <Table
      loading={props.loading}
      dataSource={props.dataSource}
      columns={columns}
    />
  );
};

export default TableCities;
