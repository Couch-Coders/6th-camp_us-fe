import React from 'react';
import { style } from './Tag.style';

const Tag = ({ tag }) => {
  return (
    <InfoTag>
      <TagText>{tag}</TagText>
    </InfoTag>
  );
};

export default React.memo(Tag);

const { InfoTag, TagText } = style;
