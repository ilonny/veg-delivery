import React, { useState, useEffect } from "react";
import { Card, Col, Row, Button, Input } from "antd";
import { API_HOST } from "../../lib";
import { Link } from "react-router-dom";

const { Meta } = Card;
export const RestaurantPage = (props) => {
    const [data, setData] = useState(null);
    const { id } = props.location.state;
    const [startTime, setStartTime] = useState(false);
    const [endTime, setEndTime] = useState(false);
    useEffect(() => {
        getData();
    }, [id]);
    const getData = () => {
        try {
            fetch(API_HOST + "/restaurant/get-data?id=" + id)
                .then((res) => res.json())
                .then((res) => {
                    setData(res);
                    setStartTime(res.time_start);
                    setEndTime(res.time_end);
                });
        } catch (e) {
            console.log(e);
        }
    };
    let addrText;
    try {
        addrText = JSON.parse(data.address_json).value;
    } catch (e) {
        addrText = "Не определено";
    }
    console.log("rest data", data);

    if (!data) return null;
    // const reOpenRest = () => {};

    const changeTime = () => {
        fetch(
            API_HOST +
                `/restaurant/edit-rest-time?id=${data.id}&start=${startTime}&end=${endTime}`
        )
            .then((res) => res.json())
            .then((res) => {
                if (res.status === 200) {
                    alert("Успешно сохранено");
                }
                getData();
            });
    };
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
                    <br />
                    <br />
                    <Link
                        to={{ pathname: "restaurant-modif", state: { id: id } }}
                    >
                        <Button>Модификаторы</Button>
                    </Link>
                    <br />
                    <br />
                    <label>
                        <span>Радиус доставки (км)</span>
                        <Input
                            value={data.delivery_radius}
                            onChange={(e) =>
                                fetch(
                                    API_HOST +
                                        `/restaurant/edit-rest-radius?id=${data.id}&value=${e.target.value}`
                                )
                            }
                        />
                    </label>
                    <br />
                    <br />
                    <Link
                        to={{
                            pathname: "restaurant-delivery",
                            state: { id: id },
                        }}
                    >
                        <Button>Стоимость доставки</Button>
                    </Link>
                    <br></br>
                    <br></br>
                    <label>
                        <span>Время открытия (чч:мм)</span>
                        <Input
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                        />
                    </label>
                    <label>
                        <span>Время закрытия (чч:мм)</span>
                        <Input
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                        />
                    </label>
                    <br />
                    <Button onClick={() => changeTime()}>Сохранить время</Button>
                </Col>
            </Row>
        </>
    );
};
