import React, { useEffect, useState } from "react";
import { PageTitle, RestCard } from "../../features";

export const RestList = (props) => {
  console.log("RestList props", props);
  const { getRestList, restaurants } = props;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getRestList({
      callback: () =>
        setTimeout(() => {
          setLoading(false);
        }, 1000),
    });
  }, [getRestList]);
  console.log("restaurants.length??", restaurants.length);
  return (
    <div>
      <PageTitle>Рестораны</PageTitle>
      {loading && <div>Загрузка ... </div>}
      {!loading && restaurants.length && (
        <>
          {restaurants.map((restaurant) => {
            return <RestCard restaurant={restaurant} key={restaurant.id} />;
          })}
        </>
      )}
      {!loading && !restaurants.length && (
        <div>Извините, по вашему адресу отсутствуют рестораны :( </div>
      )}
    </div>
  );
};
