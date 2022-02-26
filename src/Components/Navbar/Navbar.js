import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { FaTimes, FaBars } from 'react-icons/fa';
import * as api from '../../Service/camps';
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
  NewAlrimBadge,
  NavItemBtn,
  MyMenu,
  MenuList,
  MyPage,
} from './Navbar.styles';
import { signOut } from '../../Service/firebaseAuth';
import { UserContext } from '../auth/AuthProvider';
import DeleteModal from '../Modal/Modal';

const Navbar = () => {
  const [menuclick, setMenuClick] = useState(false); // 모바일 메뉴 모달 노출
  const [IsIconClicked, setIsIconClicked] = useState(false); // 아바타 눌렀을 떄 마이페이지 서브메뉴 노출
  const [button, setButton] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alrimData, setAlrimData] = useState([]);
  const { pathname } = useLocation();
  const { user, isRegisterOpen } = useContext(UserContext);

  // 알림 정보 가져오기
  async function AlrimDatarequest(page) {
    const response = await api.getAlrimCount();
    console.log('response', response);
    setAlrimData(response);
  }

  useEffect(() => {
    AlrimDatarequest();
  });

  const handleClick = () => setMenuClick(!menuclick);

  const onToggleModal = useCallback(() => {
    setIsModalOpen((prev) => !prev);
    setMenuClick(false);
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
          {button && 'CampUs'}
        </NavLogo>
        <MobileIcon onClick={handleClick}>
          {menuclick ? <FaTimes /> : <FaBars />}
        </MobileIcon>

        <NavMenu menuclick={menuclick}>
          <NavItem>
            <NavLinks
              to="/search"
              selected={pathname === '/search'}
              onClick={function () {
                setMenuClick(false);
              }}
            >
              지도
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="/community"
              selected={pathname === '/community'}
              onClick={function () {
                setMenuClick(false);
              }}
            >
              커뮤니티
            </NavLinks>
          </NavItem>
          {user ? (
            <NavItemBtn>
              {!menuclick && alrimData > 0 ? (
                <NewAlrimBadge count={alrimData} className="mobileBadge">
                  <MyProfile
                    to="/"
                    onClick={function (e) {
                      e.preventDefault();
                      setIsIconClicked(!IsIconClicked);
                    }}
                  >
                    {user.data.imgUrl !== '' ? (
                      <img src={user.data.imgUrl}></img>
                    ) : (
                      <Avatar size="large" icon={<UserOutlined />} />
                    )}
                  </MyProfile>
                </NewAlrimBadge>
              ) : (
                <MyProfile
                  to="/"
                  onClick={function (e) {
                    e.preventDefault();
                    setIsIconClicked(!IsIconClicked);
                  }}
                >
                  {user.data.imgUrl !== '' ? (
                    <img src={user.data.imgUrl}></img>
                  ) : (
                    <Avatar size="large" icon={<UserOutlined />} />
                  )}
                </MyProfile>
              )}
              <MyMenu Isclicked={IsIconClicked}>
                <MenuList
                  to="/member"
                  onClick={function () {
                    setIsIconClicked(false);
                    setMenuClick(false);
                  }}
                >
                  {menuclick && alrimData > 0 ? (
                    <NewAlrimBadge
                      count={alrimData}
                      style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                      }}
                    >
                      <MyPage>마이페이지</MyPage>
                    </NewAlrimBadge>
                  ) : (
                    <MyPage>마이페이지</MyPage>
                  )}
                </MenuList>

                <MenuList
                  to="/"
                  onClick={function () {
                    setIsIconClicked(false);
                    setMenuClick(false);
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
      {isModalOpen && <Modal role="login" onClose={onToggleModal} />}
      {isRegisterOpen && <Modal role="register" onClose={onToggleModal} />}
    </Nav>
  );
};

export default Navbar;
