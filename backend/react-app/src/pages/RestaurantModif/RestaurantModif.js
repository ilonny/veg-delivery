import React, { useState, useEffect } from "react";
import {
    Card,
    // Col,
    // Row,
    // Select,
    Button,
    Input,
    Divider,
    Collapse,
} from "antd";
import { API_HOST } from "../../lib";
const { Meta } = Card;
const { Panel } = Collapse;

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
    return (
        <>
            <div>Модификаторы ресторана</div>
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
            <Divider/>
        </>
    );
};
