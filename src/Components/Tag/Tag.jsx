import React, { useState } from 'react';
import { style } from './Tag.style';

const Tag = ({ tag, role }) => {
  const [checked, setChecked] = useState(false);

  const onChangeCheckedTag = () => {
    role === 'category' && setChecked((prev) => !prev);
  };

  return (
    <InfoTag onClick={onChangeCheckedTag} checked={checked} role={role}>
      <TagText>{tag}</TagText>
    </InfoTag>
  );
};

export default React.memo(Tag);

const { InfoTag, TagText } = style;
