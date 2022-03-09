import React, {
  useState,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from 'react';
import { Rate, Input, message } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
import Modal from '../../../../../components/modal/Modal';
import * as API from '../../../../../service/api';
import { UserContext } from '../../../../../components/auth/AuthProvider';
import { style } from './CommentList.style';
import useGetDate from '../../../../../hooks/useGetDate';

const CommentList = () => {
  const [isVisibleReadMore, setisVisibleReadMore] = useState(false);
  const [sliceTextFirst, setSliceTextFirst] = useState();
  const [sliceTextSecond, setSliceTextSecond] = useState();
  const [visibleSecondText, setVisibleSecondText] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const { user } = useContext(UserContext);
  //const chargeTime = useGetDate(commentData.lastModifiedDate);

  const contentRef = useRef();

  const { TextArea } = Input;
  const [comment, setComment] = useState('');

  /* useEffect(() => {
    if (commentData.content.length > 10) {
      const sliceFIrst = commentData.content.substring(0, 9);
      const sliceSecond = commentData.content.substring(9);
      setSliceTextFirst(sliceFIrst);
      setSliceTextSecond(sliceSecond);
      setisVisibleReadMore(true);
    } else {
      setSliceTextFirst(commentData.content);
    }
  }, [commentData.content.length]); */

  // 텍스트 펼치기
  const openMoreText = () => {
    setVisibleSecondText(true);
    setisVisibleReadMore(false);
  };

  // 댓글 수정 완료
  const handleContentChange = (e) => {
    setComment(e.target.value);
  };

  // 댓글 수정
  function handleSubmit(e) {
    e.preventDefault();
    //editComment(comment);
    setEditing(false);
  }

  // 댓글 수정 취소
  function handleCancle(e) {
    e.preventDefault();
    setEditing(false);
    setComment('');
  }

  // 댓글 좋아요
  const likeChange = async () => {
    if (!user) {
      message.warning('로그인한 유저만 리뷰에 좋아요 할 수 있습니다.');
      return;
    }

    /* if (commentData.memberId === user.data.memberId) return;

    await API.changecommentLike(commentData.commentId);
    const commentCnt = comment.liked ? comment.likeCnt - 1 : comment.likeCnt + 1;

    setComment((comment) => {
      return { ...comment, liked: !comment.liked, likeCnt: commentCnt };
    }); */
  };

  // 댓글 수정 컴포넌트
  const editingTemplate = (
    <EditForm>
      <TextArea
        rows={4}
        onChange={handleContentChange}
        placeholder="댓글을 작성해 주세요."
        /* value="댓글" */
      />
      <ButtonArea>
        <EditButton type="submit" onClick={handleSubmit}>
          수정완료
        </EditButton>
        <CancleButton onClick={handleCancle}>취소</CancleButton>
      </ButtonArea>
    </EditForm>
  );

  // 댓글 목록 컴포넌트
  const [show, setShow] = useState(false);
  const viewTemplate = (
    <Wrap>
      <Comment>
        <TopArea>
          <UserInfo>
            <Avatar></Avatar>
            <NickName>닉네임</NickName>
            <Author>작성자</Author>
          </UserInfo>
          <HandleContent>
            <Handlecomment onClick={() => setEditing(true)}>수정</Handlecomment>
            <Handlecomment onClick={() => setShow(true)}>삭제</Handlecomment>
          </HandleContent>
          {show && (
            <Modal
              onClose={setShow}
              commentId={comment.commentId}
              //deleteTask={deleteComment}
              role="deletecomment"
            />
          )}
        </TopArea>
        {/* <Content ref={contentRef}>
            {sliceTextFirst}
            {visibleSecondText && sliceTextSecond}
            {isVisibleReadMore && (
              <ReadMore onClick={openMoreText}> ...더 보기</ReadMore>
            )}
          </Content> */}
        <Content>
          꿀팁 공유 감사합니다 ! 너무 도움이 되었어요꿀팁 공유 감사합니다 ! 너무
          도움이 되었어요꿀팁 공유 감사합니다 ! 너무 도움이 되었어요꿀팁 공유
          감사합니다 ! 너무 도움이 되었어요꿀팁 공유 감사합니다 ! 너무 도움이
          되었어요꿀팁 공유 감사합니다 ! 너무 도움이 되었어요꿀팁 공유
          감사합니다 ! 너무 도움이 되었어요꿀팁 공유 감사합니다 ! 너무 도움이
          되었어요꿀팁 공유 감사합니다 ! 너무 도움이 되었어요꿀팁 공유
          감사합니다 ! 너무 도움이 되었어요
        </Content>
        <BottomArea>
          <Date>3일전</Date>
          <CommentLike
            //liked={comment.liked}
            onClick={likeChange}
            /* isMyReview={
              user && comment.memberId === user.data.memberId ? true : false
            } */
          >
            <LikeOutlined />
            10
          </CommentLike>
        </BottomArea>
      </Comment>
    </Wrap>
  );

  return <List>{isEditing ? editingTemplate : viewTemplate}</List>;
};

export default CommentList;

const {
  Wrap,
  List,
  EditForm,
  ButtonArea,
  EditButton,
  CancleButton,
  Comment,
  TopArea,
  UserInfo,
  Avatar,
  NickName,
  Author,
  HandleContent,
  Handlecomment,
  Date,
  BottomArea,
  Content,
  CommentLike,
} = style;
