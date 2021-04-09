import React, { useState, useEffect } from "react";
import { HomeTemplate } from "../../features/common";
import { PageTitle, Cart } from "../../features";
import { API_URL } from "../../lib";

export const UserAgree = (props) => {
  return (
    <HomeTemplate>
      <PageTitle>Пользовательское соглашение</PageTitle>
    </HomeTemplate>
  );
};
