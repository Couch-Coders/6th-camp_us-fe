//알림리스트

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../auth/AuthProvider';
import { auth } from '../../../Service/firebaseAuth';
import { CloseOutlined } from '@ant-design/icons';
import Image from '../../../Assets/Images/default.png';
import {
  List,
  Alrim,
  CheckedArea,
  Thumbnail,
  Thumb,
  Info,
  TopArea,
  AlrimInfo,
  Type,
  AlrimContent,
  DeleteBtn,
  BottomArea,
  AlrimFrom,
  Date,
} from './AlrimList.styles';

export default function AlrimList(props) {
  const post = props.data;
  const handleOnUpdate = props.handleOnUpdate;
  const handleOnDelete = props.handleOnDelete;

  const { user } = useContext(UserContext);
  const defaultHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  return (
    <>
      <List>
        {post.map((a) => (
          <Alrim key={a.alrimId} checked={a.checked}>
            <CheckedArea to={`/`} onClick={(e) => handleOnUpdate(e, a.alrimId)}>
              <Thumbnail>
                <Thumb src={a.imgUrl === '' ? Image : a.imgUrl}></Thumb>
              </Thumbnail>
              <Info>
                <TopArea>
                  <AlrimInfo>
                    <Type>{a.type}</Type>
                    <AlrimContent>
                      {a.reactUser} 님이 게시글에 좋아요를 눌렀습니다.eunbee
                      님이 게시글에 좋아요를 눌렀습니다.eunbee 님이 게시글에
                      좋아요를 눌렀습니다.
                    </AlrimContent>
                  </AlrimInfo>
                </TopArea>
                <BottomArea>
                  <AlrimFrom>{a.campName}</AlrimFrom>
                  <Date>{a.createdDate}</Date>
                </BottomArea>
              </Info>
            </CheckedArea>
            <DeleteBtn onClick={(e) => handleOnDelete(a.alrimId)}>
              <CloseOutlined />
            </DeleteBtn>
          </Alrim>
        ))}
      </List>
    </>
  );
}
