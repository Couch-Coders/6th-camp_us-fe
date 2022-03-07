import styled from 'styled-components';
import { Badge } from 'antd';
import { Link } from 'react-router-dom';
import LogoSrc from '../../assets/images/Logo.svg';

const Nav = styled.nav`
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

    & .ant-badge {
      margin-top: 0 !important;
    }
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  background: #ffffff;
  box-shadow: 0px 2px 8px #f0f1f2;
  box-sizing: border-box;
  z-index: 1;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 960px) {
    padding-right: 30px;
    padding-left: 30px;
    position: relative;
    height: 50px;
  }
`;

const NavLogo = styled(Link)`
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

const NavIcon = styled.div`
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

const MobileIcon = styled.div`
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

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin: 0;

  @media screen and (max-width: 960px) {
    display: ${({ menuclick }) => (menuclick ? 'block' : 'flex')};
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 50px;
    left: ${({ menuclick }) => (menuclick ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

const NavItem = styled.li`
  height: 65px;
  align-items: center;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 80px;
  }
`;

const NavLinks = styled(Link)`
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

const MyProfile = styled(Link)`
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

const NavItemBtn = styled.li`
  position: relative;
  @media screen and (max-width: 960px) {
    width: 100%;

    & .mobileBadge {
      display: none;
    }
  }
`;

const MyMenu = styled.div`
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

const MenuList = styled(Link)`
  @media screen and (min-width: 961px) {
    font-size: 14px;
    border-bottom: 1px solid #e0e0e0;
    box-sizing: border-box;
    display: inline-block;
    text-align: center;
    width: max-content;

    &:hover {
      background-color: #eeeeee;
    }

    &:last-child {
      border-bottom: 0;
    }
    & * {
      color: #333;
    }
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    text-align: center;
    width: 100%;
    display: block;
    position: relative;
    & * {
      font-size: 14px;
      color: #fff;
    }
  }
  &:hover {
    color: #73d13d;
    transition: all 0.3s ease;
  }
`;

const MyPage = styled.div`
  padding: 8px;
  @media screen and (max-width: 960px) {
    padding: 2rem;
  }
`;

const LogOutBtn = styled.button`
  font-size: 14px;
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 14px;

  @media screen and (max-width: 960px) {
    width: 85%;
    background-color: #222b41;
    color: #6f7c9c;
    padding: 16px 20px;
    border-radius: 3px;
    font-size: 16px;
  }
`;

const LogInBtn = styled.button`
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

const NewAlrimBadge = styled(Badge)`
  margin-top: 10px;
`;

export const style = {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  MyProfile,
  NavItemBtn,
  MyMenu,
  MenuList,
  MyPage,
  LogOutBtn,
  LogInBtn,
  NewAlrimBadge,
};
