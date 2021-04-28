import styled from "styled-components";
import { Media } from "../../../lib";
export const BlockWrapper = styled.div`
  padding: 10px;
  height: 350px;
  flex: 1;
  flex: 1 1 25%;
  max-width: 25%;
  transition: all 250ms ease;
  border-radius: 15px;
  position: relative;
  &:hover {
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
    [translate] {
      transform: translateX(0);
    }
  }
  // ${Media.smallDesktop} {
  //     flex: 1 1 33.33333333%;
  //     max-width: 33.33333333%;
  // }
  ${Media.tablet} {
    flex: 1 1 50%;
    max-width: 50%;
  }
  ${Media.mobile} {
    // flex: 1 1 100%;
    // max-width: 100%;
    height: 420px;

  }
`;
