import styled from "styled-components";
import { Media } from "../../../lib";
export const FooterWrapper = styled.div`
  padding: 100px 0px;
  background: #fafafa;
  
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
