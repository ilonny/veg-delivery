import React from "react";
import styled from "styled-components";

import appStore from "../../../assets/icons/appStore.svg";
import googlePlay from "../../../assets/icons/googlePlay.svg";
import { Media } from "../../../lib";

export const DownloadApp = () => (
  <DownloadWrapper>
    <ContainerText>Скачивайте приложение с телефона</ContainerText>

    <Container>
      <GoogleLink
        href="https://play.google.com/store/apps/details?id=com.vegdelivery&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
        target="_blank"
      >
        <GooglePic src={googlePlay} />
      </GoogleLink>
      <AppStoreLink
        href="https://apps.apple.com/us/app/vegdelivery/id1541231498?itsct=apps_box&itscg=30200"
        target="_blank"
      >
        <AppStorePic src={appStore} />
      </AppStoreLink>
    </Container>
  </DownloadWrapper>
);
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const ContainerText = styled.p`
  color: #919399;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  justify-content: center;
`;
const DownloadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
 
`;

const GoogleLink = styled.a`
  height: 45px;
`;
const GooglePic = styled.img`
  height: 45px;
`;
const AppStoreLink = styled.a`
  height: 45px;
`;
const AppStorePic = styled.img`
  padding: 7px;
  width: 108px;
`;
