import React, { useEffect, useState } from 'react';
import { style } from './Tag.style';

const Tag = ({ tag, role, addCategory, removeCategory }) => {
  const [checked, setChecked] = useState();

  const onChangeCheckedTag = () => {
    // setChecked((prev) => !prev);
    // 시작하자마자 23번 줄 코드로 인해 removeCategory 함수를 Tag의 개수만큼
    // 호출하기 때문에 아래와 같이 변경

    checked !== false && setChecked(false);
    checked !== true && setChecked(true);
  };

  const handleTagEvent = () => {
    if (role !== 'category') return;

    onChangeCheckedTag();
  };

  useEffect(() => {
    console.log(checked);
    checked === false && removeCategory(tag);
    checked === true && addCategory(tag);
  }, [checked]);

  return (
    <InfoTag onClick={handleTagEvent} checked={checked} role={role}>
      <TagText>{tag}</TagText>
    </InfoTag>
  );
};

export default React.memo(Tag);

const { InfoTag, TagText } = style;
