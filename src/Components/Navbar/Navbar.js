import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { FaTimes, FaBars } from 'react-icons/fa';
import { Button } from '../../globalStyles';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  LogOutBtn,
  MyProfile,
  NavItemBtn,
  NavBtnLink,
} from './Navbar.styles';
import { signInGoogle, signOut } from '../../Service/firebaseAuth';
import { UserContext } from '../auth/AuthProvider';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const { pathname } = useLocation();
  const { user } = useContext(UserContext);

  /* 반응형 */

  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <NavIcon />
          CampUs
        </NavLogo>
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu click={click}>
          <NavItem>
            <NavLinks to="/search" selected={pathname === '/search'}>
              지도
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/" selected={pathname === '/community'}>
              커뮤니티
            </NavLinks>
          </NavItem>
          {user ? (
            <>
              <NavItemBtn>
                <LogOutBtn onClick={signOut}>Logout</LogOutBtn>
              </NavItemBtn>
              <NavItemBtn>
                <MyProfile to="/member">
                  <Avatar size="large" icon={<UserOutlined />} />
                </MyProfile>
              </NavItemBtn>
            </>
          ) : (
            <NavItemBtn>
              {button ? (
                <Button primary onClick={signInGoogle}>
                  Log In
                </Button>
              ) : (
                <Button fontBig primary onClick={signInGoogle}>
                  Log In
                </Button>
              )}
            </NavItemBtn>
          )}
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
