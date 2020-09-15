/* eslint-disable */
import React, { useState, useEffect } from "react";
import {
    Card,
    // Col,
    // Row,
    // Select,
    Button,
    Input,
    Divider,
    // Collapse,
} from "antd";
import { API_HOST } from "../../lib";
import { Link } from "react-router-dom";
// const { Meta } = Card;
// const { Panel } = Collapse;

export const RestaurantDelivery = (props) => {
    const [data, setData] = useState(null);
    const { id } = props.location.state;
    const [newModif, setNewModif] = useState({ type: "single" });

    const getData = () => {
        fetch(API_HOST + "/restaurant/get-delivery-list?restaurant_id=" + id)
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            });
    };
    useEffect(() => {
        getData();
        //es
    }, []);
    const createModif = () => {
        const data = new FormData();
        data.append("rest_id", id);
        data.append("price", newModif.price);
        data.append("price_start", newModif.price_start);
        fetch(API_HOST + "/restaurant/create-rest-delivery", {
            method: "POST",
            body: data,
        })
            .then((res) => res.json())
            .then((res) => {
                getData();
                // setNewModif({type: "single"})
            });
    };

    const deleteModif = (modifId) => {
        if (window.confirm("Подтверждение удаления")) {
            fetch(
                API_HOST + "/restaurant/delete-rest-modif?id=" + modifId
            ).then((res) => getData());
        }
    };
    console.log("data", data);
    return (
        <>
            <div>Доставка ресторана</div>
            <Link to={{ pathname: "restaurant", state: { id } }}>
                <Button>Назад в меню</Button>
            </Link>
            <Divider />
            <label>
                <span>Заказ от</span>
                <Input
                    onChange={(e) =>
                        setNewModif({
                            ...newModif,
                            price_start: e.target.value,
                        })
                    }
                />
            </label>
            <label>
                <span>Стоимость доставки </span>
                <Input
                    onChange={(e) =>
                        setNewModif({ ...newModif, price: e.target.value })
                    }
                />
            </label>
            <Button onClick={createModif}>Добавить доставку</Button>
            <Divider />
            {data &&
                data.length &&
                data.map((modif) => {
                    return (
                        <div key={modif.id}>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <label style={{ flex: 1 }}>
                                    <span>Заказ от</span>
                                    <Input
                                        value={modif.price_start}
                                        onChange={(e) => {
                                            fetch(
                                                API_HOST +
                                                    `/restaurant/edit-delivery?id=${modif.id}&key=price_start&value=${e.target.value}`
                                            ).then((res) => getData());
                                        }}
                                    />
                                </label>
                                <label style={{ flex: 1, padding: 20 }}>
                                    <span>Стоимость доставки</span>
                                    <Input
                                        value={modif.price}
                                        onChange={(e) => {
                                            fetch(
                                                API_HOST +
                                                    `/restaurant/edit-delivery?id=${modif.id}&key=price&value=${e.target.value}`
                                            ).then((res) => getData());
                                        }}
                                    />
                                </label>
                                <div>
                                    {/* <label>&nbsp;</label> */}
                                    <br></br>
                                    <Button
                                        onClick={() => {
                                            if (
                                                window.confirm(
                                                    "Подтвердите удаление"
                                                )
                                            ) {
                                                fetch(
                                                    API_HOST +
                                                        `/restaurant/delete-delivery?id=${modif.id}`
                                                ).then((res) => getData());
                                            }
                                        }}
                                    >
                                        Удалить
                                    </Button>
                                </div>
                            </div>
                            <Divider />
                        </div>
                    );
                })}
        </>
    );
};
