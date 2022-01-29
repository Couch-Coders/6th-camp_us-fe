import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoSrc from '../../Assets/Images/Logo.svg';
import { Container } from '../../globalStyles';

export const Nav = styled.nav`
    background: #fff;
    width: 100%
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;

    @media screen and (max-width: 960px) {
        height: 80px;
    }
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 100%;
    background: #FFFFFF;
    box-shadow: 0px 2px 8px #F0F1F2;
    box-sizing: border-box;
    ${Container}
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
`;

export const NavIcon = styled.div`
    width: 50px;
    height: 50px;
    background-color:red;
    background : url(${LogoSrc}) no-repeat center center / 100%;
    display:inline-block;
    margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #73D13D;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: ${({click}) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.5s ease;
        background: #101522;
    }
`;

export const NavItem = styled.li`
    height: 65px;
    
    @media screen and (max-width: 960px) {
        width: 100%;
        height: 80px;
    }
`;

export const NavLinks = styled(Link)`
    color: ${(props) => (props.selected ? '#73D13D' : '#000;')};
    border-bottom:${(props) => (props.selected ? '2px solid #73D13D;' : '2px solid transparent;')}; 
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 20px;
    font-size: 14px;
    padding: 23px;

    &:hover {
        border-bottom: 2px solid #73D13D;
        transition: all 0.3s ease;
    }

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;
        color: #fff;

        &:hover {
            color: #73D13D;
            transition: all 0.3s ease;
            border: none;
        }
    }
`;

export const LogOutBtn = styled.button`
    color: #c0c0c0;
    font-size: 14px;
    margin: 0 20px;
    outline: none;
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
        color: #d3d3d3;
        transition: all 0.3s ease;
    }
`;

export const MyProfile = styled(Link)`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: block;
    color: #d3d3d3;
    text-align: center;
    line-height:50px;
    font-size: 28px;
    background-color: #eeeeee;

    &:hover {
        background-color: #f1f1f1;
        transition: all 0.3s ease;
    }
`;

export const NavItemBtn = styled.li`
    @media screen and (max-width: 960px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 80px;
    }
`;

export const NavBtnLink = styled(Link)`
    display: flex;
    justify-content: 
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
`;