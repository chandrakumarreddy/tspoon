import React from "react";
import styled from "styled-components";
import Shelf from "../../components/composite/shelf";
import data from "../../data";

const Collections = styled.div`
  display: flex;
`;

const Collection = styled.div`
  flex: 1;
`;

export default function Products() {
  const renderCollection = () => {
    return data.collections.map((_collection) => (
      <Collection key={_collection.id}>
        <img
          src={_collection.image}
          alt={_collection.name}
          width="100%"
          height="100%"
        />
      </Collection>
    ));
  };
  return (
    <div>
      <Collections>{renderCollection()}</Collections>
      <Shelf />
    </div>
  );
}
