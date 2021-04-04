import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Media } from "../../lib";
export const WithTag = ({ as: HtmlTagName, children, ...props }) => (
  <HtmlTagName {...props}>{children}</HtmlTagName>
);

WithTag.defaultProps = {
  as: "div",
};
WithTag.propTypes = {
  /**
   * set html tag name
   * @example
   * <WithTag as="nav" />
   * <WithTag as="some-web-component" />
   */
  as: PropTypes.string,
  // children: PropTypes.node.isRequired,
};

const is = (value) => typeof value !== "undefined";
const prop = (value) => (is(value) ? value : "initial");

export const mixins = (props) => css`
  align-content: ${prop(props.alignContent)};
  align-items: ${prop(props.align)};
  flex-basis: ${prop(props.basis)};
  flex-grow: ${prop(props.grow)};
  flex-shrink: ${prop(props.shrink)};
  justify-content: ${prop(props.justify)};
  order: ${prop(props.order)};
  padding: ${prop(props.padding)};
  width: ${prop(props.width)};
  flex-wrap: ${prop(props.wrap)};
  margin-top: ${prop(props.marginTop)};
  margin: ${prop(props.margin)};
  ${props.mobile_wrap &&
  `${Media.mobile} {
      flex-wrap: wrap;
    }`}
  ${props.tablet_wrap &&
  `${Media.tablet} {
        flex-wrap: wrap;
      }`}
`;

export const Row = styled(WithTag)`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;

  ${mixins}

  ${(p) =>
    p.gap &&
    css`
      & > :not(:first-child) {
        margin-left: ${p.gap};
      }
    `}
    &:not(:first-child) {
    margin-top: 30px;
  }
`;

export const RowColumn = styled(WithTag)`
  display: flex;
  flex-direction: row;
  position: relative;

  ${Media.mobile}{
    flex-direction: column;
  }

  ${mixins}

  ${(p) =>
    p.gap &&
    css`
      & > :not(:first-child) {
        margin-left: ${p.gap};
      }
    `}
    &:not(:first-child) {
    margin-top: 30px;
  }
`;

export const Col = styled(WithTag)`
  display: flex;
  flex-direction: column;
  ${mixins}

  ${(p) =>
    p.gap &&
    css`
      & > :not(:first-child) {
        margin-top: ${p.gap};
      }
    `}
`;

// eslint-disable-next-line no-multi-assign
Row.propTypes = Col.propTypes = {
  /**
   * Set margin between children elements
   * @example
   * <Col gap="4px">
   *   <div>1</div>
   *   <div>2</div>
   *   <div>3</div>
   * </Col>
   */
  gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  grow: PropTypes.number,

  shrink: PropTypes.number,

  basis: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * Set `align-items` css-property
   */
  align: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "baseline",
    "stretch",
  ]),

  justify: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-around",
    "space-between",
    "space-evenly",
    "safe center",
    "unsafe center",
  ]),

  /**
   * Set `align-content` css-property
   */
  alignContent: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-around",
    "space-between",
    "stretch",
  ]),

  order: PropTypes.number,

  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
