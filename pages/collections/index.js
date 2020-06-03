import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import data from "../../data";

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 32px;
  font-weight: 300;
  text-align: center;
  padding: 0;
  margin: 20px 0px 40px 0;
`;

const Product = styled.div`
  padding: 20px 10px;
`;

const Collections = styled.div`
  max-width: 80%;
  margin: 0 auto;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 720px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Collection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #555;
  margin-bottom: 20px;
  transition: background-color 320ms ease-in-out;
  cursor: pointer;
  :hover {
    > * {
      color: #f06060;
    }
  }
`;
const Image = styled.div`
  min-height: 260px;
  width: 100%;
  background-color: #f5f4f4;
  display: flex;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 320ms ease-in-out;
  :hover {
    background-color: #f06060;
  }
`;

const Img = styled.img`
  max-width: 200px;
  max-height: 200px;
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
            <Img src={_collection.image} alt={_collection.name} />
          </Image>
          <h4>{_collection.name}</h4>
        </Collection>
      </Link>
    ));
  };
  return (
    <React.Fragment>
      <Head>
        <title>Tablespoon | Collections</title>
      </Head>
      <Product>
        <Title>Product collections</Title>
        <Collections>{renderCollections()}</Collections>
      </Product>
    </React.Fragment>
  );
}
