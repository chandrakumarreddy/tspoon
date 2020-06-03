import React from "react";
import styled from "styled-components";
import Product from "./Product";
import data from "../../../data";
import ListIcon from "../../../assets/icons/List";
import GridIcon from "../../../assets/icons/Grid";
import Filters from "./Filters";

const ProductsWrapper = styled.div`
  padding: 0 10px;
  margin: 30px 0;
`;

const ViewsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Transparentbutton = styled.button`
  background: none;
  border: none;
  outline: none;
`;

const Filter = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 720px) {
    justify-content: center;
  }
`;

const FilterImage = styled.div`
  width: 30px;
  height: 30px;
  @media (min-width: 720px) {
    display: none;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ProductList = styled.div`
  display: flex;
  flex: 7;
  flex-wrap: wrap;
`;

const ProductsContent = styled.div`
  display: flex;
`;
const DesktopFilters = styled.div`
  flex-grow: 2;
  margin-right: 10px;
  border-right: 1px solid #ccc;
  box-sizing: border-box;
`;

const ProductHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > * {
    margin: 0;
    font-weight: 300;
  }
  > h1 {
    font-size: 32px;
    text-transform: uppercase;
    padding-bottom: 4px;
  }
  > h2 {
    color: #ada2a4;
    font-style: italic;
    font-size: 16px;
    line-height: 20px;
  }
`;

const Prodcuts = () => {
  const [view, setView] = React.useState(true);
  const listColor = view ? "#808080" : "black";
  const gridColor = !view ? "#808080" : "black";
  const handleChange = () => setView((v) => !v);
  const renderProducts = () => {
    return data.product.map((_product) => (
      <Product product={_product} key={_product.id} view={view} />
    ));
  };
  return (
    <ProductsWrapper>
      <ProductHeader>
        <h1>Fresh</h1>
        <h2>24 products in collection</h2>
      </ProductHeader>
      <Filter>
        <FilterImage>
          <StyledImage src={"/images/filter.svg"} alt="filter" />
        </FilterImage>
        <ViewsContainer>
          <Transparentbutton onClick={handleChange} view={view}>
            <ListIcon color={listColor} size="20px" />
          </Transparentbutton>
          <Transparentbutton onClick={handleChange} view={view}>
            <GridIcon color={gridColor} size="20px" />
          </Transparentbutton>
        </ViewsContainer>
      </Filter>
      <ProductsContent>
        <DesktopFilters>
          <Filters />
        </DesktopFilters>
        <ProductList>{renderProducts()}</ProductList>
      </ProductsContent>
    </ProductsWrapper>
  );
};

export default Prodcuts;
