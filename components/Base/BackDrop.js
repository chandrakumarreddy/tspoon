import React from "react";
import styled from "styled-components";

const StyledBackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
`;

const BackDrop = ({ closeDrawer }) => {
  return <StyledBackDrop onClick={closeDrawer} />;
};

export default BackDrop;
