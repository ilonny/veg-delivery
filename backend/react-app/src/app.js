import * as React from "react";
import { hot } from "react-hot-loader";
import { Normalize } from "styled-normalize";

import { Routes } from "./routes";
import { GlobalStyles } from "./global-styles";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export const App = hot(module)(() => (
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
                            <Menu.Item key="1">Список ресторанов</Menu.Item>
                            <Menu.Item key="2">
                                <Link to={"/add-rest"}>Добавить ресторан</Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Content style={{ padding: 30 }}>
                    <Routes />
                </Content>
            </Layout>
        </Layout>
    </>
));
