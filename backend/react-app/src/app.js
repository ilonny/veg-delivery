import React, { useState } from "react";
import { connect } from "react-redux";
// import { mainRedcuer } from "./lib/store";
import { hot } from "react-hot-loader";
import { Normalize } from "styled-normalize";

import { Routes } from "./routes";
import { GlobalStyles } from "./global-styles";
import "antd/dist/antd.css";
import { Layout, Menu, Form, Input, Button } from "antd";

import { Link } from "react-router-dom";
import { API_HOST } from "./lib";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const _MainComp = (props) => {
    // console.log("props", props);
    const { user } = props;
    if (!user) {
        const onFinish = (values) => {
            console.log("Success:", values);
            const data = new FormData();
            data.append("login", values.login);
            data.append("password", values.password);
            fetch(API_HOST + "/user/login", {
                method: "POST",
                body: data,
            })
                .then((res) => res.json())
                .then((res) => {
                    if (res.status === 403) {
                        alert(res.message);
                    }
                    if (res.status === 200) {
                        props.setUser(res.userInfo);
                    }
                });
        };

        return (
            <>
                <Layout
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: "100vh",
                    }}
                >
                    <Form name="basic" onFinish={onFinish}>
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
                            <Input type="text" />
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
                            <Input type="password" />
                        </Form.Item>
                        <Button type="primary" htmlType="submit">
                            Войти
                        </Button>
                    </Form>
                </Layout>
            </>
        );
    }
    return (
        <>
            <Normalize />
            <GlobalStyles />
            <Layout style={{ flex: 1 }}>
                <Layout>
                    <Header>Header</Header>
                </Layout>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={[]}
                            defaultOpenKeys={[]}
                            style={{ height: "100%", borderRight: 0 }}
                        >
                            <SubMenu key="sub1" title="Рестораны">
                                <Menu.Item key="1">
                                    <Link to={"/list-rest"}>
                                        Список ресторанов
                                    </Link>
                                </Menu.Item>
                                {user.role === "admin" && (
                                    <Menu.Item key="2">
                                        <Link to={"/add-rest"}>
                                            Добавить ресторан
                                        </Link>
                                    </Menu.Item>
                                )}
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content style={{ padding: 30 }}>
                        <Routes />
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};

const MainComp = connect(
    (state) => ({
        user: state.main.user,
    }),
    (dispatch) => ({
        setUser: (user) => dispatch({ type: "SET_USER", user }),
    })
)(_MainComp);

export const App = hot(module)(() => (
    <>
        <MainComp />
    </>
));
