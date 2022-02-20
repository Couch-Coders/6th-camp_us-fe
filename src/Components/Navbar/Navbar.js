import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { FaTimes, FaBars } from 'react-icons/fa';
import Modal from '../Modal/Modal';
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
  LogInBtn,
  MyProfile,
  NavItemBtn,
  MyMenu,
  MenuList,
  MyPage,
} from './Navbar.styles';
import { signOut } from '../../Service/firebaseAuth';
import { UserContext } from '../auth/AuthProvider';
import DeleteModal from '../Modal/DeleteModal';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [IsClicked, setIsClicked] = useState(false);
  const [button, setButton] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { pathname } = useLocation();
  const { user, isRegisterOpen } = useContext(UserContext);

  const handleClick = () => setClick(!click);

  const onToggleModal = useCallback(() => {
    setIsModalOpen((prev) => !prev);
  }, []);

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
            <NavItemBtn>
              <MyProfile
                to="/"
                onClick={function (e) {
                  e.preventDefault();
                  setIsClicked(!IsClicked);
                }}
              >
                {user.data.imgUrl !== '' ? (
                  <img src={user.data.imgUrl}></img>
                ) : (
                  <Avatar size="large" icon={<UserOutlined />} />
                )}
              </MyProfile>
              <MyMenu Isclicked={IsClicked}>
                <MenuList
                  to="/member"
                  onClick={function () {
                    setIsClicked(false);
                  }}
                >
                  <MyPage>마이페이지</MyPage>
                </MenuList>
                <MenuList
                  to="/"
                  onClick={function () {
                    setIsClicked(false);
                  }}
                >
                  <LogOutBtn onClick={signOut}>Logout</LogOutBtn>
                </MenuList>
              </MyMenu>
            </NavItemBtn>
          ) : (
            <NavItemBtn>
              {button ? (
                <LogInBtn primary onClick={onToggleModal}>
                  Log In
                </LogInBtn>
              ) : (
                <LogInBtn fontBig primary onClick={onToggleModal}>
                  Log In
                </LogInBtn>
              )}
            </NavItemBtn>
          )}
        </NavMenu>
      </NavbarContainer>
      {isModalOpen && <DeleteModal role="login" onClose={onToggleModal} />}
      {isRegisterOpen && (
        <DeleteModal role="register" onClose={onToggleModal} />
      )}
    </Nav>
  );
};

export default Navbar;
