import React, { useContext, useState } from 'react';
import { style } from './CampLike.style';
import * as api from '../../Service/camps';
import { UserContext } from '../auth/AuthProvider';
import { message } from 'antd';

const CampLike = ({ likeCount, campId, liked }) => {
  const { user } = useContext(UserContext);

  const [isLike, setIsLike] = useState(liked);
  const [campLikeCount, setCampLikeCount] = useState(likeCount);

  const onCampLike = async (id) => {
    if (user === null) return;
    const response = await api.campLike(id);
    setIsLike((isLike) => !isLike);
    const likeCount = isLike ? campLikeCount - 1 : campLikeCount + 1;
    setCampLikeCount(likeCount);
    console.log(response);
  };

  const warning = () => {
    message.warning('로그인한 회원만 좋아요를 할 수 있습니다.');
  };

  return (
    <>
      {user ? (
        <LikeWrap>
          <Like
            onClick={() => {
              onCampLike(campId);
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
          {campLikeCount && <LikeCount>{campLikeCount}</LikeCount>}
        </LikeWrap>
      ) : (
        <LikeWrap>
          <NoUserLike
            type="primary"
            onClick={warning}
            style={{
              background: 'transparent',
              border: '0',
              display: 'flex',
              alignItems: 'center',
              padding: '0',
              textShadow: 'none',
              boxShadow: 'none',
            }}
          >
            <Like>
              <LikeIcon
                isLikeState={isLike}
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1817 0C13.923 0 11.964 1.32942 11 3.27142C10.036 1.32942 8.07697 0 5.81826 0C2.60477 0 0 2.69143 0 6.01173C0 12.5676 11 20 11 20C11 20 22 12.5676 22 6.01173C22 2.69143 19.3952 0 16.1817 0Z" />
              </LikeIcon>
            </Like>
            {campLikeCount && <LikeCount>{campLikeCount}</LikeCount>}
          </NoUserLike>
        </LikeWrap>
      )}
    </>
  );
};

export default CampLike;

const { NoUserLike, LikeWrap, Like, LikeIcon, LikeCount } = style;
