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

export const RestaurantDiscount = (props) => {
  const [data, setData] = useState(null);
  const { id } = props.location.state;
  const [newModif, setNewModif] = useState({ type: "promocode" });
  const [menu, setMenu] = useState([]);
  const types = [
    { value: "promocode", name: "Промокод" },
    { value: "hours", name: "Скидка в счастливые часы" },
    { value: "one_plus_one", name: "Скидка 1 + 1" },
  ];
  const getData = () => {
    fetch(API_HOST + "/restaurant/get-discount-list?restaurant_id=" + id)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  };
  useEffect(() => {
    getData();
    const formData = new FormData();
    formData.append("rest_id", id);
    fetch(API_HOST + "/restaurant/get-menu", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => setMenu(res.menu));
    //es
  }, []);
  const createModif = () => {
    const data = new FormData();
    data.append("rest_id", id);
    data.append("type", newModif.type ? newModif.type : "");
    data.append("name", newModif.name ? newModif.name : "");
    data.append(
      "discount_value",
      newModif.discount_value ? newModif.discount_value : ""
    );
    data.append(
      "price_start",
      newModif.price_start ? newModif.price_start : ""
    );
    data.append(
      "description",
      newModif.description ? newModif.description : ""
    );
    data.append("promocode", newModif.promocode ? newModif.promocode : "");
    data.append("time_start", newModif.time_start ? newModif.time_start : "");
    data.append("time_end", newModif.time_end ? newModif.time_end : "");
    data.append("items", newModif.items ? newModif.items : "");
    fetch(API_HOST + "/restaurant/create-rest-discount", {
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
  console.log("newModif", newModif);
  console.log("menu", menu);
  const renderInput = (label, name) => {
    const key = name;
    return (
      <label>
        <span>{label}</span>
        <Input
          onChange={(e) => {
            const modif = { ...newModif };
            modif[key] = e.target.value;
            setNewModif({ ...modif });
          }}
        />
      </label>
    );
  };
  const renderInputEdit = (id, label, name, value) => {
    return (
      <label>
        <span>{label}</span>
        <Input
          value={value}
          onChange={(e) => {
            fetch(
              API_HOST +
                `/restaurant/edit-discount?id=${id}&key=${name}&value=${e.target.value}`
            ).then((res) => getData());
          }}
        />
      </label>
    );
  };
  return (
    <>
      <div>Скидки, акции и промокоды</div>
      <Link to={{ pathname: "restaurant", state: { id } }}>
        <Button>Назад в меню</Button>
      </Link>
      <Divider />
      <label>
        <span>Тип скидки</span>
        <select
          style={{ width: "100%", height: 40 }}
          onChange={(e) => {
            setNewModif({ ...newModif, type: e.target.value });
          }}
        >
          {types.map((type) => {
            return (
              <option key={type.value} value={type.value}>
                {type.name}
              </option>
            );
          })}
        </select>
      </label>
      <br />
      {renderInput("Название", "name")}
      <br />
      {renderInput("Описание", "description")}
      <br />
      {renderInput("Промокод", "promocode")}
      <br />
      {renderInput(
        "Значение скидки (например 300 р или 20 %  - через пробел)",
        "discount_value"
      )}
      <br />
      {renderInput("Заказ от (р)", "price_start")}
      <br />
      {renderInput("Время начала действия (чч:мм)", "time_start")}
      <br />
      {renderInput("Время окончания действия (чч:мм)", "time_end")}
      <br />
      <label>
        <span>На какие блюда распространяется</span>
        <select
          multiple
          style={{ width: "100%" }}
          onChange={(e) => {
            const val = [...e.target.options]
              .filter((x) => x.selected)
              .map((x) => x.value);
            setNewModif({ ...newModif, items: val });
          }}
        >
          {menu.map((m) => {
            return (
              <optgroup label={m.name}>
                {m.menu.map((item) => {
                  return <option value={item.id}>{item.name}</option>;
                })}
              </optgroup>
            );
          })}
        </select>
      </label>
      <br />
      <br />
      <Button onClick={createModif}>Добавить акцию</Button>
      <Divider />
      <h3>Список акций</h3>
      {data &&
        data.length &&
        data.map((modif) => {
          return (
            <div key={modif.id}>
              <select
                style={{ width: "100%", height: 40 }}
                onChange={(e) => {
                  fetch(
                    API_HOST +
                      `/restaurant/edit-discount?id=${modif.id}&key=type&value=${e.target.value}`
                  ).then((res) => getData());
                }}
                value={modif.type}
              >
                {types.map((type) => {
                  return (
                    <option key={type.value} value={type.value}>
                      {type.name}
                    </option>
                  );
                })}
              </select>
              <br />
              {renderInputEdit(modif.id, "Название", "name", modif.name)}
              <br />
              {renderInputEdit(
                modif.id,
                "Описание",
                "description",
                modif.description
              )}
              <br />
              {renderInputEdit(
                modif.id,
                "Промокод",
                "promocode",
                modif.promocode
              )}
              <br />
              {renderInputEdit(
                modif.id,
                "Значение скидки (например 300 р или 20 %  - через пробел)",
                "discount_value",
                modif.discount_value
              )}
              <br />
              {renderInputEdit(
                modif.id,
                "Заказ от (р)",
                "price_start",
                modif.price_start
              )}
              <br />
              {renderInputEdit(
                modif.id,
                "Время начала действия (чч:мм)",
                "time_start",
                modif.time_start
              )}
              <br />
              {renderInputEdit(
                modif.id,
                "Время окончания действия (чч:мм)",
                "time_end",
                modif.time_end
              )}
              <br />
              <label>
                <span>На какие блюда распространяется</span>
                <select
                  multiple
                  style={{ width: "100%" }}
                  value={modif.items ? modif.items.split(",") : []}
                  onChange={(e) => {
                    const val = [...e.target.options]
                      .filter((x) => x.selected)
                      .map((x) => x.value);
                    fetch(
                      API_HOST +
                        `/restaurant/edit-discount?id=${modif.id}&key=items&value=${val}`
                    ).then((res) => getData());
                  }}
                >
                  {menu.map((m) => {
                    return (
                      <optgroup label={m.name}>
                        {m.menu.map((item) => {
                          return <option value={item.id}>{item.name}</option>;
                        })}
                      </optgroup>
                    );
                  })}
                </select>
              </label>
              <br />
              <br />
              <Button
                onClick={() => {
                  if (window.confirm("Подтвердите удаление")) {
                    fetch(
                      API_HOST + `/restaurant/delete-discount?id=${modif.id}`
                    ).then((res) => getData());
                  }
                }}
              >
                Удалить акцию
              </Button>
              <Divider />
            </div>
          );
        })}
    </>
  );
};
