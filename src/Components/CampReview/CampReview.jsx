import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import ImagePreview from '../ImageUpload/ImagePreview/ImagePreview';
import ImageUpload from '../ImageUpload/ImageUpload';

const CampReview = (props) => {
  const [review, setReview] = useState({
    rate: null,
    text: '',
    image: null,
  });

  const setImageUpload = useCallback((file, action) => {
    if (action === 'add') {
      setReview(() => {
        return { ...review, image: file };
      });
    } else {
      setReview(() => {
        return { ...review, image: null };
      });
    }
  }, []);

  return (
    <Container>
      <ImageUpload setImageUpload={setImageUpload} />
      {review.image !== null && (
        <ImagePreview
          setImageUpload={setImageUpload}
          previewImg={review.image}
        />
      )}
    </Container>
  );
};

export default CampReview;

const Container = styled.div`
  display: flex;
  align-items: center;
`;
