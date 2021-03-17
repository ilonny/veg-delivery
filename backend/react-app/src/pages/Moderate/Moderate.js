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
  Collapse,
} from "antd";
import { API_HOST } from "../../lib";
import { Link } from "react-router-dom";
// const { Meta } = Card;
const { Panel } = Collapse;

export const Moderate = (props) => {
  const [data, setData] = useState([]);
  const { id } = props.location.state;
  const [newModif, setNewModif] = useState({ type: "single" });

  const getData = () => {
    fetch(API_HOST + "/restaurant/get-moderate-list")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  };
  const getMenu = getData;
  useEffect(() => {
    getData();
    //es
  }, []);

  console.log("data", data);
  return (
    <>
      <div>Модерация блюд</div>
      {data.map((item) => {
        return (
          <>
            <Collapse key={item.id} defaultActiveKey={[]}>
              <Panel
                header={
                  <>
                    {item.name}
                    {!item.moderate && " На модерации"} (
                    {item?.restaurant?.name}{" "}
                    {JSON.parse(item?.restaurant?.address_json).value})
                  </>
                }
                key="1"
              >
                <div
                  style={{
                    margin: 15,
                  }}
                >
                  <Card>
                    <label>
                      <span>Название - {item.name}</span>
                      <Input
                        placeholder="Новое название"
                        onChange={(e) => {
                          fetch(
                            API_HOST +
                              `/restaurant/change-item?id=${item.id}&key=name&value=${e.target.value}`
                          ).then((res) => getMenu());
                        }}
                      />
                    </label>
                    <img
                      src={API_HOST + "/" + item.image}
                      style={{
                        maxWidth: 300,
                      }}
                    />
                    <input
                      type="file"
                      onChange={(e) => {
                        let data = new FormData();
                        data.append("file", e.target.files[0]);
                        fetch(
                          API_HOST +
                            `/restaurant/change-item-image?id=${item.id}
                                                                        `,
                          {
                            method: "POST",
                            body: data,
                          }
                        ).then((res) => getMenu());
                      }}
                    />
                    <p>
                      <label>
                        <span>Описание - {item.description}</span>
                        <Input
                          placeholder="Новое описание"
                          onChange={(e) => {
                            fetch(
                              API_HOST +
                                `/restaurant/change-item?id=${item.id}&key=description&value=${e.target.value}`
                            ).then((res) => getMenu());
                          }}
                        />
                      </label>
                    </p>
                    <p>
                      <label>
                        <span> Вес - {item.weight} гр</span>
                        <Input
                          placeholder="Новый вес"
                          onChange={(e) => {
                            fetch(
                              API_HOST +
                                `/restaurant/change-item?id=${item.id}&key=weight&value=${e.target.value}`
                            ).then((res) => getMenu());
                          }}
                        />
                      </label>
                    </p>
                    <p>
                      <label>
                        <span>Цена - {item.price} руб</span>
                        <Input
                          placeholder="Новая цена"
                          onChange={(e) => {
                            fetch(
                              API_HOST +
                                `/restaurant/change-item?id=${item.id}&key=price&value=${e.target.value}`
                            ).then((res) => getMenu());
                          }}
                        />
                      </label>
                    </p>
                    <p>
                      <label>
                        <span>
                          {Number(item.active) ? "активно" : "не активно"}
                        </span>
                        <input
                          type="checkbox"
                          checked={!!Number(item.active)}
                          onChange={(e) => {
                            fetch(
                              API_HOST +
                                `/restaurant/change-item?id=${
                                  item.id
                                }&key=active&value=${e.target.checked ? 1 : 0}`
                            ).then((res) => getMenu());
                          }}
                        />
                      </label>
                    </p>
                    {/* <p>
                                            <label>
                                                <span>Модификаторы</span>
                                                <select
                                                    multiple
                                                    value={
                                                        item.modificators
                                                            ? item.modificators.split(",")
                                                            : []
                                                    }
                                                    style={{
                                                        width: "100%",
                                                    }}
                                                    onChange={(e) => {
                                                        const val = [...e.target.options]
                                                            .filter((x) => x.selected)
                                                            .map((x) => x.value);
                                                        fetch(
                                                            API_HOST +
                                                            `/restaurant/change-item?id=${item.id}&key=modificators&value=${val}`
                                                        ).then((res) => getMenu());
                                                    }}
                                                >
                                                    {data.modificators.map((modif) => {
                                                        return (
                                                            <option
                                                                key={modif.id}
                                                                value={modif.id}
                                                            >
                                                                {modif.name}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                            </label>
                                        </p> */}
                    <p>
                      <label>
                        <span>Удалить блюдо </span>
                        <Button
                          onClick={(e) => {
                            if (window.confirm("Подтвердите удаление")) {
                              fetch(
                                API_HOST +
                                  `/restaurant/delete-item?id=${item.id}`
                              ).then((res) => getMenu());
                            }
                          }}
                        >
                          Удалить
                        </Button>
                      </label>
                    </p>
                    <p>
                      <label>
                        <span>Согласовать блюдо </span>
                        <Button
                          onClick={(e) => {
                            if (window.confirm("Подтвердите действие")) {
                              fetch(
                                API_HOST +
                                  `/restaurant/approve-item?id=${item.id}`
                              ).then((res) => getMenu());
                            }
                          }}
                        >
                          Согласовать
                        </Button>
                      </label>
                    </p>
                  </Card>
                </div>
              </Panel>
            </Collapse>
          </>
        );
      })}
    </>
  );
};
