import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  // Upload,
  // Select,
  // InputNumber,
  // Switch,
  // Radio,
  // Slider,
  // Rate,
  // Row,
  // Col,
} from "antd";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";
import { API_HOST } from "../../lib";

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};

export const AddUser = () => {
  const onFinish = (values) => {
    console.log("Success:", { values, value });
    let data = new FormData();
    Object.keys(values).forEach((key) => {
      if (key !== "dragger") {
        data.append(
          key,
          key === "address" ? JSON.stringify(values[key]) : values[key]
        );
      }
    });
    fetch(API_HOST + "/restaurant/user-add", {
      method: "POST",
      body: data,
      headers: {
        // "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        alert(res.message);
        if (res.status === 200) {
          alert("Пользователь успешно добавлен");
          document.location.href = "/";
        } else {
          alert("Ошибка добавления пользователя");
        }
      })
      .catch((err) => {
        alert("Ошибка добавления пользователя");
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [value, setValue] = useState();
  return (
    <>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{ minHeight: "100vh" }}
        initialValues={{
          active: true,
        }}
        {...layout}
      >
        <Form.Item
          label="Логин"
          name="login"
          rules={[
            {
              required: true,
              message: "Обязательное поле",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Пароль"
          name="password"
          rules={[
            {
              required: true,
              message: "Обязательное поле",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Сохранить
        </Button>
      </Form>
    </>
  );
};
