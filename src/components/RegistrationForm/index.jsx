import { Typography } from "antd";

import { Button, Form, Input } from "antd";
import "./styles.css";
import { useWaitingButton } from "../../helpers/help-functions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registrateNewUserThunk } from "../../Redux/userSlice/user-async";

export const RegistrationForm = () => {
  const [loadings, enterLoading] = useWaitingButton();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cb = () => navigate("/login", { replace: true });
  const { Title } = Typography;

  const registerHandler = (event) => {
    enterLoading(0);
    console.log(event);
    const { name, surname, email, password, confirmPassword } = event;

    const formData = {
      name,
      surname,
      email: email.toLowerCase(),
      password,
      confirmPassword,
    };

    dispatch(registrateNewUserThunk({ formData, cb }));
  };
  return (
    <div className="register_page_container">
      <Title level={2}>Registration</Title>

      <Form
        autoComplete="off"
        labelCol={{ span: 10 }}
        labelAlign={"left"}
        wrapperCol={{ span: 18 }}
        onFinish={registerHandler}
        onFinishFailed={(error) => {
          console.log({ error });
        }}
      >
        <Form.Item
          name={"name"}
          label={"First Name"}
          rules={[
            {
              required: true,
              message: "Please enter your name",
            },
            { whitespace: true },
            { min: 3 },
          ]}
          hasFeedback
        >
          <Input placeholder="Type your name" />
        </Form.Item>
        <Form.Item
          name={"surname"}
          label={"Last Name"}
          rules={[
            {
              required: true,
              message: "Please enter your surname",
            },
            { whitespace: true },
            { min: 3 },
          ]}
          hasFeedback
        >
          <Input placeholder="Type your surname" />
        </Form.Item>
        <Form.Item
          name={"email"}
          label={"Email"}
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter valid email" },
          ]}
          hasFeedback
        >
          <Input placeholder="Type Your email" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
            },
            { min: 6 },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Type your password" />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={["password"]}
          rules={[
            {
              required: true,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password").trim() === value) {
                  return Promise.resolve();
                }
                return Promise.reject("The passwords does not match.");
              },
            }),
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Confirm your password" />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }}>
          <Button block type="primary" htmlType="submit" loading={loadings[0]}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
