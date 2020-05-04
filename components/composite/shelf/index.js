import React from "react";
import styled from "styled-components";
import Product from "./Product";
import data from "../../../data";
import ListIcon from "../../../assets/icons/List";
import GridIcon from "../../../assets/icons/Grid";

const ShelfContainer = styled.div`
  padding: 0 10px;
`;

const ViewsContainer = styled.div`
  display: flex;
`;

const Transparentbutton = styled.button`
  background: none;
  border: none;
  outline: none;
`;

const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FilterImage = styled.div`
  width: 30px;
  height: 30px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Shelf = () => {
  const [view, setView] = React.useState(false);
  const listColor = view ? "#808080" : "black";
  const gridColor = !view ? "#808080" : "black";
  const handleChange = () => setView((v) => !v);
  const renderProducts = () => {
    return data.product.map((_product) => (
      <Product product={_product} key={_product.id} view={view} />
    ));
  };
  return (
    <ShelfContainer>
      <Filter>
        <FilterImage>
          <StyledImage src={"/images/filter.svg"} alt="filter" />
        </FilterImage>
        <ViewsContainer>
          <Transparentbutton onClick={handleChange} view={view}>
            <ListIcon color={listColor} size="30px" />
          </Transparentbutton>
          <Transparentbutton onClick={handleChange} view={view}>
            <GridIcon color={gridColor} size="30px" />
          </Transparentbutton>
        </ViewsContainer>
      </Filter>
      <ProductList>{renderProducts()}</ProductList>
    </ShelfContainer>
  );
};

export default Shelf;
