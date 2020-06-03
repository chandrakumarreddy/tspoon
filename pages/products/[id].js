import Head from "next/head";
import ReactImageMagnify from "react-image-magnify";
import styled from "styled-components";
import Thumbnail from "../../components/composite/Thumbnail";
import img from "../../images.json";

const ProductDetailsContainer = styled.div`
  margin: 30px 0;
  padding: 0 27px;
`;

const ProductHeader = styled.div`
  display: flex;
`;

const ProductImage = styled.div`
  display: flex;
  margin-right: 60px;
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const ProductDetails = () => {
  const [imgIndex, setImgIndex] = React.useState(0);
  const showExpandedImage = (index) => setImgIndex(index);
  return (
    <React.Fragment>
      <Head>
        <title>Tablespoon | Rasam Masala</title>
      </Head>
      <ProductDetailsContainer>
        <ProductHeader>
          <ProductImage>
            <Thumbnail
              thumbnailsArr={img.img}
              showExpandedImage={showExpandedImage}
            />
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "",
                  isFluidWidth: false,
                  width: 300,
                  height: 300,
                  src: img.img[imgIndex]?.enlargedImg,
                },
                largeImage: {
                  src: img.img[imgIndex]?.enlargedImg,
                  width: 600,
                  height: 600,
                },
              }}
            />
          </ProductImage>
          <ProductInfo>
            <h1>Curry leafs</h1>
            <h3>$100</h3>
            <h6>1% off</h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s.
            </p>
            <h3>Ingredients</h3>
            <h3>Nutritional info</h3>
          </ProductInfo>
        </ProductHeader>
        <hr />
        <div>
          <div>
            <h3>Description</h3>
          </div>
          <div>
            <p>
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters. On the other hand, we denounce
              with righteous indignation and dislike men who are so beguiled and
              demoralized by the charms of pleasure of the moment, so blinded by
              desire.
            </p>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              demo-elessipublishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
        </div>
        <div>
          <div>
            <h6>Shipping</h6>
          </div>
          <div>
            <p>No detail</p>
          </div>
        </div>
      </ProductDetailsContainer>
    </React.Fragment>
  );
};

export default ProductDetails;
