import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "antd";
import { API_HOST } from "../../lib";
import { Link } from "react-router-dom";
const { Meta } = Card;
export const ListRest = (props) => {
  const [list, setList] = useState([]);
  console.log("ListRest props", props);
  const { user } = props?.location?.state;
  console.log("user??", user);
  const getData = () => {
    try {
      fetch(
        API_HOST +
          `/restaurant/list?token=${user.id === 1 ? "ZWmGuABp3N6" : ""}&user=${
            user.id
          }`
      )
        .then((res) => res.json())
        .then((res) => setList(res));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  // console.log("list is", list);
  return (
    <>
      {!list.length ? (
        "Рестораны отсутствуют"
      ) : (
        <Row gutter={[16, 16]}>
          {list.map((rest) => {
            let addrText;
            try {
              addrText = JSON.parse(rest.address_json).value;
            } catch (e) {
              addrText = "Не определено";
            }
            return (
              <Link
                to={{ pathname: "/restaurant", state: { id: rest.id, user } }}
                key={rest.id}
              >
                <Col className="gutter-row" span={6}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="" src={API_HOST + "/" + rest.image} />}
                  >
                    <Meta
                      title={rest.name}
                      description={rest.description + "\n" + addrText}
                    />
                    {user.role !== "manager" && (
                      <>
                        <button
                          style={{
                            cursor: "pointer",
                            padding: 10,
                            marginTop: 10,
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            console.log("rest copy", rest);
                            fetch(`${API_HOST}/restaurant/copy?id=${rest.id}`)
                              .then((res) => res.json())
                              .then((res) => {
                                if (res.status == 200) {
                                  getData();
                                } else {
                                  alert(
                                    "Ошибка при копировании, попробуйте позже"
                                  );
                                }
                              })
                              .catch((err) => {
                                alert(
                                  "Ошибка при копировании, попробуйте позже"
                                );
                              });
                          }}
                        >
                          Скопировать ресторан
                        </button>
                        <button
                          style={{
                            cursor: "pointer",
                            padding: 10,
                            marginTop: 10,
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            console.log("rest delete", rest);
                            if (
                              window.confirm("Подтвердите удаление ресторана")
                            ) {
                              fetch(
                                `${API_HOST}/restaurant/delete?id=${rest.id}`
                              )
                                .then((res) => res.json())
                                .then((res) => {
                                  if (res.status == 200) {
                                    getData();
                                  } else {
                                    alert(
                                      "Ошибка при удалении, попробуйте позже"
                                    );
                                  }
                                })
                                .catch((err) => {
                                  alert(
                                    "Ошибка при удалении, попробуйте позже"
                                  );
                                });
                            }
                          }}
                        >
                          Удалить ресторан
                        </button>
                      </>
                    )}
                  </Card>
                </Col>
              </Link>
            );
          })}
        </Row>
      )}
    </>
  );
};
