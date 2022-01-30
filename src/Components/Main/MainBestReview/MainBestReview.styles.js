import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BestReviewList = styled.div`
position: relative;

* {
    color: #000;
}
`;

export const BestReview = styled(Link)`
background: #FFFFFF;
border: 1px solid #F0F0F0;
box-sizing: border-box;
border-radius: 2px; 
padding: 18px;
display: flex;
justify-content: start;
align-items: center;

&:hover {
    box-shadow: 0px 2px 8px #F0F1F2;
    box-sizing: border-box;
    transition: all 0.5s ease;
}
`;

export const ReviewImg = styled.img`
width: 170px;
height: 127.5px;
overflow: hidden;

background-color: darkgray;
`;

export const ReviewContent = styled.div`
margin: 0 25px;
width: calc(100% - 270px);
height: 127.5px;
`;

export const CampName = styled.div`
font-size: 17px;
font-weight: bold;
line-height: 24px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`;

export const ReviewInfo = styled.div`
display: flex;
justify-content: start;
align-items: center;
margin: 8px 0;
`;

export const Reviewer = styled.div`
color: rgba(0, 0, 0, 0.45);
font-size: 14px;
margin-right: 8px;
`;

export const Rate = styled.div`
* {
    margin-right: 2px;
}
`;

export const Content = styled.div`
color: #000000;
line-height: 22px;
height: 65px;
white-space: normal;
display: -webkit-box;
overflow: hidden;
-webkit-line-clamp: 3;
text-overflow: ellipsis;
`;

export const ReviewLike = styled.div`
width: 50px;
& svg {
    display:inline-block;
    margin-right: 4px;
}
`;