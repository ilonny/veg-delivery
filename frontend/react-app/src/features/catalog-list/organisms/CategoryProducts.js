import React from "react";
import styled from "styled-components";
import { Row } from "../../styled-components-layout";
import { Block } from "./block";
export const CategoryProducts = ({
  products = [
    {
      id: "1",
      restaurant_id: "1",
      menu_category_id: "24",
      name: "Сезонное блюдо",
      description: "Только сегодня",
      weight: "3332",
      price: "200",
      parent_id: null,
      image: "uploads/Сезонное блюдо_1600116723_image6.png",
      active: "1",
      modificators: "5,9",
      moderate: "1",
      modificators_info: [
        {
          id: "5",
          name: "Салат на выбор",
          type: "multiple",
          other: null,
          parent_id: null,
          restaurant_id: "1",
          price: null,
          variants: [
            {
              id: "6",
              name: "коул слоу",
              type: "multiple",
              other: null,
              parent_id: "5",
              restaurant_id: "1",
              price: "123",
            },
            {
              id: "8",
              name: "винегрет",
              type: "multiple",
              other: null,
              parent_id: "5",
              restaurant_id: "1",
              price: "33",
            },
          ],
        },
        {
          id: "9",
          name: "Салат на выбор2",
          type: "single",
          other: null,
          parent_id: null,
          restaurant_id: "1",
          price: null,
          variants: [],
        },
      ],
    },
    {
      id: "2",
      restaurant_id: "1",
      menu_category_id: "24",
      name: "Второе блюдо",
      description: "оч вкусно",
      weight: "10000",
      price: "111",
      parent_id: null,
      image: "uploads/Второе блюдо_1600114863_image4.png",
      active: "1",
      modificators: null,
      moderate: "1",
      modificators_info: [{ variants: [] }],
    },
  ],
}) => {
  console.log("CategoryProducts", products);
  return (
    <Row align="center" margin="0px 0px 20px 0px;" marginTop="0px !important">
      {products?.map((product) => {
        return <Block item={product} />;
      })}
    </Row>
  );
};
