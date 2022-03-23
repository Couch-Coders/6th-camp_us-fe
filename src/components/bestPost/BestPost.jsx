import Slider from '@ant-design/react-slick';
import React, { useEffect, useState } from 'react';
import * as api from '../../service/api';
import BestPostSkeleton from '../skeleton/bestPostSkeleton/BestPostSkeleton';
import { style } from './bestPost.style';
import BestPostSliderList from './bestPostSliderList/BestPostSliderList';

const BestPost = ({ selectedTabs }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileSize, setIsMobileSize] = useState(false);
  const [bestPostList, setBestPostList] = useState([]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  useEffect(() => {
    getBestLikePost();
    checkBrowserSize();
  }, [selectedTabs]);

  const setPostFilterByType = (post) => {
    if (selectedTabs === 'all') {
      setBestPostList(post);
      return;
    }

    const filteredArray = post.filter((post) => post.postType === selectedTabs);
    setBestPostList(filteredArray);
  };

  const getBestLikePost = async () => {
    try {
      setIsLoading(true);
      const response = await api.getBestPost();
      setPostFilterByType(response.content);
      setIsLoading(false);
    } catch (e) {
      throw new Error(e);
    }
  };

  const checkBrowserSize = () => {
    if (window.innerWidth <= 600) {
      setIsMobileSize(true);
    } else {
      setIsMobileSize(false);
    }
  };

  window.addEventListener('resize', checkBrowserSize);

  return (
    <Wrap>
      {!isLoading ? (
        <>
          <BestPostTitle>🏆 Best 게시글</BestPostTitle>
          {isMobileSize ? (
            <MobileSlideWrap>
              <MobileSlide sizeCount={bestPostList.length}>
                {bestPostList.map((post) => (
                  <BestPostSliderList post={post} key={post.postId} />
                ))}
              </MobileSlide>
            </MobileSlideWrap>
          ) : (
            <SliderWrap sliderLength={3} length={bestPostList.length}>
              <Slider {...settings}>
                {bestPostList.map((post) => (
                  <BestPostSliderList post={post} key={post.postId} />
                ))}
              </Slider>
            </SliderWrap>
          )}
        </>
      ) : (
        <BestPostSkeleton />
      )}
    </Wrap>
  );
};

export default BestPost;

const { Wrap, BestPostTitle, SliderWrap, MobileSlideWrap, MobileSlide } = style;
