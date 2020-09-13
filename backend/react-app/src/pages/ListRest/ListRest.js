import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "antd";
import { API_HOST } from "../../lib";
const { Meta } = Card;

export const ListRest = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch(API_HOST + "/restaurant/list?token=ZWmGuABp3N6")
            .then((res) => res.json())
            .then((res) => setList(res));
    }, []);
    // console.log("list is", list);
    return (
        <>
            {!list.length ? (
                "Загрузка"
            ) : (
                <Row gutter={[16, 16]}>
                    {list.map((rest) => {
                        const { value } = JSON.parse(rest.address_json);
                        return (
                            <Col className="gutter-row" span={6} key={rest.id}>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={
                                        <img
                                            alt=""
                                            src={API_HOST + "/" + rest.image}
                                        />
                                    }
                                >
                                    <Meta
                                        title={rest.name}
                                        description={rest.name + "\n" + value}
                                    />
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            )}
        </>
    );
};
