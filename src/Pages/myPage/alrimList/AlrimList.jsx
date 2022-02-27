import React from 'react';
import styled from 'styled-components';
import Alrim from './alrim/Alrim';

function AlrimList({ alrimList, MemberAlrimRequest }) {
  return (
    <>
      <List>
        {alrimList.map((alrim) => (
          <Alrim
            alrim={alrim}
            key={alrim.notificationId}
            checked={alrim.checked}
            MemberAlrimRequest={MemberAlrimRequest}
          />
        ))}
      </List>
    </>
  );
}

export default React.memo(AlrimList);

const List = styled.div`
  width: 100%;

  @media screen and (max-width: 760px) {
    display: block;
  }
`;
