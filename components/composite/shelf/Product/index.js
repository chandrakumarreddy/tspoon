import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import Strikes from "./Strikes";

const ProductContainer = styled.a`
  color: #000;
  text-decoration: none;
  display: flex;
  margin: 20px auto 0 auto;
  box-sizing: border-box;
  flex: 100%;
  max-width: ${({ view }) => (view ? "80%" : "100%")};
  text-align: ${({ view }) => (view ? "center" : "left")};
  flex-direction: ${({ view }) => (view ? "column" : "row")};
`;

const ProductInfo = styled.div`
  padding-left: 20px;
  flex: 2;
`;

const ProductImage = styled.div`
  flex: 1;
  position: relative;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
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
  ${({ view }) =>
    view
      ? css`
          top: 15px;
          left: 15px;
          padding: 15px;
        `
      : css`
          padding: 5px;
          top: 5px;
          left: 5px;
        `}
  margin: 0;
  font-size: 12px;
  color: #fff;
`;

const Product = ({ product, view }) => {
  return (
    <Link as={`/products/${product.id}`} href={`/products/[id]`}>
      <ProductContainer view={view}>
        <ProductImage>
          <ProductPrice view={view}>₹ 3.3</ProductPrice>
          <StyledImage src={product.image} alt={product.name} />
        </ProductImage>
        <ProductInfo>
          <ProductName view={view}>{product.productTitle}</ProductName>
          {!view ? (
            <React.Fragment>
              <p>{product.description.slice(0, 50)}</p>
              <AddTocart view={view}>
                <span>Add to cart</span>
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
