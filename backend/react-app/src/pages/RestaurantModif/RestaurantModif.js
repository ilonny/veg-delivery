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

export const RestaurantModif = (props) => {
    const [data, setData] = useState(null);
    const { id } = props.location.state;
    const [newModif, setNewModif] = useState({ type: "single" });

    const getData = () => {
        fetch(API_HOST + "/restaurant/get-modif-list?restaurant_id=" + id)
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
        data.append("name", newModif.name);
        data.append("type", newModif.type);
        data.append(
            "parent_id",
            newModif.parent_id ? newModif.parent_id : null
        );
        fetch(API_HOST + "/restaurant/create-rest-modif", {
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
            <div>Модификаторы ресторана</div>
            <Link to={{pathname: "restaurant", state: {id}}}>
                <Button>Назад в меню</Button>
            </Link>
            <Divider />
            <label>
                <span>Название</span>
                <Input
                    onChange={(e) =>
                        setNewModif({ ...newModif, name: e.target.value })
                    }
                />
            </label>
            <label>
                <span>Тип</span>
                <select
                    style={{ width: "100%", height: 40, marginBottom: 10 }}
                    onChange={(e) =>
                        setNewModif({ ...newModif, type: e.target.value })
                    }
                >
                    <option value="single">Одиночный выбор из списка</option>
                    <option value="multiple">
                        Множественный выбор из списка
                    </option>
                </select>
            </label>
            <Button onClick={createModif}>Добавить модификатор</Button>
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
                                <h3>{modif.name}</h3>
                                <Button onClick={() => deleteModif(modif.id)}>
                                    Удалить
                                </Button>
                            </div>
                            <br />
                            <form id={"form" + modif.id}>
                                <Input name="name" placeholder="Название" />
                                <Input name="price" placeholder="Цена" />
                                <Input
                                    name="rest_id"
                                    type="hidden"
                                    value={id}
                                />
                                <Input
                                    name="parent_id"
                                    type="hidden"
                                    value={modif.id}
                                />
                                <Button
                                    onClick={() => {
                                        const formData = new FormData(
                                            document.getElementById(
                                                "form" + modif.id
                                            )
                                        );
                                        fetch(
                                            API_HOST +
                                                "/restaurant/create-rest-modif-variant",
                                            {
                                                method: "POST",
                                                body: formData,
                                            }
                                        )
                                            .then((res) => res.json())
                                            .then((res) => {
                                                getData();
                                                // setNewModif({type: "single"})
                                            });
                                    }}
                                >
                                    Добавить вариант
                                </Button>
                            </form>
                            <br />
                            {modif.list.map((el) => {
                                return (
                                    <Card key={el.id}>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            <p>{el.name}</p>
                                            <span>
                                                <span>{el.price} руб</span>
                                                <Button
                                                    onClick={() =>
                                                        deleteModif(el.id)
                                                    }
                                                    style={{ marginLeft: 20 }}
                                                >
                                                    Удалить
                                                </Button>
                                            </span>
                                        </div>
                                    </Card>
                                );
                            })}
                            <Divider />
                        </div>
                    );
                })}
        </>
    );
};
