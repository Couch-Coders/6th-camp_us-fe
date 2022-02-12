import React from 'react';
import styled from 'styled-components';

export const PageUl = styled.ul`
  justify-content: center;
  list-style: none;
  text-align: center;
  border-radius: 3px;
`;

export const PageLi = styled.li`
  display: inline-block;
  min-width: 32px;
  height: 32px;
  margin-right: 8px;
  line-height: 30px;
  text-align: center;
  vertical-align: middle;
  list-style: none;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  outline: 0;
  cursor: pointer;
  &:hover {
    background: #fff;
    border: 1px solid #73d13d;
    color: #73d13d;
  }
  &.active {
    font-weight: 500;
    background: #fff;
    border: 1px solid #73d13d;
    color: #73d13d;
  }
`;

export const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #73d13d;
  }
`;
