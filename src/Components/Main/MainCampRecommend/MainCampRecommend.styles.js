import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NearCampList = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

export const NearCamp = styled(Link)`
width: 240px;
height: 268px;
display: block;
background: #FFFFFF;
border: 1px solid #F0F0F0;
box-sizing: border-box;
border-radius: 2px;

&:hover {
    box-shadow: 0px 2px 8px #F0F1F2;
    box-sizing: border-box;
    transition: all 0.5s ease;
}
`;

export const CampThumb = styled.img`
width: 100%;
height: 150px;

background-color: darkgray;
`;

export const CampInfo = styled.div`
padding: 18px;
`;

export const CampLike = styled.div`
display: flex;
align-items: center;
color: #000;
font-size: 14px;

* {
    margin-right: 5px;
}
`;

export const CampName = styled.div`
line-height: 24px;
color: rgba(0, 0, 0, 0.85);
margin: 6px 0 8px 0;
font-weight: 600;
font-size: 16px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`;

export const CampAddr = styled.div`
font-size: 14px;
color: rgba(0, 0, 0, 0.45);
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`;