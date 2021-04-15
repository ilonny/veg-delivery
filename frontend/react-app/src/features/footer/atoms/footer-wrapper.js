import styled from "styled-components";
import { Media } from "../../../lib";
export const FooterWrapper = styled.div`
  padding: 20px 0;
  background: #fff;
  margin-top: 100px;
  border-top: 1px solid #ccc;
  ${Media.smallDesktop} {
    padding: 70px 15px;
  }
  ${Media.tablet} {
    padding: 50px 0;
  }
  ${Media.mobile} {
    padding: 30px 0;
  }
`;
