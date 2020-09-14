import React, { useState, useEffect } from "react";
import { Card, Col, Row, Button } from "antd";
import { API_HOST } from "../../lib";
import { Link } from "react-router-dom";


const { Meta } = Card;
export const RestaurantPage = (props) => {
    const [data, setData] = useState(null);
    const { id } = props.location.state;
    useEffect(() => {
        try {
            fetch(API_HOST + "/restaurant/get-data?id=" + id)
                .then((res) => res.json())
                .then((res) => setData(res));
        } catch (e) {
            console.log(e);
        }
    }, [id]);
    let addrText;
    try {
        addrText = JSON.parse(data.address_json).value;
    } catch (e) {
        addrText = "Не определено";
    }
    if (!data) return null;
    // const reOpenRest = () => {};
    return (
        <>
            <Row gutter={[16, 16]}>
                <Col className="gutter-row" span={10}>
                    <Card
                        hoverable
                        style={{ width: "100%" }}
                        cover={<img alt="" src={API_HOST + "/" + data.image} />}
                    >
                        <Meta
                            title={data.name}
                            description={data.description}
                        />
                        <p>{addrText}</p>
                        <p>Радиус доставки {data.delivery_radius} км</p>
                    </Card>
                </Col>
                <Col className="gutter-row" span={10}>
                    <Link
                        to={{ pathname: "restaurant-menu", state: { id: id } }}
                    >
                        <Button>Меню</Button>
                    </Link>
                </Col>
            </Row>
        </>
    );
};