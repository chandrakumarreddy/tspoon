import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  top: 0;
  left: 0;
  display: block;
  pointer-events: none;
  pointer-events: none;
  transition: all 0.3s;
  padding: 16px;
  pointer-events: none;
`;

const ModalContainer = styled.div`
  position: relative;
`;

const CloseIcon = styled.div``;

export default function Modal({ open, onClose, children }) {
  return (
    <ModalWrapper open={open}>
      <ModalContainer>
        <CloseIcon>X</CloseIcon>
        {children}
      </ModalContainer>
    </ModalWrapper>
  );
}
