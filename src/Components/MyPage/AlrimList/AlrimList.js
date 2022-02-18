import React, { useState, useEffect, useContext } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import Image from '../../../Assets/Images/default.png';
import * as api from '../../../Service/camps';
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

export default function AlrimList({ alrimList }) {
  /* 선택한 알림 삭제 */
  // const handleOnDelete = async (id) => {
  //   console.log('선택한 id =', id);
  //   const response = await axios({
  //     method: 'delete',
  //     url: `http://localhost:3001/alrimList/${id}`,
  //   });
  // };

  /* 선택한 알림 읽기 */
  const handleOnUpdate = async (id) => {
    console.log('선택한 알림 읽기', id);
    const response = await api.readAlrim(alrimList.id);
    console.log(response);
  };

  return (
    <>
      <List>
        {alrimList.map((a) => (
          <Alrim key={a.id} checked={a.checked}>
            <CheckedArea
              to={`/detail/${a.id}`}
              onClick={() => handleOnUpdate(a.id)}
            >
              <Thumbnail>
                <Thumb src={a.imgUrl === '' ? Image : a.imgUrl}></Thumb>
              </Thumbnail>
              <Info>
                <TopArea>
                  <AlrimInfo>
                    <Type>{a.type}</Type>
                    <AlrimContent>
                      {a.reactUser} 님이 리뷰에 좋아요를 눌렀습니다.
                    </AlrimContent>
                  </AlrimInfo>
                </TopArea>
                <BottomArea>
                  <AlrimFrom>{a.campName}</AlrimFrom>
                  <Date>{a.createdDate}</Date>
                </BottomArea>
              </Info>
            </CheckedArea>
            <DeleteBtn
            // onClick={(e) => handleOnDelete(a.id)}
            >
              <CloseOutlined />
            </DeleteBtn>
          </Alrim>
        ))}
      </List>
    </>
  );
}
