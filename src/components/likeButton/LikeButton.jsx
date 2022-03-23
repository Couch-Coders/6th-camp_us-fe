import React, { useContext, useState } from 'react';
import { style } from './likeButton.style';
import * as api from '../../service/api';
import { UserContext } from '../auth/AuthProvider';
import { message } from 'antd';

const LikeButton = ({ likeCount, Id, liked, role }) => {
  const { user } = useContext(UserContext);

  const [isLike, setIsLike] = useState(liked);
  const [likeCountNumber, setLikeCountNumber] = useState(likeCount);

  const onHandleLikeCounter = async (id) => {
    if (user === null) {
      message.warning('로그인한 회원만 좋아요를 할 수 있습니다.');
      return;
    }
    if (role === 'camp') {
      await api.campLike(id);
    } else {
      await api.postLike(id);
    }
    console.log('success');
    setIsLike((isLike) => !isLike);
    const likeCount = isLike ? likeCountNumber - 1 : likeCountNumber + 1;
    setLikeCountNumber(likeCount);
  };

  return (
    <LikeWrap>
      <Like
        onClick={(e) => {
          e.stopPropagation();
          onHandleLikeCounter(Id);
        }}
      >
        <LikeIcon
          isLikeState={isLike}
          viewBox="0 0 22 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.1817 0C13.923 0 11.964 1.32942 11 3.27142C10.036 1.32942 8.07697 0 5.81826 0C2.60477 0 0 2.69143 0 6.01173C0 12.5676 11 20 11 20C11 20 22 12.5676 22 6.01173C22 2.69143 19.3952 0 16.1817 0Z" />
        </LikeIcon>
      </Like>
      {likeCountNumber && <LikeCount>{likeCountNumber}</LikeCount>}
    </LikeWrap>
  );
};

export default LikeButton;

const { LikeWrap, Like, LikeIcon, LikeCount } = style;
