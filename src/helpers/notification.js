import { message, notification } from "antd";

export const openNotificationWithIcon = (type, message) => {
  notification[type]({
    message,
  });
};

export const successMessage = (text) => {
  message.success(text);
};
