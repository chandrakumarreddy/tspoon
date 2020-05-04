import React from "react";
import styled from "styled-components";

const Toolbar = styled.div`
  position: fixed;
  width: 70%;
  max-width: 400px;
  box-shadow: 1px 0 7px rgba(0, 0, 0, 0.5);
  max-width: 400px;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: #fff;
  transform: ${({ drawer = false }) =>
    drawer ? "translateX(0)" : "translateX(-103%)"};
  transition: transform 0.3s ease-in-out;
`;

const ToolBar = ({ children, drawer }) => {
  return <Toolbar drawer={drawer}>{children}</Toolbar>;
};

export default ToolBar;
