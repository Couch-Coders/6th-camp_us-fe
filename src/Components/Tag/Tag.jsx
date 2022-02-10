import React, { useEffect, useState } from 'react';
import { style } from './Tag.style';

const Tag = ({ tag, role, addCategory, removeCategory, category }) => {
  const [checked, setChecked] = useState();

  const onChangeCheckedTag = () => {
    // setChecked((prev) => !prev);
    // 시작하자마자 23번 줄 코드로 인해 removeCategory 함수를 Tag의 개수만큼
    // 호출하기 때문에 아래와 같이 변경

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
    const isInclude = category.includes(tag);
    setChecked(isInclude);
  }, [category, tag]);

  return (
    <InfoTag onClick={handleTagEvent} checked={checked} role={role}>
      <TagText>{tag}</TagText>
    </InfoTag>
  );
};

export default React.memo(Tag);

const { InfoTag, TagText } = style;
