import styled from 'styled-components';
import { Badge } from 'antd';
import { Link } from 'react-router-dom';
import LogoSrc from '../../Assets/Images/Logo.svg';
import { Container } from '../../globalStyles';

export const Nav = styled.nav`
  background: #fff;
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 998;

  @media screen and (max-width: 960px) {
    height: 50px;
  }
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 100%;
  background: #ffffff;
  box-shadow: 0px 2px 8px #f0f1f2;
  box-sizing: border-box;
  ${Container}

  @media screen and (max-width: 960px) {
    position: relative;
    height: 50px;
  }
`;

export const NavLogo = styled(Link)`
  color: #222;
  font-weight: 600;
  justify-self: flex-start;
  cursor: poiner;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;

  &:hover {
    color: #222;
  }
  @media screen and (max-width: 960px) {
    font-size: 1.2rem;
  }
`;

export const NavIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: red;
  background: url(${LogoSrc}) no-repeat center center / 100%;
  display: inline-block;
  margin-right: 0.5rem;
  @media screen and (max-width: 960px) {
    width: 30px;
    height: 30px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: -19px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #73d13d;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin: 0;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 50px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

export const NavItem = styled.li`
  height: 65px;
  align-items: center;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 80px;
  }
`;

export const NavLinks = styled(Link)`
  color: ${(props) => (props.selected ? '#73D13D' : '#000;')};
  border-bottom: ${(props) =>
    props.selected ? '2px solid #73D13D;' : '2px solid transparent;'};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 20px;
  font-size: 14px;

  &:hover {
    color: #73d13d;
    border-bottom: 2px solid #73d13d;
    transition: all 0.3s ease;
  }

  @media screen and (min-width: 961px) {
    line-height: 65px;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    color: #fff;

    &:hover {
      color: #73d13d;
      transition: all 0.3s ease;
      border: none;
    }
  }
`;

export const MyProfile = styled(Link)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: block;
  color: #d3d3d3;
  text-align: center;
  line-height: 50px;
  font-size: 28px;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  &.avartar {
    margin-top: 10px;
  }

  & > * {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const NavItemBtn = styled.li`
  position: relative;
  /* @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  } */
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const NavBtnLink = styled(Link)`
  @media screen and (min-width: 961px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
  }

  @media screen and (max-width: 960px) {
    display: block;
  }
`;

export const MyMenu = styled.div`
  @media screen and (min-width: 961px) {
    position: absolute;
    display: ${(props) => (props.Isclicked ? 'block' : 'none')};
    top: 52px;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 3px;
  }
`;

export const MenuList = styled(Link)`
  @media screen and (min-width: 961px) {
    font-size: 14px;
    border-bottom: 1px solid #e0e0e0;
    box-sizing: border-box;
    display: inline-block;
    text-align: center;
    color: #333;
    width: max-content;

    &:last-child {
      border-bottom: 0;
    }

    & > * {
      padding: 8px;
    }
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    text-align: center;
    width: 100%;
    display: block;
    color: #fff;
  }
  &:hover {
    color: #73d13d;
    transition: all 0.3s ease;
  }

  & * {
    font-size: 14px;
  }
`;

export const MyPage = styled.div`
  @media screen and (max-width: 960px) {
    padding: 2rem;
  }
`;

export const LogOutBtn = styled.button`
  font-size: 14px;
  outline: none;
  background: none;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    width: 85%;
    background-color: #222b41;
    color: #6f7c9c;
    padding: 16px 20px;
    border-radius: 3px;
    font-size: 16px;
  }
`;

export const LogInBtn = styled.button`
  font-size: 14px;
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
  background-color: #73d13d;
  padding: 8px 20px;
  border-radius: 3px;
  color: #fff;

  @media screen and (max-width: 960px) {
    width: 85%;
    padding: 16px 20px;
    font-size: 16px;
  }
`;

export const NewAlrimBadge = styled(Badge)`
  margin-top: 10px;
`;
