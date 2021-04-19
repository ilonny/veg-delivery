import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Divider,
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
  const [partners, setPartners] = useState([]);
  const getData = () => {
    fetch(API_HOST + "/api/partners")
      .then((res) => res.json())
      .then((res) => {
        setPartners(res);
      });
  };
  useEffect(() => {
    getData();
  }, []);

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
          getData();
          // document.location.href = "/";
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
      <h2>Список партнеров</h2>
      {partners?.map((el) => {
        return (
          <div key={el.id}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p>{el.id}</p>
              <p>{el.username}</p>
              <p>{el.email}</p>
              <p>{el.created_at}</p>
              <Button
                onClick={() => {
                  if (window.confirm("Подтвердите удаление")) {
                    fetch(API_HOST + "/api/partner-delete?id=" + el.id)
                      .then((res) => res.json())
                      .then(() => getData());
                  }
                }}
              >
                Удалить
              </Button>
            </div>
            <Divider />
          </div>
        );
      })}
      <Divider />
      <h2>Добавить партнера</h2>
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
        <Form.Item
          label="email"
          name="email"
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
          Добавить
        </Button>
      </Form>
    </>
  );
};
