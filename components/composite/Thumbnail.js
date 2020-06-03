import React, { PureComponent } from "react";
import styled from "styled-components";

const styledDiv = styled.div`
  cursor: pointer;
`;

const LeftArrow = styled(styledDiv)`
  transform: rotate(-90deg);
  margin-bottom: 20px;
`;

const RightArrow = styled(styledDiv)`
  transform: rotate(90deg);
  margin-top: 20px;
`;

const ThumbnailContainer = styled.div`
  margin-right: 30px;
`;

const ThumbnailImage = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 4px;
`;

const Thumbnail = (props) => {
  const len = props.thumbnailsArr.length;
  let indexLen = 0;
  const indexArr = [];
  const thumbArr = [];

  if (len > 5) {
    indexLen = 5;
  } else {
    indexLen = len;
  }

  for (let i = 0; i < indexLen; i += 1) {
    indexArr.push(i);
    thumbArr.push(props.thumbnailsArr[i]);
  }

  const [state, setState] = React.useState({
    indexLength: indexLen,
    indexes: indexArr,
    disableLeft: true,
    disableRight: !(len > 5),
    thumbnails: thumbArr,
  });

  const showExpandedImg = (index) => {
    if (props.showExpandedImage) {
      props.showExpandedImage(index);
    }
  };

  const leftArrowClick = () => {
    const { indexes } = state;
    const thumbnails = props.thumbnailsArr;
    const tempArr = [];
    let disableLeft = true;
    let disableRight = true;

    if (indexes[0] !== 0) {
      disableLeft = false;

      for (let i = 0; i < indexes.length; i += 1) {
        indexes[i] -= 1;
      }
    }

    indexes.forEach((val) => {
      tempArr.push(thumbnails[val]);
    });

    if (indexes[0] !== 0) {
      disableLeft = false;
    }

    if (indexes[state.indexLength - 1] !== thumbnails.length - 1) {
      disableRight = false;
    }

    setState({
      thumbnails: tempArr,
      indexes,
      disableLeft,
      disableRight,
    });
  };

  const rightArrowClick = () => {
    const { indexes } = state;
    const thumbnails = props.thumbnailsArr;
    const tempArr = [];
    let disableRight = true;
    let disableLeft = false;

    if (indexes[state.indexLength - 1] !== thumbnails.length - 1) {
      disableRight = false;

      for (let i = 0; i < indexes.length; i += 1) {
        indexes[i] += 1;
      }
    }

    indexes.forEach((val) => {
      tempArr.push(thumbnails[val]);
    });

    if (indexes[state.indexLength - 1] !== thumbnails.length - 1) {
      disableRight = false;
    }

    if (indexes[0] === 0) {
      disableLeft = true;
    }

    setState({
      thumbnails: tempArr,
      indexes,
      disableRight,
      disableLeft,
    });
  };

  return (
    <ThumbnailContainer>
      <LeftArrow onClick={leftArrowClick}>
        <img src="/images/arrow.svg" alt="up" />
      </LeftArrow>

      <div>
        {state.thumbnails.map((thumbnailItem, thumbIndex) => (
          <div key={thumbIndex}>
            <ThumbnailImage
              src={thumbnailItem?.enlargedImg}
              onClick={() => showExpandedImg(state.indexes[thumbIndex])}
              key={state.indexes[thumbIndex]}
              alt=""
            />
          </div>
        ))}
      </div>

      <RightArrow onClick={rightArrowClick}>
        <img src="/images/arrow.svg" alt="down" />
      </RightArrow>
    </ThumbnailContainer>
  );
};

export default Thumbnail;
