import styled from 'styled-components';

const TitleWrap = styled.div`
  display: flex;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Notice = styled.span`
  padding-left: 10px;
  color: rgba(0, 0, 0, 0.45);

  @media screen and (max-width: 600px) {
    padding-left: 0;
    padding-bottom: 10px;
  }
`;

const NearCampList = styled.div`
  width: 100%;
`;

const SliderWrap = styled.div`
  .slick-prev {
    left: -57px;
  }

  .slick-next {
    right: -37px;
  }

  .slick-next:before {
    content: '→';
  }

  .slick-cloned {
    display: ${({ length }) => length < 3 && 'none'};
  }

  .slick-track {
    margin: 0;
  }

  .slick-prev:before,
  .slick-next:before {
    color: #c2c2c2;
    font-size: 30px;
    opacity: 1;
  }

  .slick-slide {
    text-align: center;
  }

  @media screen and (max-width: 600px) {
    width: 100%;

    .slick-arrow {
      right: 0;
    }

    .slick-prev:before,
    .slick-next:before {
      display: none;
    }
  }
`;

const SkeletonWrap = styled.div`
  width: 100%;
  display: flex;
`;

export const style = {
  TitleWrap,
  Notice,
  NearCampList,
  SliderWrap,
  SkeletonWrap,
};
