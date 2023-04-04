import { Table, Button } from "antd";

const Exam02 = (props) => {
  
  const columns = [
    {
      title: "Tên học sinh",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Mã số học sinh",
      dataIndex: "studentId",
      key: "studentId",
    },
    {
      title: "Điểm",
      dataIndex: "score",
      key: "score",
    },
    {
      title: "Lớp",
      dataIndex: "className",
      key: "className",
    },
    {
      title: "",
      dataIndex: "actions",
      render: (text, item) => {
        return (
          <div>
            <Button
              onClick={() => {
                props.onEdit(item);
              }}
            >
              Edit
            </Button>
            <Button
              onClick={() => {
                props.onRemove(item);
              }}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <Table dataSource={props.dataSource} columns={columns} />
  );
};

export default Exam02;
