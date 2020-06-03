import Head from "next/head";
import styled from "styled-components";
import Shelf from "../../components/composite/products";
// import Filters from "../../components/composite/products/Filters";
import data from "../../data";

// const Collections = styled.div`
//   display: flex;
// `;

const Collection = styled.div`
  flex: 1;
`;

const ItemContainer = styled.div`
  display: flex;
`;

export default function CollectionItem() {
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
    <React.Fragment>
      <Head>
        <title>Tablespoon | Single collection</title>
      </Head>
      <ItemContainer>
        {/* <Collections>{renderCollection()}</Collections> */}
        <Shelf />
      </ItemContainer>
    </React.Fragment>
  );
}
