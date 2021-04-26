import React, { useState, useEffect } from "react";
import { HomeTemplate } from "../../features/common";
import { PageTitle, Cart } from "../../features";
import { API_URL } from "../../lib";

export const UserAgree = (props) => {
  return (
    <HomeTemplate>
      <PageTitle>Пользовательское соглашение</PageTitle>
      <iframe
        src={`${API_URL}api/about`}
        style={{ width: "100%", height: "100vh" }}
      ></iframe>
    </HomeTemplate>
  );
};
