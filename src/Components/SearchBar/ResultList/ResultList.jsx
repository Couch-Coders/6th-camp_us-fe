import React from 'react';
import styled from 'styled-components';
import defaultImage from '../../../Assets/Images/default_image.png';
const ResultList = ({ camp }) => {
  // console.log(camp.firstImageUrl);
  return (
    <Result>
      {camp.firstImageUrl ? (
        <Image src={camp.firstImageUrl} alt="thumbnail" />
      ) : (
        <Image src={defaultImage} alt="thumbnail" />
      )}
    </Result>
  );
};

export default React.memo(ResultList);

const Result = styled.li`
  width: 100%;
  height: 150px;
  list-style: none;
`;

const Image = styled.img`
  width: 130px;
  height: 100%;
`;
