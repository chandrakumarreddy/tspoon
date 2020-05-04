/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import MediaQuery from "react-responsive";
import ToolBar from "../Base/ToolBar";
import MobileMenu from "../composite/MobileMenu";
import BackDrop from "../Base/BackDrop";

const DHeaderContainer = styled.div`
  background-color: #f5f4f4;
`;

const DesktopHeader = styled.header`
  margin: 0 auto;
  width: 96%;
  padding: 27px;
  padding-bottom: 0;
`;

const DesktopCart = styled.div`
  display: flex;
  align-items: flex-end;
`;

const DesktopNav = styled.nav`
  display: flex;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin: 0 auto;
  width: 96%;
  height: 84px;
  text-align: center;
`;

const NavListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 25px 38px 25px 22px;
  cursor: pointer;
`;

const CartValue = styled.span`
  margin-right: 5px;
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ spaceBetween }) =>
    spaceBetween ? "space-between" : "flex-start"};
`;

const Space = styled.span`
  margin-right: 10px;
`;

const StyledIcon = styled.div`
  position: relative;
  ${({ width = 30, height = 30 }) => css`
    width: ${width}px;
    height: ${height}px;
  `}
  margin-right: ${({ marginRight }) => (marginRight ? "6px" : "0")}
`;

const Img = styled.img`
  cursor: pointer;
  margin-left: ${({ marginLeft }) => (marginLeft ? "16px" : 0)};
  width: 100%;
  height: 100%;
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  padding: 0 10px;
  min-height: 60px;
  display: flex;
  flex-direction: column;
  transition: background 0.15s ease-in-out;
  border-bottom: none;
  ${({ scroll, search }) =>
    scroll
      ? css`
          background-color: #fff;
          min-height: ${search ? "90px" : "60px"};
          box-shadow: 0 1px 5px rgba(190, 190, 190, 0.5);
        `
      : css`
          background-color: transparent;
        `}
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

const CartCount = styled.div`
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: orange;
  text-align: center;
  border-radius: 50%;
  font-size: 10px;
  position: absolute;
  top: -5px;
  right: 0px;
`;

const StyledButton = styled.button`
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;
`;

const Search = styled.input`
  padding: 5px;
  border: 1px solid black;
  margin: 5px;
  border-radius: 3px;
  box-sizing: border-box;
  visibility: hidden;
  display: ${({ search }) => (!search ? "none" : "block")};
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
  ${({ search }) =>
    search &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`;

const hideHeader = { "/admin": true };

export default function Layout({ children }) {
  const router = useRouter();
  const headerStatus = !hideHeader[router.asPath];
  const [search, setSearch] = React.useState(false);
  const [drawer, setDrawer] = React.useState(false);
  const [scroll, setScrolled] = React.useState(false);
  const headerHeight = React.useRef();
  React.useEffect(() => {
    const handleScoll = () => {
      if (window.pageYOffset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScoll);
  }, []);

  const closeDrawer = () => setDrawer(false);
  return (
    <div>
      <MediaQuery query="(max-device-width: 650px)">
        <ToolBar drawer={drawer}>
          <MobileMenu closeDrawer={closeDrawer} />
        </ToolBar>
        {drawer && <BackDrop closeDrawer={closeDrawer} />}
        {headerStatus && (
          <Header scroll={scroll} search={search}>
            <HeaderTop>
              <FlexWrapper>
                <StyledButton onClick={() => setDrawer(true)}>
                  <span className="burger-icon" />
                  <span className="burger-icon middle" />
                  <span className="burger-icon bottom" />
                </StyledButton>
                <StyledIcon>
                  <Img
                    src={"/images/search.svg"}
                    alt="search"
                    onClick={() => setSearch((s) => !s)}
                  />
                </StyledIcon>
              </FlexWrapper>
              <StyledIcon width={50}>
                <Img src="/images/Logo.png" alt="logo" />
              </StyledIcon>
              <FlexWrapper>
                <StyledIcon>
                  <Img src={"/images/favourite.svg"} alt="cart" />
                </StyledIcon>
                <Space />
                <StyledIcon>
                  <Img src={"/images/cart.svg"} alt="cart" />
                  <CartCount>
                    <span className="count">0</span>
                  </CartCount>
                </StyledIcon>
              </FlexWrapper>
            </HeaderTop>
            <Search
              placeholder="search here"
              type="text"
              search={search}
              scroll={scroll}
            />
          </Header>
        )}
        <div
          style={{
            marginTop: `${!headerStatus ? "0px" : search ? "90px" : "60px"}`,
          }}
        >
          {children({ search, drawer, scroll })}
        </div>
      </MediaQuery>
      <MediaQuery query="(min-device-width: 651px)">
        {headerStatus && (
          <DHeaderContainer ref={headerHeight}>
            <DesktopHeader>
              <FlexWrapper spaceBetween>
                <StyledIcon width={24}>
                  <Img src={"/images/search.svg"} alt="search" />
                </StyledIcon>
                <StyledIcon width={90} height={45}>
                  <Img src="/images/Logo.png" alt="logo" />
                </StyledIcon>
                <DesktopCart>
                  <CartValue>₹ 0.00</CartValue>
                  <StyledIcon width={24}>
                    <Img src={"/images/cart.svg"} alt="cart" />
                  </StyledIcon>
                </DesktopCart>
              </FlexWrapper>
              <DesktopNav>
                <NavList>
                  <NavListItem>
                    Home
                    <StyledIcon width={14} marginRight>
                      <Img src={"/images/add.svg"} alt="home" />
                    </StyledIcon>
                  </NavListItem>
                  <NavListItem>
                    Products
                    <StyledIcon width={14} marginRight>
                      <Img src={"/images/add.svg"} alt="products" />
                    </StyledIcon>
                  </NavListItem>
                  <NavListItem>
                    Recipes
                    <StyledIcon width={14} marginRight>
                      <Img src={"/images/add.svg"} alt="recipes" />
                    </StyledIcon>
                  </NavListItem>
                  <NavListItem>
                    About us
                    <StyledIcon width={14} marginRight>
                      <Img src={"/images/add.svg"} alt="about us" />
                    </StyledIcon>
                  </NavListItem>
                  <NavListItem>
                    Contact us
                    <StyledIcon width={14} marginRight>
                      <Img src={"/images/add.svg"} alt="contact us" />
                    </StyledIcon>
                  </NavListItem>
                </NavList>
              </DesktopNav>
            </DesktopHeader>
          </DHeaderContainer>
        )}
        {children({ search, drawer, scroll, headerHeight })}
      </MediaQuery>
    </div>
  );
}
