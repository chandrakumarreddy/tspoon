import React from "react";
import styled from "styled-components";
import Link from "next/link";
import data from "../../data";

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 32px;
  font-weight: 300;
  text-align: center;
  padding: 0;
  margin: 0px 0px 20px 0;
`;

const Product = styled.div`
  padding: 20px 10px;
`;

const Collections = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
`;

const Collection = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #000;
`;
const Image = styled.div`
  background-color: #f5f4f4;
`;

export default function ProductCollection() {
  const renderCollections = () => {
    return data.collections.map((_collection) => (
      <Link
        key={_collection.to}
        as={`/collections/${_collection.to}`}
        href={`/collections/[collectionType]`}
      >
        <Collection>
          <Image>
            <img
              src={_collection.image}
              alt={_collection.name}
              width="100%"
              height="100%"
            />
          </Image>
          <h4>{_collection.name}</h4>
        </Collection>
      </Link>
    ));
  };
  return (
    <Product>
      <Title>Product collection</Title>
      <Collections>{renderCollections()}</Collections>
    </Product>
  );
}
