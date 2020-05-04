import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledHeader = styled.h3`
  background-color: #f76b6a;
  margin: 0;
  padding: 10px;
  text-align: center;
  color: #fff;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 5px 20px 25px 20px;
`;

const StyledLi = styled.li`
  cursor: pointer;
  padding: 8px 0;
  color: #212b35;
  font-size: 13px;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

const StyledA = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: #000;
`;

const Linkdd = styled.img`
  width: 20px;
  height: 20px;
`;

const Img = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 10px;
`;

const StyledSpan = styled.span`
  display: flex;
  align-items: center;
`;

export default function MobileMenu({ closeDrawer }) {
  return (
    <Menu>
      <StyledHeader>Menu</StyledHeader>
      <StyledUl>
        <StyledLi onClick={closeDrawer}>
          <Link href="/">
            <StyledA>
              <StyledSpan>
                <Img
                  src={"/images/home.svg"}
                  alt="home"
                  width="100%"
                  height="100%"
                />
                Home
              </StyledSpan>
              <StyledSpan>
                <Linkdd
                  src={"/images/add.svg"}
                  alt="add"
                  width="100%"
                  height="100%"
                />
              </StyledSpan>
            </StyledA>
          </Link>
        </StyledLi>
        <StyledLi onClick={closeDrawer}>
          <Link href="/collections">
            <StyledA>
              <StyledSpan>Products</StyledSpan>
              <StyledSpan>
                <Linkdd src={"/images/add.svg"} alt="add" width="100%" />
              </StyledSpan>
            </StyledA>
          </Link>
        </StyledLi>
        <StyledLi onClick={closeDrawer}>
          <Link href="/">
            <StyledA>
              <StyledSpan>Recipes</StyledSpan>
              <StyledSpan>
                <Linkdd src={"/images/add.svg"} alt="add" width="100%" />
              </StyledSpan>
            </StyledA>
          </Link>
        </StyledLi>
        <StyledLi onClick={closeDrawer}>
          <Link href="/">
            <StyledA>
              <StyledSpan>About us</StyledSpan>
              <StyledSpan>
                <Linkdd src={"/images/add.svg"} alt="add" width="100%" />
              </StyledSpan>
            </StyledA>
          </Link>
        </StyledLi>
        <StyledLi onClick={closeDrawer}>
          <Link href="/">
            <StyledA>
              <StyledSpan>
                <Img
                  src={"/images/call.svg"}
                  alt="contact us"
                  width="100%"
                  height="100%"
                />
                Contact us
              </StyledSpan>
              <StyledSpan>
                <Linkdd
                  src={"/images/add.svg"}
                  alt="add"
                  width="100%"
                  height="100%"
                />
              </StyledSpan>
            </StyledA>
          </Link>
        </StyledLi>
      </StyledUl>
    </Menu>
  );
}
