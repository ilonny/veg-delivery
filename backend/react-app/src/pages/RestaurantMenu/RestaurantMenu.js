import React, { useState, useEffect } from "react";
import { Card, Col, Row, Button, Input, Divider, Select } from "antd";
import { API_HOST } from "../../lib";
const { Meta } = Card;

export const RestaurantMenu = (props) => {
    const [data, setData] = useState(null);
    const { id } = props.location.state;
    const [newCategoryValue, setNewCategoryValue] = useState(false);

    const getMenu = () => {
        const data = new FormData();
        data.append("rest_id", id);
        fetch(API_HOST + "/restaurant/get-menu", {
            method: "POST",
            body: data,
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setData(res);
            });
    };

    useEffect(() => {
        getMenu();
    }, []);

    const createCategory = () => {
        const data = new FormData();
        data.append("rest_id", id);
        data.append("category_name", newCategoryValue);
        fetch(API_HOST + "/restaurant/create-category-menu", {
            method: "POST",
            body: data,
        })
            .then((res) => res.json())
            .then((res) => getMenu());
    };

    const [newItem, setNewItem] = useState(false);
    const saveItem = () => {
        const formData = new FormData();
        let input = document.querySelector("#new_item_image");
        console.log('data is ', data);
        formData.append(
            "category_id",
            newItem.category_id ? newItem.category_id : data[0].id
        );
        formData.append("description", newItem.description);
        formData.append("name", newItem.name);
        formData.append("price", newItem.price);
        formData.append("weight", newItem.weight);
        formData.append("file", input.files[0]);
        formData.append("rest_id", id);
        fetch(API_HOST + "/restaurant/add-item", {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.status === 200) {
                    alert('успешно добавлено');
                    getMenu();
                    setNewItem(false);
                } else {
                    alert('не удалось добавить блюдо');
                    getMenu();
                }
            });
    };
    console.log("newItem", newItem);
    return (
        <>
            <Input onChange={(e) => setNewCategoryValue(e.target.value)} />
            <Button onClick={createCategory}>Добавить категорию</Button>
            <Divider />
            {data && data.length && (
                <div>
                    <h3>Добавление блюда</h3>
                    <label>
                        <span>Категория</span>
                        <select
                            style={{ width: "100%", height: 40 }}
                            onChange={(e) =>
                                setNewItem({
                                    ...newItem,
                                    category_id: e.target.value,
                                })
                            }
                        >
                            {data.map((cat) => (
                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                            ))}
                        </select>
                    </label>
                    <br />
                    <label>
                        <span>Название</span>
                        <Input
                            onChange={(e) =>
                                setNewItem({ ...newItem, name: e.target.value })
                            }
                        />
                    </label>
                    <label>
                        <span>Описание</span>
                        <Input
                            onChange={(e) =>
                                setNewItem({
                                    ...newItem,
                                    description: e.target.value,
                                })
                            }
                        />
                    </label>
                    <label>
                        <span>Вес (гр)</span>
                        <Input
                            onChange={(e) =>
                                setNewItem({
                                    ...newItem,
                                    weight: e.target.value,
                                })
                            }
                        />
                    </label>
                    <label>
                        <span>Цена (руб)</span>
                        <Input
                            onChange={(e) =>
                                setNewItem({
                                    ...newItem,
                                    price: e.target.value,
                                })
                            }
                        />
                    </label>
                    <label>
                        <span>Изображение</span>
                        <Input
                            type="file"
                            id="new_item_image"
                            onChange={(e) =>
                                setNewItem({ ...newItem, file: e.target.value })
                            }
                        />
                    </label>
                    <Button onClick={saveItem} style={{ marginTop: 20 }}>
                        Сохранить
                    </Button>
                </div>
            )}
            <Divider />
            {data &&
                data.length &&
                data.map((category) => {
                    return (
                        <div key={category.id}>
                            <h3
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                {category.name}
                                <div>
                                    <Input
                                        placeholder="сортировка"
                                        value={category.order_by}
                                        style={{ width: 150 }}
                                        onChange={(e) => {
                                            fetch(
                                                API_HOST +
                                                    `/restaurant/change-rest-category-order?id=${category.id}&value=${e.target.value}`
                                            ).then((res) => getMenu());
                                        }}
                                    />
                                    <Button
                                        onClick={() => {
                                            if (
                                                window.confirm(
                                                    "Подтвердите удаление категории"
                                                )
                                            ) {
                                                fetch(
                                                    API_HOST +
                                                        `/restaurant/delete-rest-category?id=${category.id}`
                                                ).then((res) => getMenu());
                                            }
                                        }}
                                    >
                                        Удалить
                                    </Button>
                                </div>
                            </h3>
                            <Divider />
                        </div>
                    );
                })}
        </>
    );
};
