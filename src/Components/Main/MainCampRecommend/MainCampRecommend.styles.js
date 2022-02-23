import styled from 'styled-components';

export const TitleWrap = styled.div`
  display: flex;
`;

export const Notice = styled.span`
  padding-left: 10px;
  color: rgba(0, 0, 0, 0.45);
`;

export const NearCampList = styled.div`
  width: 100%;
`;

export const SliderWrap = styled.div`
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
