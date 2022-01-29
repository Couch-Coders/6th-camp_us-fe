import React from 'react';
import { style } from './CampInfoTag.style';

const CampInfoTag = ({ tag }) => {
  return (
    <InfoTag>
      <TagText>{tag}</TagText>
    </InfoTag>
  );
};

export default React.memo(CampInfoTag);

const { InfoTag, TagText } = style;
