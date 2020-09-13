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


export const AddRest = () => {
    const onFinish = (values) => {
        console.log("Success:", { values, value });
        let input = document.querySelector('input[type="file"]');
        let data = new FormData();
        Object.keys(values).forEach((key) => {
            if (key !== "dragger") {
                data.append(
                    key,
                    key === "address"
                        ? JSON.stringify(values[key])
                        : values[key]
                );
            }
        });
        data.append("file", input.files[0]);
        // data.append("address", JSON.stringify(value));
        data.append("user", "hubot");
        fetch(API_HOST + "/restaurant/add", {
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
                    window.location.reload();
                } else {
                }
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
                    label="Название"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Обязательное поле",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item label="Описание" name="description">
                    <Input />
                </Form.Item>
                <Form.Item label="Изобржаение" name="file">
                    <Input type="file" />
                </Form.Item>
                <Form.Item label="Адрес" name="address">
                    <AddressSuggestions
                        token="eadbc452286d23c7163b38989884d5ae40d08ade"
                        value={value}
                        onChange={setValue}
                    />
                </Form.Item>
                <Form.Item label="Радиус доставки (км)" name="delivery_radius">
                    <Input />
                </Form.Item>
                <Form.Item name="active" valuePropName="checked">
                    <Checkbox>Активен</Checkbox>
                </Form.Item>
                <Button type="primary" htmlType="submit">
                    Сохранить
                </Button>
            </Form>
        </>
    );
};
