import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { HomeTemplate } from "../../features/common";
import { PageTitle, Cart } from "../../features";
import { API_URL } from "../../lib";

export const AboutCompany = (props) => {
  return (
    <HomeTemplate>
      <PageTitle>О компании</PageTitle>
      <h1>Hello</h1>
    </HomeTemplate>
  );
};
