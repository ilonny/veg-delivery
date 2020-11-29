import React, { useState, useEffect } from "react";
import { Card, Col, Row, Button, Input } from "antd";
import { API_HOST } from "../../lib";
import { Link } from "react-router-dom";

const { Meta } = Card;

function debounce(f, ms) {
  let isCooldown = false;

  return function () {
    if (isCooldown) return;

    f.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => (isCooldown = false), ms);
  };
}

export const RestaurantPage = (props) => {
  const [data, setData] = useState(null);
  const { id } = props.location.state;
  const [startTime, setStartTime] = useState(false);
  const [endTime, setEndTime] = useState(false);
  const [restInfo, setRestInfo] = useState(false);
  const [deliveryTime, setDeliveryTime] = useState(false);
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
          setRestInfo(res.restaurant_info);
          setDeliveryTime(res.delivery_time);
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

  const changeDeliveryTime = () => {
    fetch(
      API_HOST +
        `/restaurant/edit-rest-deliverytime?id=${data.id}&time=${deliveryTime}`
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
            <Meta title={data.name} description={data.description} />
            <p>{addrText}</p>
            <p>Радиус доставки {data.delivery_radius} км</p>
          </Card>
        </Col>
        <Col className="gutter-row" span={10}>
          <Link to={{ pathname: "restaurant-order", state: { id: id } }}>
            <Button>Заказы</Button>
          </Link>
          <br />
          <br />
          <Link to={{ pathname: "restaurant-menu", state: { id: id } }}>
            <Button>Меню</Button>
          </Link>
          <br />
          <br />
          <Link to={{ pathname: "restaurant-modif", state: { id: id } }}>
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
                ).then((res) => getData())
              }
            />
          </label>
          <br />
          <br />
          <label>
            <span>Описание ресторана</span>
            <Input
              value={data.description}
              onChange={debounce((e) => {
                fetch(
                  API_HOST +
                    `/restaurant/edit-rest-desc?id=${data.id}&value=${e.target.value}`
                ).then((res) => getData());
              }, 1000)}
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

          <br />
          <br />
          <label>
            <span>Сроки доставкии (например "40-50 мин")</span>
            <Input
              value={deliveryTime}
              onChange={(e) => setDeliveryTime(e.target.value)}
            />
          </label>
          <br />
          <Button onClick={() => changeDeliveryTime()}>Сохранить время</Button>

          <br />
          <br />
          <label>
            <span>Минимальная сумма заказа (руб)</span>
            <Input
              value={data.min_price}
              onChange={(e) =>
                fetch(
                  API_HOST +
                    `/restaurant/edit-rest-min-price?id=${data.id}&value=${e.target.value}`
                ).then((res) => getData())
              }
            />
          </label>
          <br />
          <br />
          <label>
            <span>Юридиская информация (название ООО, адрес, телефон)</span>
            <Input
              value={restInfo}
              onChange={(e) => setRestInfo(e.target.value)}
            />
            <Button
              onClick={() => {
                fetch(
                  API_HOST +
                    `/restaurant/edit-rest-info?id=${data.id}&value=${restInfo}`
                ).then((res) => getData());
              }}
            >
              Сохранить
            </Button>
          </label>
          <br />
          <br />
          <Button
            onClick={() => {
              fetch(
                API_HOST +
                  `/restaurant/edit-rest-active?id=${data.id}&value=${
                    data.active == "1" ? 0 : 1
                  }`
              ).then((res) => getData());
            }}
          >
            Ресторан {data.active == "1" ? "открыт" : "закрыт"} (нажмите чтобы{" "}
            {data.active == "1" ? "закрыть" : "открыть"})
          </Button>
          <br />
          <br />
          <Link
            to={{
              pathname: "restaurant-discount",
              state: { id: id },
            }}
          >
            <Button>Скидки, акции и промокоды</Button>
          </Link>
          <br />
          <br />
          <label>
            <span>Загрузить новое изображение</span>
            <input
              type="file"
              onChange={(e) => {
                let formData = new FormData();
                formData.append("file", e.target.files[0]);
                fetch(
                  API_HOST + `/restaurant/change-rest-image?id=${data.id}`,
                  {
                    method: "POST",
                    body: formData,
                  }
                ).then((res) => getData());
              }}
            />
          </label>
        </Col>
      </Row>
    </>
  );
};
