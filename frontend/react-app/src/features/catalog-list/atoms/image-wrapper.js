import styled from "styled-components";
import { Media } from "../../../lib";
export const ImageWrapper = styled.div`
  padding: 10px;
  flex: 1;
  width: 100%;
  height: 180px;
  // min-height: 300px;
  // max-height: 300px;
  position: relative;
  overflow: hidden;
  ${Media.mobile} {
    height: 250px;
  }
`;
