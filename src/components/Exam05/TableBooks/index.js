import { Table, Button } from "antd";
import { Actions } from "./styles";

const TableBooks = (props) => {
  const columns = [
    {
      title: "Tiêu đề",
      dataIndex: "title",
      key: "title",
      width: "15%",
    },
    {
      title: "Tác giả",
      dataIndex: "author",
      key: "author",
      width: "15%",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Thể loại",
      dataIndex: "type",
      key: "type",
      width: "10%",
    },
    {
      title: "Số trang",
      dataIndex: "page",
      key: "page",
      width: "10%",
    },
    {
      title: "",
      dataIndex: "actions",
      width: "20%",
      render: (text, item) => {
        return (
          <Actions>
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
          </Actions>
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

export default TableBooks;
