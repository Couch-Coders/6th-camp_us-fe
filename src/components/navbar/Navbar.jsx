import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useRef,
} from 'react';
import { useLocation } from 'react-router-dom';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { FaTimes, FaBars } from 'react-icons/fa';
import * as api from '../../service/api';
import AuthModal from '../modal/authModal/AuthModal';
import { style } from './Navbar.styles';
import { signOut } from '../../service/firebaseAuth';
import { UserContext } from '../auth/AuthProvider';

const Navbar = () => {
  const [menuclick, setMenuClick] = useState(false); // 모바일 메뉴 모달 노출
  const [IsIconClicked, setIsIconClicked] = useState(false); // 아바타 눌렀을 떄 마이페이지 서브메뉴 노출
  const [isDesktop, setIsDesktop] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alrimData, setAlrimData] = useState([]);
  const { pathname } = useLocation();
  const { user, isRegisterOpen } = useContext(UserContext);

  const menuRef = useRef();

  useEffect(() => {
    AlrimDatarequest();
  });

  useEffect(() => {
    deviceSizeCheck();
  }, []);

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (!menuRef.current?.contains(e.target)) setIsIconClicked(false);
  };

  // 알림 정보 가져오기
  async function AlrimDatarequest() {
    const response = await api.getAlrimCount();
    setAlrimData(response);
  }

  // 모바일 메뉴 클릭
  const handleMenuClick = () => setMenuClick(!menuclick);

  // 모달 토글
  const onToggleModal = useCallback(() => {
    setIsModalOpen((prev) => !prev);
    setMenuClick(false);
  }, []);

  //
  const deviceSizeCheck = () => {
    if (window.innerWidth <= 960) {
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
    }
  };

  window.addEventListener('resize', deviceSizeCheck);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <NavIcon />
          {isDesktop && 'CampUs'}
        </NavLogo>
        <MobileIcon onClick={handleMenuClick}>
          {menuclick ? <FaTimes /> : <FaBars />}
        </MobileIcon>

        <NavMenu menuclick={menuclick} ref={menuRef}>
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
                      <img src={user.data.imgUrl} alt="profile" />
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
                    <img src={user.data.imgUrl} alt="profile" />
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
                  <LogOutBtn onClick={signOut}>로그아웃</LogOutBtn>
                </MenuList>
              </MyMenu>
            </NavItemBtn>
          ) : (
            <NavItemBtn>
              {isDesktop ? (
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
      {isModalOpen && <AuthModal role="login" onClose={onToggleModal} />}
      {isRegisterOpen && <AuthModal role="register" onClose={onToggleModal} />}
    </Nav>
  );
};

export default Navbar;

const {
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
} = style;
