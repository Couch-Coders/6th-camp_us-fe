import React from 'react';
import { style } from './ImagePreview.style';

const ImagePreview = ({ setImageUpload, previewImg, previewName }) => {
  return (
    <Wrap>
      <Image src={previewImg} alt="preview" />
      {previewName && <ImageName>{previewName}</ImageName>}
      <CloseBtn onClick={setImageUpload}>
        <svg
          width="10"
          height="10"
          viewBox="0 0 12 12"
          fill="black"
          fillOpacity="0.6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.92473 5.99916L11.6122 0.411663C11.6908 0.318806 11.6247 0.177734 11.5033 0.177734H10.0783C9.99437 0.177734 9.91401 0.215234 9.85865 0.27952L5.99258 4.88845L2.12651 0.27952C2.07294 0.215234 1.99258 0.177734 1.90687 0.177734H0.481867C0.360439 0.177734 0.294367 0.318806 0.372939 0.411663L5.06044 5.99916L0.372939 11.5867C0.355338 11.6074 0.344047 11.6327 0.340404 11.6596C0.336762 11.6865 0.340922 11.7139 0.352391 11.7386C0.36386 11.7632 0.382156 11.784 0.405107 11.7985C0.428057 11.8131 0.454698 11.8207 0.481867 11.8206H1.90687C1.9908 11.8206 2.07115 11.7831 2.12651 11.7188L5.99258 7.10988L9.85865 11.7188C9.91222 11.7831 9.99258 11.8206 10.0783 11.8206H11.5033C11.6247 11.8206 11.6908 11.6795 11.6122 11.5867L6.92473 5.99916Z" />
        </svg>
      </CloseBtn>
    </Wrap>
  );
};

export default ImagePreview;

const { Wrap, Image, ImageName, CloseBtn } = style;
