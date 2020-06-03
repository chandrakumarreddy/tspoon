import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import Strikes from "./Strikes";

const ProductContainer = styled.a`
  color: #555;
  text-decoration: none;
  display: flex;
  box-sizing: border-box;
  margin: 0;
  ${({ view }) =>
    view
      ? css`
          flex: 31%;
          max-width: 31%;
          text-align: center;
          margin-left: 20px;
          flex-direction: column;
        `
      : css`
          flex: 100%;
          max-width: 100%;
          text-align: left;
          flex-direction: row;
          margin-bottom: 20px;
        `}
`;

const ProductInfo = styled.div`
  flex: 2;
  margin: 0 0 30px 30px;
`;

const ProductImage = styled.div`
  flex: 1;
  position: relative;
  ${({ view }) =>
    view
      ? css`
          min-height: 260px;
          min-width: 260px;
        `
      : css`
          max-height: 200px;
          max-width: 200px;
        `}
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  transition: visibility 0.5s, opacity 0.5s linear, background-color 0.5s linear;
  :hover {
    > div {
      visibility: visible;
      opacity: 1;
    }
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 2px;
  max-width: 200px;
  max-height: 200px;
`;

const AddTocart = styled.button`
  display: flex;
  flex-direction: column;
  border: none;
  background: none;
  outline: 0;
  color: red;
  font-weight: bold;
  font-size: 18px;
  font-style: italic;
  bottom: 0;
  ${({ view }) =>
    view &&
    css`
      margin: 0 auto;
    `}
  > * {
    text-transform: uppercase;
    color: #f06060;
  }
`;

const ProductName = styled.h3`
  ${({ view }) =>
    !view
      ? css`
          margin: 0;
        `
      : css`
          margin-bottom: 0;
        `}
`;

const ProductPrice = styled.h3`
  border-radius: 50%;
  background-color: #f76b6a;
  position: absolute;
  text-align: center;
  ${({ view, type = "price" }) =>
    view
      ? css`
          width: 50px;
          line-height: 50px;
          height: 50px;
          top: 15px;
          ${type === "price" ? "left: 15px" : "right: 15px"};
        `
      : css`
          top: 5px;
          width: 40px;
          line-height: 40px;
          height: 40px;
          ${type === "price" ? "left: 5px" : "right: 5px"};
        `}
  margin: 0;
  font-size: 12px;
  color: #fff;
`;

const SoldOut = styled(ProductPrice)`
  background-color: orange;
  color: #fff;
`;

const AddButton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  > span {
    width: 50px;
    height: 50px;
    line-height: 50px;
    color: #fff;
    font-size: 42px;
    border-radius: 50%;
    background: red;
  }
`;

const Product = ({ product, view }) => {
  return (
    <Link as={`/products/${product.id}`} href={`/products/[id]`}>
      <ProductContainer view={view}>
        <ProductImage view={view}>
          {!product.availability && (
            <SoldOut type="soldout" view={view}>
              Sold
            </SoldOut>
          )}
          <ProductPrice view={view}>₹ 3.3</ProductPrice>
          <StyledImage src={product.image} alt={product.name} />
          <AddButton>
            <span>+</span>
          </AddButton>
        </ProductImage>
        <ProductInfo>
          <ProductName view={view}>{product.productTitle}</ProductName>
          {!view ? (
            <React.Fragment>
              <p>{product.description.slice(0, 50)}</p>
              <AddTocart view={view}>
                <span>Add to Bag</span>
                <span>
                  <Strikes />
                </span>
              </AddTocart>
            </React.Fragment>
          ) : (
            <p>{product.info}</p>
          )}
        </ProductInfo>
      </ProductContainer>
    </Link>
  );
};

export default Product;
