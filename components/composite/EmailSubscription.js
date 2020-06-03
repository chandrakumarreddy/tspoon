import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f3b562;
`;

const LeftContent = styled.div`
  flex: 1;
  > * {
    color: #fff;
    font-weight: 300;
    text-align: center;
    text-transform: uppercase;
  }
  ::before {
    content: "Family";
    font-size: 100px;
    color: rgba(255, 255, 255, 0.2);
    position: absolute;
    transform: translate(50%);
    font-style: italic;
    line-height: 180px;
  }
`;
const RightContent = styled.div`
  flex: 1;
`;

const Email = styled.input`
  padding: 20px;
  border: none;
  outline: none;
  width: 100%;
`;

const MaxWidth = styled.div`
  margin: auto;
  width: ${({ width }) => `${width}%` || "100%"};
  display: flex;
  align-items: center;
`;

const SubscribeButton = styled.button`
  background: #fff;
  border: none;
  outline: none;
  padding-right: 20px;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
`;

const EmailContainer = styled.div`
  display: flex;
`;

export default function EmailSubscription() {
  return (
    <Container>
      <MaxWidth width={80}>
        <LeftContent>
          <h1>Business</h1>
          <h1>Values</h1>
          <h1>Attitude</h1>
        </LeftContent>
        <RightContent>
          <p>
            Join folks at Foodly family to get the latest news and the best
            offers
          </p>
          <EmailContainer>
            <Email type="email" placeholder="Your e-mail" autoComplete="off" />
            <SubscribeButton>Subscribe</SubscribeButton>
          </EmailContainer>
        </RightContent>
      </MaxWidth>
    </Container>
  );
}
