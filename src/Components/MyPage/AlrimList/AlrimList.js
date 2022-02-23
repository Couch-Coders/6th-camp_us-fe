import React from 'react';
import Alrim from './Alrim';
import { List } from './AlrimList.styles';

export default function AlrimList({ alrimList }) {
  return (
    <>
      <List>
        {alrimList.map((alrim) => (
          <Alrim
            alrim={alrim}
            key={alrim.notificationId}
            checked={alrim.checked}
          />
        ))}
      </List>
    </>
  );
}
