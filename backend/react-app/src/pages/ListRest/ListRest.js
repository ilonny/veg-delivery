import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "antd";
import { API_HOST } from "../../lib";
import { Link } from "react-router-dom";
const { Meta } = Card;
export const ListRest = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        try {
            fetch(API_HOST + "/restaurant/list?token=ZWmGuABp3N6")
                .then((res) => res.json())
                .then((res) => setList(res));
        } catch (e) {
            console.log(e);
        }
    }, []);
    // console.log("list is", list);
    return (
        <>
            {!list.length ? (
                "Загрузка"
            ) : (
                <Row gutter={[16, 16]}>
                    {list.map((rest) => {
                        let addrText;
                        try {
                            addrText = JSON.parse(rest.address_json).value;
                        } catch (e) {
                            addrText = "Не определено";
                        }
                        return (
                            <Link to={{pathname: '/restaurant', state: {id: rest.id}}} key={rest.id}>
                                <Col
                                    className="gutter-row"
                                    span={6}
                                >
                                    <Card
                                        hoverable
                                        style={{ width: 240 }}
                                        cover={
                                            <img
                                                alt=""
                                                src={
                                                    API_HOST + "/" + rest.image
                                                }
                                            />
                                        }
                                    >
                                        <Meta
                                            title={rest.name}
                                            description={
                                                rest.description +
                                                "\n" +
                                                addrText
                                            }
                                        />
                                    </Card>
                                </Col>
                            </Link>
                        );
                    })}
                </Row>
            )}
        </>
    );
};
