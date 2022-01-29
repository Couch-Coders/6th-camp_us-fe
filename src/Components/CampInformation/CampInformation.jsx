import React, { useContext } from 'react';
import { CampContext } from '../../context/CampContext';

const CampInformation = (props) => {
  const data = useContext(CampContext);
  console.log(data);

  return <div>info</div>;
};

export default CampInformation;
