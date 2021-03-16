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

export const RestaurantUsers = (props) => {
  const [data, setData] = useState(null);
  const { id } = props.location.state;
  console.log("RestaurantUsers", id);
  const [newModif, setNewModif] = useState({});
  const [menu, setMenu] = useState([]);
  const types = [
    { value: "promocode", name: "Промокод" },
    { value: "hours", name: "Скидка в счастливые часы" },
    { value: "one_plus_one", name: "Скидка 1 + 1" },
  ];
  const getData = () => {
    fetch(API_HOST + "/restaurant/get-manager-list?restaurant_id=" + id)
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
      <h3>Список пользователей филиала</h3>
      <div>
        {renderInput("Логин", "login")}
        {renderInput("Пароль", "password")}
        {renderInput("Email", "email")}
        <Button
          onClick={() => {
            let data = new FormData();
            data.append("login", newModif?.login);
            data.append("email", newModif?.email);
            data.append("password", newModif?.password);
            data.append("rest_id", id);
            fetch(API_HOST + "/restaurant/manager-add", {
              method: "POST",
              body: data,
            })
              .then((res) => res.json())
              .then((res) => {
                if (res.status === 200) {
                  getData();
                } else {
                  alert("Ошибка при создании пользователя");
                }
              })
              .catch((err) => {
                alert("Ошибка при создании пользователя");
              });
          }}
        >
          Создать
        </Button>
      </div>
      <Divider />
      <div>
        {data?.map((el) => {
          return (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p>{el.id}</p>
                <p>{el.login}</p>
                <Button
                  onClick={() => {
                    if (window.confirm("Подтвердите удаление")) {
                      fetch(API_HOST + "/restaurant/manager-delete?id=" + el.id)
                        .then((res) => res.json())
                        .then(() => getData());
                    }
                  }}
                >
                  Удалить
                </Button>
              </div>
              <Divider />
            </>
          );
        })}
      </div>
    </>
  );
};
