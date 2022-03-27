import styled from 'styled-components';

const Wrap = styled.div`
  margin-bottom: 16px;
  padding: 10px 20px;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  background-color: #ffffff;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    padding: 10px 5px;
  }
`;

const SliderWrap = styled.div`
  width: 100%;

  .slick-slider {
    height: 100%;
  }

  .slick-prev {
    left: -15px;
    z-index: 99;
  }

  .slick-next {
    right: -15px;
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
    font-size: 20px;
    opacity: 1;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const BestPostTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  margin-bottom: 16px;
`;

const MobileSlideWrap = styled.div`
  overflow-x: scroll;
`;

const MobileSlide = styled.div`
  width: ${({ sizeCount }) => `${150 * sizeCount}px`};
  display: flex;
`;

export const style = {
  Wrap,
  SliderWrap,
  BestPostTitle,
  MobileSlideWrap,
  MobileSlide,
};
