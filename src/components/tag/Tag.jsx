import React, { useEffect, useState } from 'react';
import { style } from './Tag.style';

const Tag = ({ tag, role, addCategory, removeCategory, category }) => {
  const [checked, setChecked] = useState();

  const onChangeCheckedTag = () => {
    // 카테고리 추가
    if (checked !== false) {
      setChecked(false);
      removeCategory(tag);
    }

    // 카테고리 삭제
    if (checked !== true) {
      setChecked(true);
      addCategory(tag);
    }
  };

  const handleTagEvent = () => {
    if (role !== 'category') return;
    onChangeCheckedTag();
  };

  useEffect(() => {
    if (!category) return;
    const isInclude = category.includes(tag);
    setChecked(isInclude);
  }, [category, tag]);

  return (
    <InfoTag onClick={handleTagEvent} checked={checked} role={role}>
      {tag}
    </InfoTag>
  );
};

export default React.memo(Tag);

const { InfoTag } = style;
