import { useEffect } from "react";
import { Form, Input, InputNumber, Modal } from "antd";

const Exam02 = (props) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (!props.open) {
      form.resetFields();
    }
  }, [props.open]);

  useEffect(() => {
    if (props.open && props.formData.id) {
      form.setFieldsValue(props.formData);
    }
  }, [props.open, props.formData]);

  const onSubmit = async () => {
    const values = await form.validateFields();
    props.onSubmit(props.formData.id, values);
  };

  const onCancel = () => {
    props.setOpen(false);
  };

  return (
    <Modal open={props.open} onOk={onSubmit} onCancel={onCancel}>
      <Form form={form} layout="vertical">
        <Form.Item
          name="name"
          label="Tên họ"
          rules={[{ required: true, message: "Họ tên là bắt buộc" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Email là bắt buộc" },
            { type: "email", message: "Email format không đúng" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="studentId" label="Mã số học sinh">
          <Input />
        </Form.Item>

        <Form.Item
          name="score"
          label="Điểm số"
          rules={[
            { required: true, message: "Email là bắt buộc" }
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item name="className" label="Lớp">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Exam02;
